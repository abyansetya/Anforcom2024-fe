import Image from 'next/image'
import wangsaff from 'public/rounded-star-wa.svg'

type ContactBoxProps = {
  name: string
  number: string
}

export default function ContactBox({ name, number }: ContactBoxProps) {
  return (
    <div className='relative'>
      <div className='translate-x-[10%] bg-white rounded-full py-4 pr-24 pl-20 flex flex-col leading-none gap-[15px]'>
        <Image className='absolute -top-[25%] -left-[22.5%]' src={wangsaff} alt='' width={180} />
        <p className='text-[2rem] font-serif text-[#1C1259] tracking-[0.04rem]'>{name}</p>
        <p className='font-extrabold text-[2.5rem] font-serif text-[#1C1259] tracking-[0.05rem]'>{number}</p>
      </div>
    </div>
  )
}
