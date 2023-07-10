import { ReactNode } from 'react'
import Image from 'next/image'
import pointGreen from 'public/rounded-star-checked-green.svg'
import pointRed from 'public/rounded-star-checked-pinky.svg'
import lineGreen from 'public/stripe-green.svg'
import lineRed from 'public/stripe-pinky.svg'

type TimelinePointProps = {
  children?: ReactNode
  title: string
  date: string
  isPassed: boolean
  isHasNext?: boolean
}

export default function TimelinePoint({ children, title, date, isPassed, isHasNext }: TimelinePointProps) {
  const pass = isPassed ? pointGreen : pointRed
  const line = isPassed ? lineGreen : lineRed
  return (
    <div className='flex flex-row relative'>
      <div className='relative flex flex-col items-center gap-2'>
        <Image className='' src={pass} alt='' width={142} height={142}></Image>
        <div className='flex flex-col items-center'>
          <p className='font-bold text-xl text-white font-serif text-center'>{title}</p>
          <p className='font-sans text-white text-center'>{date}</p>
        </div>
      </div>
      {isHasNext && <Image className=' opacity-50 relative -top-7' src={line} alt='' height={11}></Image>}
    </div>
  )
}
