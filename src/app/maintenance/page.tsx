import Image from 'next/image'
import maintenanceIcon from 'public/maintenance-icon.svg'

export default function Maintenance() {
  return (
    <main className='flex min-h-screen h-full flex-col items-center justify-center px-24'>
      <div className='mb-14 z-10'>
        <Image src={maintenanceIcon} alt='maintenance-icon' width={300} height={300} />
      </div>
      <div className='flex flex-col relative w-full gap-3'>
        <p className='text-cgray-0 text-2xl font-bold font-serif text-center'>We&apos;re Under Maintenance</p>
        <p className='text-cgray-0 text-2xl font-light font-serif text-center'>
          The page you&apos;re looking for is currently <br /> under maintenance and will back soon
        </p>
      </div>
    </main>
  )
}
