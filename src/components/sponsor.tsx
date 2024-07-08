import React from 'react'
import Image from 'next/image'

const sponsor = () => {
  return (
    <div className='flex gap-[50px] items-center justify-center translate-y-0 sm:translate-y-[100px] scale-[0.4] sm:scale-[1]   '>
      <Image alt='' src={'/assets/images/BNI.svg'} width={200} height={60} />
      <Image alt='' src={'/assets/images/BNI.svg'} width={200} height={60} />
      <Image alt='' src={'/assets/images/BNI.svg'} width={200} height={60} />
      <Image alt='' src={'/assets/images/BNI.svg'} width={200} height={60} />
    </div>
  )
}

export default sponsor
