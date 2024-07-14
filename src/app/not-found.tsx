// src/app/not-found.tsx
import Link from 'next/link'
import Image from 'next/image'

const NotFoundPage = () => {
  return (
    <main className='flex min-h-screen h-full flex-col items-center pt-[100px] justify-center md:px-24 overflow-hidden'>
      <section className='relative flex items-center justify-center backdrop-blur-[500px]'>
        <div className='mb-14 z-10'>
          <Image src={'/assets/images/lyra5.svg'} alt='maintenance-icon' width={300} height={300} />
        </div>
        <div className='flex flex-col relative w-full gap-3'>
          <p className='text-cwhite-9 text-2xl md:text-6xl font-bold font-serif text-center'>404</p>
          <p className='text-cwhite-9 text-base md:text-2xl md:text2xl font-bold font-serif text-center'>
            Beep Boop! Page Not Found
          </p>
          <p className='text-cwhite-9 text-sm 2xl:text-lg font-light font-serif text-center'>
            It seems the page you&apos;re looking for doesn&apos;t exist. Lyra is on the case!
          </p>
          <a
            href='/'
            className='bg-cgreen-5 font-serif text-center text-white px-4 py-2 rounded hover:bg-cgreen-6 transition'
          >
            Go Home
          </a>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
