import { ReactNode } from 'react'
import Image from 'next/image'

type BoxProps = {
  children: ReactNode
}

export default function TitleBox({ children }: BoxProps) {
  return (
    <div className='relative'>
      <p
        className='py-[9.5px] text-cgreen-5 text-base font-serif font-extrabold tracking-[0.617px] bg-cgreen-0 rounded-full px-4 
                    md:text-xl md:px-6
                    lg:text-3xl lg:px-7'
      >
        {children}
      </p>

      {/* <Image
        className='absolute w-[18px] -bottom-[0.8rem] right-[1.1rem]
                        md:w-[25px] md:-bottom-[1.2rem] md:right-6
                        lg:w-[35px] lg:-bottom-[1.65rem] lg:right-8'
        src={'/assets/images/star-yellow.svg'}
        alt=''
        width={35}
        height={35}
      /> */}
    </div>
  )
}
