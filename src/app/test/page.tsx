import Header from '@/components/header'
// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import anforcomIcon from 'public/anforcom-icon.svg'
// import TitleBox from '@/components/ui/titleBox'
// import TimelinePoint from '@/components/ui/timelinePoint'
// import CountdownPoint from '@/components/ui/countdownPoint'
import Footer from '@/components/footer'

export default function Test() {
  return (
    <>
      <Header />
      <main className='flex min-h-screen h-full flex-col items-center px-24 bg-white'>
        {/* <section className='flex relative w-full flex-col' id='jumbotron'>
        <div className='w-96 h-96 bg-[#F2E0FF] blur-3xl rounded-full absolute -left-28 top-40 -z-10'></div>
        <div className='w-[500px] h-[500px] bg-[#F5E5FF] blur-3xl rounded-full absolute -right-64 top-40 -z-10'></div>
        <div className='w-[350px] h-[350px] bg-[#F4BF64] blur-3xl rounded-full absolute mx-auto left-12 -top-24 -z-10'></div>
        <div className='w-[350px] h-[350px] bg-[#F4BF64] blur-3xl rounded-full absolute mx-auto right-12 -top-48 -z-10'></div>
      </section> */}
        {/* <div>
          <Button size='default' variant='default' color='primary'>
            Default
          </Button>
          <Button size='default' variant='disable' color='primary'>
            disable
          </Button>
          <Button size='default' variant='light' color='primary'>
            light
          </Button>
          <Button size='default' variant='outline' color='primary'>
            outline
          </Button>
          <Button size='default' variant='subtle' color='primary'>
            subtle
          </Button>
        </div>
        <div>
          <Button size='default' variant='default' color='secondary1'>
            Default
          </Button>
          <Button size='default' variant='disable' color='secondary1'>
            disable
          </Button>
          <Button size='default' variant='light' color='secondary1'>
            light
          </Button>
          <Button size='default' variant='outline' color='secondary1'>
            outline
          </Button>
          <Button size='default' variant='subtle' color='secondary1'>
            subtle
          </Button>
        </div>
        <div>
          <Button size='default' variant='default' color='secondary2'>
            Default
          </Button>
          <Button size='default' variant='disable' color='secondary2'>
            disable
          </Button>
          <Button size='default' variant='light' color='secondary2'>
            light
          </Button>
          <Button size='default' variant='outline' color='secondary2'>
            outline
          </Button>
          <Button size='default' variant='subtle' color='secondary2'>
            subtle
          </Button>
        </div> */}
        {/* <div className='py-10'>
          <TitleBox>Video Teaser</TitleBox>
        </div>
        <div>
          <TitleBox>Linimasa</TitleBox>
        </div> */}
        {/* <div className='py-10'>
          <TimelinePoint title='Pendaftaran Batch 1' date='25 Agustus - 26 Agustus' isPassed={false} isHasNext={true} />
        </div>
        <div>
          <CountdownPoint time='05' unit='Hari' />
        </div> */}
        <div className='py-10'>
          <Footer />
        </div>
      </main>
    </>
  )
}
