import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import HeroTitle from '@/components/ui/hero-title.svg'
import Image from 'next/image'
import TitleBox from '@/components/ui/titleBox'
import TimelinePoint from '@/components/ui/timelinePoint'
import CountdownPoint from '@/components/ui/countdownPoint'
import Highlight from '@/components/highlight'
import AccordionItem from '@/components/ui/accordionItem'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex min-h-screen h-full flex-col items-center px-7 py-16 overflow-hidden gap-32'>
        <section className='container flex relative flex-col items-center w-full my-10 gap-5' id='hero'>
          <div className='w-[1500px] h-[1500px] bg-[#EE426640] blur-[72.5px] rounded-full -left-[600px] -top-[900px] absolute -z-10'></div>
          <div className='w-[1500px] h-[1500px] bg-[#FCD30740] blur-[72.5px] rounded-full -right-[600px] -top-[900px] absolute -z-10'></div>
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

        <section className='container relative flex flex-col items-center gap-12' id='countdown'>
          <TitleBox>Penutupan Pendaftaran</TitleBox>
          <div className='flex flex-col md:flex-row gap-14 mt-6'>
            <CountdownPoint time='05' unit='Hari' />
            <CountdownPoint time='12' unit='Jam' />
            <CountdownPoint time='20' unit='Menit' />
            <CountdownPoint time='02' unit='Detik' />
          </div>
          <Button>Daftar Sekarang</Button>
        </section>

        <section className='container relative flex flex-col items-center gap-14' id='timeline'>
          <TitleBox>Linimasa</TitleBox>
          <div className='flex flex-col w-full justify-center lg:flex-row lg:gap-1'>
            <TimelinePoint
              title='Pendaftaran Batch 1'
              date='25 Agustus - 26 Agustus'
              isPassed={true}
              isHasNext={true}
            />
            <TimelinePoint
              title='Pendaftaran Batch 2'
              date='25 Agustus - 26 Agustus'
              isPassed={true}
              isHasNext={true}
            />
            <TimelinePoint
              title='Pendaftaran Batch 3'
              date='25 Agustus - 26 Agustus'
              isPassed={false}
              isHasNext={true}
            />
            <TimelinePoint
              title='Pendaftaran Batch 4'
              date='25 Agustus - 26 Agustus'
              isPassed={false}
              isHasNext={false}
            />
          </div>
        </section>

        <section className='relative w-[750%]' id='highlight'>
          <Highlight />
        </section>

        <section className='container relative flex flex-col items-center gap-20' id='teaser'>
          <TitleBox>Video Teaser</TitleBox>
          <div className='relative bg-[#170F4A] rounded-3xl p-6 w-full h-[720px]'>
            <iframe
              id='ytplayer'
              className='rounded-lg'
              width='100%'
              height='100%'
              src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&origin=http://example.com&controls=0&rel=1`}
            ></iframe>
          </div>
        </section>

        <section className='container relative flex flex-col items-center gap-[4.5rem] w-full' id='faq'>
          <TitleBox>Pertanyaan Biasa Ditanyakan</TitleBox>
          <div className='flex flex-col w-full gap-6'>
            <AccordionItem header='Apa itu Anforcom?' body='Ya gatau, tanya wanceng sadja' />
            <AccordionItem header='Bagaimana Pelaksanaanya?' body='Dijalanin bersama asik kali ya' />
            <AccordionItem
              header='Gimana Ya Cara Ngungkapin Perasaanku Padanya?'
              body='Tinggal bilang to ya apa susahnya si'
            />
            <AccordionItem header='Semoga sponsornya jadi kenyataan, aamiin' body='Aamiin :)' />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
