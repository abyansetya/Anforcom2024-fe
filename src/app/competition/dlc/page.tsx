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
      <main className='relative flex min-h-screen h-full flex-col items-center px-7 lg:pt-[100px] md:pt-[200px] pt-[150px] overflow-hidden gap-16 md:gap-32'>
        <section className=' w-full' id='hero'>
          <div className='absolute w-full left-0 right-0 '>
            <Image
              className='w-full'
              src={'/assets/images/dlc.svg'}
              alt='hero-title'
              layout='responsive'
              height={330}
              width={1700}
            />
          </div>
          <div className='relative flex flex-col items-center gap-11 md:pt-[300px] pt-[170px]'>
            <p className='text-cwhite-9 text-center font-normal text-base opacity-50 font-sans w-full md:w-2/3'>
              UI/UX adalah salah satu cabang lomba dari serangkaian kegiatan ANFORCOM 2024 yang dapat diikuti oleh SLTA
              sederajat dan mahasiswa se-Indonesia. Kegiatan ini berupa kompetisi desain antarmuka sistem/produk yang
              berorientasi pada kenyamanan dan kemudahan pengguna dalam menggunakan sistem/produk tersebut.
            </p>
            <div className='flex gap-6'>
              <Link href='https://dashboard.anforcom.com' target='_blank'>
                <Button color='primary' variant='default'>
                  Daftar DLC
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

        <section className='container relative flex flex-col items-center gap-12 md:pt-0 lg:pt-[120px]' id='countdown'>
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

        <section className='md:h-[400px] h-[800px] w-full' id='highlight'>
          <Highlight />
        </section>

        <section className='relative flex flex-col items-center gap-16 mb-[80px] ' id='contact'>
          <TitleBox>Contact Person</TitleBox>
          <ContactBox name='Khoirul ' number='0838 4325 5643' />
        </section>
      </main>
    </>
  )
}
