import Image from 'next/image'
import Link from 'next/link'
import anforcomVector from 'public/anforcom-vector.svg'
import angkasaJuang from 'public/angkasa-juang.svg'

export default function Footer() {
  return (
    <div className='flex flex-col gap-1 w-[983px] h-[329px]'>
      <div className='bg-secondary1 rounded-t-[42px] pt-[46px] pb-8 px-10 flex flex-col gap-8'>
        <Image src={anforcomVector} alt='' height={32} />
        <p className='font-sans text-white'>
          A series of events and competitions organized by the Computer Science Students of Diponegoro University that
          aims to introduce the Technology Culture to the community.
        </p>
        <div className='flex text-primary font-serif gap-6'>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Twitter</Link>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Github</Link>
          <Link href='/'>YouTube</Link>
        </div>
      </div>
      <div className='bg-secondary1 rounded-b-[42px] pt-[26px] pb-[30px] px-10 flex gap-4 items-center'>
        <Image src={angkasaJuang} alt='' height={39} />
        <p className='font-sans text-white'>&#169; 2023 Himpunan Mahasiswa Informatika Universitas Diponegoro</p>
      </div>
    </div>
  )
}
