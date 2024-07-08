import React from 'react'
import Image from 'next/image'

function Whatsapp() {
  return (
    <div className='fixed bottom-[20px] right-[20px] w-[50px] h-[50px] rounded-full bg-cgreen-5 flex items-center justify-center hover:cursor-pointer'>
      <Image src={'/assets/images/wa.svg'} alt='WhatsApp Icon' width={35} height={35} />
    </div>
  )
}

export default Whatsapp
