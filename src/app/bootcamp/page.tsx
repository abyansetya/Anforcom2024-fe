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
      <main className='relative flex min-h-screen h-full flex-col items-center px-7 lg:pt-[100px] md:pt-[200px] pt-[100px] overflow-hidden gap-16 md:gap-32'>
        <section className=' w-full' id='hero'>
          <div className='absolute w-full left-0 right-0 '>
            <Image
              className='w-full'
              src={'/assets/images/bootcamp.svg'}
              alt='hero-title'
              layout='responsive'
              height={330}
              width={1700}
            />
          </div>
          <div className='relative flex flex-col items-center gap-11 pt-[300px]'>
            <p className='text-[#54534C] text-center font-normal text-base opacity-50 font-sans w-full md:w-2/3'>
              A series of events and competitions organized by the Computer Science Students of Diponegoro University
              that aims to introduce the Technology Culture to the community.
            </p>
            <div className='flex gap-6'>
              <Link href='' target='_blank'>
                <Button color='primary' variant='default'>
                  Daftar Bootcamp
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <div className='absolute w-full h-screen -z-10 flex items-center justify-center'>
          <img
            src='/assets/images/bg-green.svg'
            alt='Background Image'
            className='absolute object-cover translate-y-[150px] hidden md:flex '
          />
        </div>

        <section
          className='container max-w-[983px] p-0 md:pt-0 lg:pt-[120px] relative flex flex-col items-center'
          id='speaker'
        >
          <div className='bg-cgreen-0 w-[237px] h-[66px] rounded-full justify-center items-center flex text-[32px] font-bold mb-3'>
            <h1 className='font-serif justify-center items-center text-cgreen-5'>Bootcamp</h1>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-10 md:gap-16'>
            <Image src={'/assets/images/pembicara.png'} alt='' height={500} width={500} />

            <div className='flex flex-col gap-2 md:gap-6 w-full'>
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

        <section className='container relative flex flex-col items-center gap-12' id='countdown'>
          <TitleBox>Hitung Mundur</TitleBox>
          <Countdown date={'2024-09-21T00:00:00+07:00'} />
          <Link href='https://dashboard.anforcom.com' target='_blank'>
            <Button>Daftar Sekarang</Button>
          </Link>
        </section>

        <section className='h-[400px]' id='highlight'>
          <Highlight />
        </section>

        <section className='relative flex flex-col items-center gap-16 mb-[80px] ' id='contact'>
          <TitleBox>Contact Person</TitleBox>
          <ContactBox name='Reihan' number='0858 6518 6206' />
        </section>
      </main>
    </>
  )
}
