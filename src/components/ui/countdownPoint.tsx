import { ReactNode } from 'react'
import pointPurple from 'public/rounded-star-purple.svg'

type CountdownProps = {
  children?: ReactNode
  time: string
  unit: string
}

export default function CountdownPoint({ children, time, unit }: CountdownProps) {
  return (
    <div
      className='h-[200px] w-[200px] flex flex-col place-content-center'
      style={{ backgroundImage: `url(${pointPurple.src})` }}
    >
      <p className='font-serif text-white text-center text-[4rem]'>{time}</p>
      <p className='font-sans text-white text-center text-2xl relative -top-4'>{unit}</p>
    </div>
  )
}
