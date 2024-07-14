'use client'

import TitleBox from '@/components/ui/title-box'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Highlight from '@/components/highlight'
import ContactBox from '@/components/ui/contact-box'
import Countdown from '@/components/countdown'
import Link from 'next/link'
import bg from 'public/assets/images/bg-green.svg'

export default function Event() {
  return (
    <>
      <main className='flex min-h-screen h-full flex-col items-center lg:pt-[100px] md:pt-[200px] pt-[150px] overflow-hidden gap-10 sm:gap-20 md:gap-32'>
        <div className='w-full relative sm:h-[150px] h-[70px] max-w-screen-xl mb-0 pb-0'>
          <img className=' w-full absolute ' src={'/assets/images/workshop.svg'} alt='hero-title' />
        </div>
        <section
          className='container max-w-[983px] flex relative flex-col items-center w-full gap-2 md:gap-5'
          id='hero'
        >
          <div className='flex flex-col items-center gap-6 md:gap-11'>
            <p className='text-cwhite-9 text-center font-normal sm:mt-0 mt-[50px] text-xs sm:text-sm md:text-base opacity-50 font-sans w-full md:w-2/3'>
              (DLC) adalah salah satu cabang lomba dari serangkaian kegiatan ANFORCOM 2024 yang dapat diikuti oleh SLTA
              sederajat. Kegiatan ini bertujuan untuk mengasah kemampuan berpikir logis dan kemampuan problem solving
              secara kompetitif. Kompetisi ini terdiri dari 2 tahap, yaitu tahap penyisihan berupa cerdas cermat dan
              tahap final berupa Rally Games dan Competitive Programming.
            </p>
            <div className='flex gap-4 md:gap-6'>
              <Link href='https://dashboard.anforcom.com' target='_blank'>
                <Button color='primary' variant='default'>
                  Daftar Workshop
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <div className='relative w-full -z-10  flex items-center justify-center'>
          <img
            src='/assets/images/bg-green.svg'
            alt='Background Image'
            className='absolute object-cover  hidden  md:flex top-[-400px] '
          />
        </div>

        <section
          className='container max-w-[983px] p-0 md:pt-[180px] lg:pt-[160px] relative flex flex-col items-center'
          id='speaker'
        >
          <TitleBox>Workshop</TitleBox>

          <div className='flex flex-col md:flex-row items-center gap-10 md:gap-16'>
            <Image src={'/assets/images/pembicara.png'} alt='' height={500} width={500} />

            <div className='flex flex-col gap-2 md:mt-[30px] lg:mt-0 md:gap-6 w-full'>
              <h3 className='text-cgreen-9 font-serif text-xl md:text-[2rem] tracking-[0.64px]'>Seminar 1</h3>
              <h1 className='text-cgreen-9 font-serif text-3xl md:text-5xl font-bold tracking-[0.96px]'>
                Artificial Intelligence: Pros, Cons, and Where It All Started
              </h1>
              <div>
                <p className='text-cgreen-9 font-sans text-base md:text-2xl font-bold tracking-[0.48px]'>
                  Cahyo Adhi Hartanto
                </p>
                <p className='text-cgreen-9 font-sans text-base md:text-2xl tracking-[0.48px]'>
                  Artificial Intelligence Engineer / Data Scientist PT Bank Syariah Indonesia Tbk.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className='container max-w-[983px] p-0 md:pt-[120px] lg:pt-[160px] relative flex flex-col items-center'
          id='countdown'
        >
          <TitleBox>Hitung Mundur</TitleBox>
          <Countdown date={'2024-09-30T00:00:00+07:00'} />
          <Link href='https://dashboard.anforcom.com' target='_blank'>
            <Button>Daftar Sekarang</Button>
          </Link>
        </section>

        <section className='w-full md:h-[400px] h-[900px] max-w-screen-xl' id='highlight'>
          <Highlight />
        </section>

        <section className='relative flex flex-col items-center gap-16 mb-[80px] ' id='contact'>
          <TitleBox>Contact Person</TitleBox>
          <ContactBox name='Qun Alfadrian' number='0819 0382 0746' />
        </section>
      </main>
    </>
  )
}
