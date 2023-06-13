import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className='flex min-h-screen h-full flex-col items-center justify-between px-24'>
      <section className='flex relative w-full flex-col' id='jumbotron'>
        <div className='w-96 h-96 bg-[#F2E0FF] blur-3xl rounded-full absolute -left-28 top-40 -z-10'></div>
        <div className='w-[500px] h-[500px] bg-[#F5E5FF] blur-3xl rounded-full absolute -right-64 top-40 -z-10'></div>
        <div className='w-[350px] h-[350px] bg-[#F4BF64] blur-3xl rounded-full absolute mx-auto left-12 -top-24 -z-10'></div>
        <div className='w-[350px] h-[350px] bg-[#F4BF64] blur-3xl rounded-full absolute mx-auto right-12 -top-48 -z-10'></div>

        <div className='flex flex-col gap-16 mx-auto w-2/3 pt-24 pb-12'>
          <div>
            <div className='flex gap-4 mb-4 justify-center'>
              <span className='text-8xl font-extrabold font-serif'>Learn</span>
              <span className='text-8xl font-extrabold font-serif'>Compete</span>
            </div>
            <div className='flex justify-center'>
              <span className='text-8xl font-extrabold font-serif text-center'>Dominate</span>
            </div>
          </div>

          <div className='flex justify-center'>
            <span className='text-md font-sans text-center text-gray-400'>
              A series of events and competitions organized by the Computer Science Students of Diponegoro University
              that aims to introduce the Technology Culture to the community.
            </span>
          </div>
        </div>

        <div className='flex justify-center pb-24'>
          <Button size={'lg'}>Register</Button>
        </div>
      </section>

      <section className='flex flex-col gap-12 items-center'>
        <span className='text-4xl font-extrabold font-serif'>Close Registration</span>

        <div className='flex gap-12'>
          <div className='flex flex-col justify-center items-center px-4 py-6 rounded-xl font-sans bg-white backdrop-filter backdrop-blur-lg bg-opacity-30'>
            <span className='text-7xl font-bold'>05</span>
            <span className='text-md text-gray-400'>Days</span>
          </div>
          <div className='flex flex-col justify-center items-center px-4 py-6 rounded-xl font-sans bg-white backdrop-filter backdrop-blur-lg bg-opacity-30'>
            <span className='text-7xl font-bold'>12</span>
            <span className='text-md text-gray-400'>Hours</span>
          </div>
          <div className='flex flex-col justify-center items-center px-4 py-6 rounded-xl font-sans bg-white backdrop-filter backdrop-blur-lg bg-opacity-30'>
            <span className='text-7xl font-bold'>20</span>
            <span className='text-md text-gray-400'>Minutes</span>
          </div>
          <div className='flex flex-col justify-center items-center px-4 py-6 rounded-xl font-sans bg-white backdrop-filter backdrop-blur-lg bg-opacity-30'>
            <span className='text-7xl font-bold'>02</span>
            <span className='text-md text-gray-400'>Seconds</span>
          </div>
        </div>
      </section>

      <section className='h-screen'>
        <div className='flex gap-4 flex-wrap justify-center'>
          {[1, 2, 3, 4, 5].map((item) => (
            <div className='md:w-96 w-full h-[500px] border rounded-lg' key={item}></div>
          ))}
        </div>
      </section>
    </main>
  )
}
