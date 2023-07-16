import TitleBox from '@/components/ui/title-box'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import SeminarHero from 'public/hero-seminar.svg'
import Highlight from '@/components/highlight'
import ContactBox from '@/components/ui/contact-box'
import speaker1 from 'public/speaker1.png'
import speaker2 from 'public/speaker2.png'
import Countdown from '@/components/countdown'

export default function Event() {
  return (
    <>
      <main className='flex min-h-screen h-full flex-col items-center px-7 py-16 overflow-hidden gap-32'>
        <section className='container flex relative flex-col items-center w-full my-10 gap-5' id='hero'>
          <div className='w-[1500px] h-[1500px] bg-[#EE426640] blur-[72.5px] rounded-full -left-[600px] -top-[900px] absolute -z-10'></div>
          <div className='w-[1500px] h-[1500px] bg-[#FCD30740] blur-[72.5px] rounded-full -right-[600px] -top-[900px] absolute -z-10'></div>
          <div>
            <Image className='translate-x-[1.5vw]' src={SeminarHero} alt='hero-title' height={330}></Image>
          </div>
          <div className='flex flex-col items-center gap-11'>
            <p className='text-white text-center font-normal text-base opacity-50 font-sans'>
              A series of events and competitions organized by the Computer Science Students of Diponegoro <br />{' '}
              University that aims to introduce the Technology Culture to the community.
            </p>
            <div className='flex gap-6'>
              <Button color='primary' variant='default'>
                Daftar Seminar
              </Button>
            </div>
          </div>
        </section>

        <section className='container relative flex flex-col items-center' id='speaker'>
          <div className='flex flex-row items-center gap-16'>
            <Image src={speaker1} alt='' height={425} />
            <div className='flex flex-col gap-6 w-[532px]'>
              <h3 className='text-white font-serif text-[2rem] tracking-[0.64px]'>Seminar 1</h3>
              <h1 className='text-white font-serif text-5xl font-bold tracking-[0.96px]'>
                Cara Meluluhkan Hati Wanita
              </h1>
              <div>
                <p className='text-white font-sans text-2xl font-bold tracking-[0.48px]'>
                  Mochammad Dzahwan “Wanceng” Fadhloly
                </p>
                <p className='text-white font-sans text-2xl tracking-[0.48px]'>Women Heart Engineer @ Wanceng Inc.</p>
              </div>
            </div>
          </div>

          <div className='flex flex-row-reverse items-center gap-16'>
            <Image src={speaker2} alt='' height={425} />
            <div className='flex flex-col text-right gap-6 w-[532px]'>
              <h3 className='text-white font-serif text-[2rem] tracking-[0.64px]'>Seminar 2</h3>
              <h1 className='text-white font-serif text-5xl font-bold tracking-[0.96px]'>
                Pendekatan Wanita Metode Miscall
              </h1>
              <div>
                <p className='text-white font-sans text-2xl font-bold tracking-[0.48px]'>Ahmad Reihan “Burung” Alavi</p>
                <p className='text-white font-sans text-2xl tracking-[0.48px]'>Women @ Diklat Inc.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='container relative flex flex-col items-center gap-12' id='countdown'>
          <TitleBox>Hitung Mundur</TitleBox>
          <Countdown date={'2023-09-25T00:00:00+07:00'} />
          <Button>Daftar Sekarang</Button>
        </section>

        <section className='relative w-[750%]' id='highlight'>
          <Highlight />
        </section>

        <section className='container relative flex flex-col items-center gap-16' id='contact'>
          <TitleBox>Contact Person</TitleBox>
          <ContactBox name='Wanceng' number='081231231231' />
        </section>
      </main>
    </>
  )
}
