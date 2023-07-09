// import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className='flex min-h-screen h-full flex-col items-center justify-between px-24'>
      <section className='flex relative w-full flex-col' id='jumbotron'>
        <div className='w-96 h-96 bg-[#F2E0FF] blur-3xl rounded-full absolute -left-28 top-40 -z-10'></div>
        <div className='w-[500px] h-[500px] bg-[#F5E5FF] blur-3xl rounded-full absolute -right-64 top-40 -z-10'></div>
        <div className='w-[350px] h-[350px] bg-[#F4BF64] blur-3xl rounded-full absolute mx-auto left-12 -top-24 -z-10'></div>
        <div className='w-[350px] h-[350px] bg-[#F4BF64] blur-3xl rounded-full absolute mx-auto right-12 -top-48 -z-10'></div>
      </section>
    </main>
  )
}
