'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import TitleBox from '@/components/ui/title-box'
import Highlight from '@/components/highlight'
import Countdown from '@/components/countdown'
import { Timeline } from '@/components/timeline'
import { timelineData } from '@/constants/timeline-data'
import { cn } from '@/lib/utils'
import { questionData } from '@/constants/questions-data'
import FaqAccordion from '@/components/faq-accordion'
import Link from 'next/link'
import Modal from '@/components/Modal'
import Sponsor from '@/components/sponsor'
import Linimasa from '@/components/linimasa'

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  // useEffect(() => {
  //   const lastVisit = localStorage.getItem('lastVisit')
  //   const today = new Date().toDateString()

  //   if (lastVisit !== today) {
  //     setIsModalVisible(true)
  //     localStorage.setItem('lastVisit', today)
  //   }
  // }, [])

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
      <main className='flex min-h-screen h-full flex-col items-center lg:pt-[100px] md:pt-[200px] pt-[150px] overflow-hidden gap-10 sm:gap-20 md:gap-32'>
        <section
          className='container max-w-[983px] flex relative flex-col items-center w-full my-10 gap-2 md:gap-5'
          id='hero'
        >
          <div>
            <Image
              className='translate-x-[1.5vw] block md:hidden'
              src={'/assets/images/home.svg'}
              alt='hero-title'
              height={330}
              width={983}
            />
            <Image
              className='translate-x-[1.5vw] hidden md:block'
              src={'/assets/images/home.svg'}
              alt='hero-title'
              height={330}
              width={983}
            />
          </div>
          <div className='flex flex-col items-center gap-6 md:gap-11'>
            <p className='text-cwhite-9 text-center font-normal sm:mt-0 mt-[50px] text-xs sm:text-sm md:text-base opacity-50 font-sans w-full md:w-2/3'>
              A series of events and competitions organized by the Computer Science Students of Diponegoro University
              that aims to introduce the Technology Culture to the community.
            </p>
            <div className='flex gap-4 md:gap-6'>
              <Link href='https://dashboard.anforcom.com' target='_blank'>
                <Button color='primary' variant='default'>
                  Daftar
                </Button>
              </Link>
              <Link href='#teaser'>
                <Button color='primary' variant='outline'>
                  Teaser
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <div className='absolute w-full h-screen -z-10  flex items-center justify-center'>
          <img
            src='/assets/images/bg-green.svg'
            alt='Background Image'
            className='absolute object-cover  md:translate-y-[0px] lg:translate-y-[150px] xl:translate-y-[90px] hidden  md:flex  '
          />
        </div>

        {/* waiting for sponsor */}
        <section className='h-[50px] w-full  '>{/* <Sponsor /> */}</section>

        <section className='container w-screen justify-center p-0  relative flex flex-col items-center' id='countdown'>
          <TitleBox>Menuju Puncak Acara</TitleBox>
          <Countdown date={'2024-09-21T00:00:00+07:00'} />
          <div className='flex flex-col gap-4  sm:gap-5 md:gap-6 items-center'>
            <Link href='https://dashboard.anforcom.com' target='_blank'>
              <Button>Daftar Sekarang</Button>
            </Link>
            <Link href='#regtutorial' className='text-cgreen-5 font-sans hover:text-cwhite-7 underline'>
              Tutorial Pendaftaran
            </Link>
          </div>
        </section>

        <section className=' relative flex flex-col items-center gap-5 mt-[50px] md:mt-0' id='timeline'>
          <TitleBox>Linimasa</TitleBox>
          <div className='w-full h-[200px] md:h-[500px] overflow-hidden '>
            <Linimasa />
          </div>
          {/* <div className='flex flex-col w-full justify-center lg:flex-row lg:gap-1'>
            <Timeline data={timelineData} />
          </div> */}
        </section>
        <section className='md:h-[400px] h-[900px] w-full' id='highlight'>
          <Highlight />
        </section>

        <section className='relative w-full ' id='teaser'>
          <div className='container max-w-[983px] w-full flex flex-col items-center gap-10 md:gap-20 '>
            <TitleBox>Video Teaser</TitleBox>
            <div className='relative bg-cgreen-4 rounded-3xl p-3 md:p-6 w-full aspect-video'>
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[56px] md:max-w-[96px] right-16 md:-top-10 -top-4'
                src={'/assets/images/teratai.svg'}
                alt='hero-title'
                height={80}
                width={80}
              />
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[64px] md:max-w-[128px] -left-10 md:-top-10 -top-4'
                src={'/assets/images/star.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[50px] md:max-w-[84px] left-10 md:left-16 -bottom-4 md:-bottom-10'
                src={'/assets/images/teratai.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />
              <Image
                className='translate-x-[3vw] absolute w-full max-w-[64px] md:max-w-[128px] -right-4 md:-right-9 -bottom-10'
                src={'/assets/images/star.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />

              <iframe
                id='ytplayer'
                className='rounded-lg'
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/7ReUxB037Rk'
                title='Anforcom Teaser'
                frameBorder='0'
                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 absolute right-0 left-0 -z-10 -bottom-20 md:-bottom-50 lg:-bottom-36'>
            {[1, 2, 3, 4].map((_item, index) => (
              <div className='flex' key={index}>
                <span
                  className={cn(
                    'font-extrabold w-full font-sans text-[9.5vw] leading-5 md:leading-8 lg:leading-[64px] text-justify after:inline-block after:w-full after:content-[" "] text-cgreen-1',
                    index % 2 ? 'opacity-30' : 'opacity-100'
                  )}
                >
                  TEASER ANFORCOM
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className='relative w-full mt-[100px]' id='regtutorial'>
          <div className='container max-w-[983px] w-full flex flex-col items-center gap-10 md:gap-20 '>
            <TitleBox>Tutorial Pendaftaran</TitleBox>
            <div className='relative bg-cgreen-4 rounded-3xl p-3 md:p-6 w-full aspect-video'>
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[56px] md:max-w-[96px] right-16 md:-top-10 -top-4'
                src={'/assets/images/teratai.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[64px] md:max-w-[128px] -left-10 md:-top-10 -top-4'
                src={'/assets/images/star.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[50px] md:max-w-[84px] left-10 md:left-16 -bottom-4 md:-bottom-10'
                src={'/assets/images/teratai.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />
              <Image
                className='translate-x-[1.5vw] absolute w-full max-w-[64px] md:max-w-[128px] -right-4 md:-right-9 -bottom-10'
                src={'/assets/images/star.svg'}
                alt='hero-title'
                height={128}
                width={128}
              />

              <iframe
                id='ytplayer'
                className='rounded-lg'
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/Kp51sPjC7js'
                title='Tutorial Registrasi Anforcom 2023'
                frameBorder='0'
                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 absolute right-0 left-0 -z-10 -bottom-20 md:-bottom-50 lg:-bottom-36'>
            {[1, 2, 3, 4].map((_item, index) => (
              <div className='flex' key={index}>
                <span
                  className={cn(
                    'font-extrabold w-full font-sans text-[7.5vw] leading-5 md:leading-8 lg:leading-[64px] text-justify after:inline-block after:w-full after:content-[" "] text-cgreen-1',
                    index % 2 ? 'opacity-30' : 'opacity-100'
                  )}
                >
                  TUTORIAL PENDAFTARAN
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          className='container max-w-[983px] mb-[80px] relative flex flex-col items-center gap-10 md:gap-20 w-full mt-16 md:mt-[30px]'
          id='faq'
        >
          <TitleBox>Pertanyaan Biasa Ditanyakan</TitleBox>
          <div className='flex flex-col w-full gap-6'>
            <FaqAccordion data={questionData} />
          </div>
        </section>
      </main>
    </>
  )
}
