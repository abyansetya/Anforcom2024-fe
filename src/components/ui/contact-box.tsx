import Image from 'next/image'

type ContactBoxProps = {
  name: string
  number: string
}

export default function ContactBox({ name, number }: ContactBoxProps) {
  return (
    <div className='relative scale-90 sm:scale-100'>
      <div className='translate-x-[15%] bg-white rounded-full py-4 pr-10 md:pr-20 sm:pl-28 pl-20 flex flex-col leading-none  md:gap-[15px]'>
        <Image
          className='absolute top-0 bottom-0 m-auto -left-[22.5%] scale-75 sm:scale-100 sm:translate-x-0 translate-x-[-50px]'
          src={'/assets/images/rounded-star-wa.svg'}
          alt=''
          width={180}
          height={180}
        />
        <div className='sm:translate-x-0 translate-x-[50px]'>
          <p className='text-xl md:text-[2rem] font-serif mb-1 text-[#1C1259] tracking-[0.04rem] translate-x-[-70px] translate-y-[-5px] sm:translate-x-0'>
            {name}
          </p>
          <p className='font-extrabold  sm:text-2xl text-[15px] md:text-[2.5rem] font-serif text-[#1C1259] tracking-[0.05rem] sm:translate-x-0 translate-x-[-70px]'>
            {number}
          </p>
        </div>
      </div>
    </div>
  )
}
