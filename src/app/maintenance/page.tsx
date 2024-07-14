import Image from 'next/image'

export default function Maintenance() {
  return (
    <main className='flex min-h-screen h-full flex-col items-center justify-center px-24 overflow-hidden'>
      <section className='relative flex flex-col items-center justify-center backdrop-blur-[500px]'>
        <div className='mb-14 z-10'>
          <Image src={'/assets/images/maintenance.svg'} alt='maintenance-icon' width={300} height={300} />
        </div>
        <div className='flex flex-col relative w-full gap-3'>
          <p className='text-cwhite-9 text-2xl font-bold font-serif text-center'>We&apos;re Under Maintenance</p>
          <p className='text-cwhite-9 text-2xl font-light font-serif text-center'>
            The page you&apos;re looking for is currently <br /> under maintenance and will back soon
          </p>
        </div>
      </section>
    </main>
  )
}
