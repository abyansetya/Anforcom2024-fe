import Image from 'next/image'
import highlight1 from 'public/highlight1.png'
import highlight2 from 'public/highlight2.png'

export default function Highlight() {
  return (
    <div className='relative flex flex-col gap-8 items-center'>
      <div className='flex flex-row gap-8 items-center'>
        <Image
          className='w-[360px] h-[290px] rounded-[11%] object-cover '
          src={highlight1}
          alt=''
          width={640}
          height={640}
        ></Image>
        <Image
          className='w-[360px] h-[290px] rounded-[11%] object-cover '
          src={highlight2}
          alt=''
          width={640}
          height={640}
        ></Image>
        <Image
          className='w-[360px] h-[290px] rounded-[11%] object-cover '
          src={highlight1}
          alt=''
          width={640}
          height={640}
        ></Image>
        <Image
          className='w-[360px] h-[290px] rounded-[11%] object-cover '
          src={highlight2}
          alt=''
          width={640}
          height={640}
        ></Image>
        <Image
          className='w-[360px] h-[290px] rounded-[11%] object-cover '
          src={highlight1}
          alt=''
          width={640}
          height={640}
        ></Image>
        <Image
          className='w-[360px] h-[290px] rounded-[11%] object-cover '
          src={highlight2}
          alt=''
          width={640}
          height={640}
        ></Image>
      </div>
      <div className='flex flex-row gap-8 items-center'>
        <Image
          className='w-[360px] h-[290px] rounded-[11%] object-cover '
          src={highlight1}
          alt=''
          width={640}
          height={640}
        ></Image>
        <Image
          className='w-[360px] h-[290px] rounded-[11%] object-cover '
          src={highlight2}
          alt=''
          width={640}
          height={640}
        ></Image>
        <Image
          className='w-[360px] h-[290px] rounded-[11%] object-cover '
          src={highlight1}
          alt=''
          width={640}
          height={640}
        ></Image>
        <Image
          className='w-[360px] h-[290px] rounded-[11%] object-cover '
          src={highlight2}
          alt=''
          width={640}
          height={640}
        ></Image>
        <Image
          className='w-[360px] h-[290px] rounded-[11%] object-cover '
          src={highlight1}
          alt=''
          width={640}
          height={640}
        ></Image>
      </div>
    </div>
  )
}
