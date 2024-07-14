import TitleBox from '@/components/ui/title-box'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Highlight from '@/components/highlight'
import ContactBox from '@/components/ui/contact-box'
import Countdown from '@/components/countdown'
import Link from 'next/link'

export default function Dlc() {
  return (
    <>
      <main className='flex min-h-screen h-full flex-col items-center lg:pt-[100px] md:pt-[200px] pt-[150px] overflow-hidden gap-10 sm:gap-20 md:gap-32'>
        <div className='w-full relative h-[150px] max-w-screen-xl mb-0 pb-0'>
          <img className=' w-full absolute ' src={'/assets/images/dlc.svg'} alt='hero-title' />
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
                  Daftar DLC
                </Button>
              </Link>
              <Link href='https://bit.ly/RulebookDUC2023' target='_blank'>
                <Button color='primary' variant='outline'>
                  Rulebook
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
          className='container max-w-[983px] p-0 md:pt-[120px] lg:pt-[160px] relative flex flex-col items-center'
          id='countdown'
        >
          <TitleBox>Hitung Mundur</TitleBox>
          <Countdown date={'2024-09-30T00:00:00+07:00'} />
          <Link href='https://dashboard.anforcom.com' target='_blank'>
            <Button>Daftar Sekarang</Button>
          </Link>
        </section>

        <section className='container relative flex flex-col items-center gap-12' id='prize'>
          <TitleBox>Hadiah</TitleBox>
          <div className='flex flex-row gap-[60px] items-end h-[475px] scale-75 md:scale-100'>
            <div className=' self-start flex flex-col items-center gap-16'>
              <Image src={'/assets/images/1.svg'} alt='' width={240} height={240} />
              <div className='flex flex-col items-center'>
                <h3 className='text-cwhite-9 text-2xl font-bold font-serif tracking-[0.48px]'>Juara 1</h3>
                <p className='text-cwhite-9 text-2xl font-sans tracking-[0.48px]'>Rp 3.000.000</p>
                <p className='text-cgreen-5 sm:text-2xl text-xl font-sans tracking-[0.48px]'>
                  {' '}
                  <span className='text-cwhite-9'>+</span> Golden Pass
                </p>
                <p className='text-cgreen-5 sm:text-2xl text-xl font-sans tracking-[0.48px]'>Informatika Undip</p>
              </div>
            </div>
            <div className='order-first flex flex-col items-center gap-16 translate-x-[20px] md:translate-x-0'>
              <Image src={'/assets/images/2.svg'} alt='' width={240} height={240} />
              <div className='flex flex-col items-center '>
                <h3 className='text-cwhite-9 text-2xl font-bold font-serif tracking-[0.48px]'>Juara 2</h3>
                <p className='text-cwhite-9 text-2xl font-sans tracking-[0.48px] '>Rp 2.000.000</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-16 translate-x-[-20px] md:translate-x-0 '>
              <Image src={'/assets/images/3.svg'} alt='' width={240} height={240} />
              <div className='flex flex-col items-center'>
                <h3 className='text-cwhite-9 text-2xl font-bold font-serif tracking-[0.48px]'>Juara 3</h3>
                <p className='text-cwhite-9 text-2xl font-sans tracking-[0.48px]'>Rp 1.000.000</p>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full md:h-[400px] h-[900px] max-w-screen-xl' id='highlight'>
          <Highlight />
        </section>

        <section className='relative flex flex-col items-center gap-16 mb-[80px] ' id='contact'>
          <TitleBox>Contact Person</TitleBox>
          <ContactBox name='Fakhrell' number='0813 6724 5456' />
        </section>
      </main>
    </>
  )
}
