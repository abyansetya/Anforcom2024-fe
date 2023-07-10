import { ReactNode } from 'react'
import Image from 'next/image'
import pointGreen from 'public/rounded-star-checked-green.svg'
import pointRed from 'public/rounded-star-checked-pinky.svg'

type TimelinePointProps = {
  children?: ReactNode
  title: string
  date: string
  isPassed: boolean
}

export default function TimelinePoint({ children, title, date, isPassed }: TimelinePointProps) {
  return (
    <div className='relative flex flex-col items-center gap-2'>
      {isPassed ? (
        <Image className='' src={pointGreen} alt='' width={142} height={142}></Image>
      ) : (
        <Image className='' src={pointRed} alt='' width={142} height={142}></Image>
      )}
      <div className='flex flex-col items-center'>
        <p className='font-bold text-xl text-white font-serif text-center'>{title}</p>
        <p className='font-sans text-white text-center'>{date}</p>
      </div>
    </div>
  )
}
