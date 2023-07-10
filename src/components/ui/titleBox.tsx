import { ReactNode } from 'react'
import Image from 'next/image'
import starPinky from 'public/star-pinky.svg'
import spinStarYellow from 'public/spinstar-yellow.svg'

type BoxProps = {
  children: ReactNode
}

export default function TitleBox({ children }: BoxProps) {
  return (
    <div className='relative w-fit'>
      <Image className='absolute -top-[1.95rem] left-8' src={starPinky} alt='' width={47} height={47}></Image>
      <p className='h-[58px] text-secondary1 text-3xl font-serif font-extrabold tracking-[0.617px] bg-white rounded-full px-7 py-[0.594rem]'>
        {children}
      </p>
      <Image className='absolute -bottom-[1.65rem] right-8' src={spinStarYellow} alt='' width={35} height={35}></Image>
    </div>
  )
}
