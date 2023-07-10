import { Button } from '@/components/ui/button'
// import Header from '@/components/header'
import HeroTitle from '@/components/ui/hero-title.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* <Header/> */}
      <main className='flex min-h-screen h-full flex-col items-center justify-between px-24 overflow-hidden'>
        <section className='flex relative flex-col items-center w-full my-10 gap-5' id='hero'>
          <div className='w-[58vw] h-[58vw] bg-[#EE426640] blur-[72.5px] rounded-full -left-[300px] -top-[450px] absolute -z-10'></div>
          <div className='w-[58vw] h-[58vw] bg-[#FCD30740] blur-[72.5px] rounded-full -right-[300px] -top-[450px] absolute -z-10'></div>
          <div>
            <Image className='translate-x-[1.5vw]' src={HeroTitle} alt='hero-title' height={330}></Image>
          </div>
          <div className='flex flex-col items-center gap-11'>
            <p className='text-white text-center font-normal text-base opacity-50 font-sans'>
              A series of events and competitions organized by the Computer Science Students of Diponegoro <br />{' '}
              University that aims to introduce the Technology Culture to the community.
            </p>
            <div className='flex gap-6'>
              <Button color='primary' variant='default'>
                Daftar
              </Button>
              <Button color='primary' variant='outline'>
                Teaser
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
