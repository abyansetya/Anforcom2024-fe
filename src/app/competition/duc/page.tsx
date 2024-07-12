import TitleBox from '@/components/ui/title-box'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Highlight from '@/components/highlight'
import ContactBox from '@/components/ui/contact-box'
import Countdown from '@/components/countdown'
import Link from 'next/link'
import Background from '@/components/ui/backgroundview'

export default function Duc() {
  return (
    <>
      <main className='relative flex min-h-screen h-full flex-col items-center px-7 lg:pt-[100px] md:pt-[200px] pt-[150px] overflow-hidden gap-16 md:gap-32'>
        <section className=' w-full' id='hero'>
          <div className='absolute w-full left-0 right-0 '>
            <Image
              className='w-full'
              src={'/assets/images/duc.svg'}
              alt='hero-title'
              layout='responsive'
              height={330}
              width={1700}
            />
          </div>
          <div className='relative flex flex-col items-center gap-11 md:pt-[250px] lg:pt-[300px] pt-[170px]'>
            <p className='text-cwhite-9 text-center font-normal text-base opacity-50 font-sans w-full md:w-2/3'>
              UI/UX adalah salah satu cabang lomba dari serangkaian kegiatan ANFORCOM 2024 yang dapat diikuti oleh SLTA
              sederajat dan mahasiswa se-Indonesia. Kegiatan ini berupa kompetisi desain antarmuka sistem/produk yang
              berorientasi pada kenyamanan dan kemudahan pengguna dalam menggunakan sistem/produk tersebut.
            </p>
            <div className='flex gap-6'>
              <Link href='https://dashboard.anforcom.com' target='_blank'>
                <Button color='primary' variant='default'>
                  Daftar DUC
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
        <Background />
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

        <section className='container relative flex flex-col items-center gap-6 md:gap-12 mt-[30px]' id='prize'>
          <TitleBox>Hadiah</TitleBox>
          <div className='flex flex-row gap-[60px] items-end h-[475px] scale-75 md:scale-100'>
            <div className=' self-start flex flex-col items-center gap-16 '>
              <Image src={'/assets/images/1.svg'} alt='' width={240} height={240} />
              <div className='flex flex-col items-center'>
                <h3 className='text-cwhite-9 text-2xl font-bold font-serif tracking-[0.48px]'>Juara 1</h3>
                <p className='text-cwhite-9 text-2xl font-sans tracking-[0.48px]'>Rp 3.000.000</p>
              </div>
            </div>
            <div className='order-first flex flex-col items-center gap-16 translate-x-[20px] md:translate-x-0'>
              <Image src={'/assets/images/2.svg'} alt='' width={240} height={240} />
              <div className='flex flex-col items-center '>
                <h3 className='text-cwhite-9 text-2xl font-bold font-serif tracking-[0.48px]'>Juara 2</h3>
                <p className='text-cwhite-9 text-2xl font-sans tracking-[0.48px] '>Rp 2.000.000</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-16 translate-x-[-20px] md:translate-x-0'>
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
          <ContactBox name='Qun Alfadrian' number='0819 0382 0746' />
        </section>
      </main>
    </>
  )
}
