import { ReactNode } from 'react'
import Image from 'next/image'
import pointGreen from 'public/rounded-star-checked-green.svg'
import pointRed from 'public/rounded-star-checked-pinky.svg'
import lineGreen from 'public/stripe-green.svg'
import lineRed from 'public/stripe-pinky.svg'
import { isDatePast } from '@/utils/check-date'
import { formatDate } from '@/utils/format-date'

type ITimelinePointProps = {
  children?: ReactNode
  title: string
  date: string
  isLast?: boolean
}

type ITimelineProps = {
  data: ITimelinePointProps[]
}

export function TimelinePoint({ title, date, isLast }: ITimelinePointProps) {
  const isPassed = isDatePast(date)
  const pass = isPassed ? pointGreen : pointRed
  const line = isPassed ? lineGreen : lineRed

  return (
    <div className='flex-none'>
      <div className='flex relative items-start'>
        <div className='relative flex flex-col items-center gap-2'>
          <Image className='' src={pass} alt='' width={142} height={142}></Image>
          <div className='flex flex-col items-center'>
            <p className='font-bold text-base md:text-xl text-white font-serif text-center'>{title}</p>
            <p className='font-sans text-sm md:text-base text-white text-center'>{formatDate(date)}</p>
          </div>
        </div>
        {!isLast && <Image className=' py-[64px] rotate-0 relative' src={line} alt='' height={11}></Image>}
      </div>
    </div>
  )
}

export function Timeline({ data }: ITimelineProps) {
  return (
    <div className='flex relative border-cpurple-4 border-4 rounded-[42px] px-2 py-4 md:px-4 md:py-8'>
      <div className='h-auto w-20 bg-gradient-to-r from-cpurple-5 to-transparent z-10 absolute left-2 md:left-4 top-4 bottom-4' />
      <div className='h-auto w-20 bg-gradient-to-l from-cpurple-5 to-transparent z-10 absolute right-2 md:right-4 top-4 bottom-4' />
      <div className='flex overflow-x-scroll pb-4 scrollbar-hide scroll-smooth px-8'>
        {data.map((item, index) => (
          <TimelinePoint key={index} title={item.title} date={item.date} isLast={index === data.length - 1} />
        ))}
      </div>
    </div>
  )
}
