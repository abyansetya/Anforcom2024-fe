import Image from 'next/image'
import highlight1 from 'public/highlight1.png'
import highlight2 from 'public/highlight2.png'

export default function Highlight() {
  return (
    <div className='relative flex flex-col gap-4 items-center'>
      <div className='flex flex-row gap-4 items-center'>
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover bg-blue-600/30 backdrop-brightness-75'
          src={highlight1}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={highlight2}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={highlight1}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={highlight2}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={highlight1}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={highlight2}
          alt=''
          width={640}
          height={640}
        />
      </div>

      <div className='flex flex-row gap-4 items-center'>
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={highlight1}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={highlight2}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={highlight1}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={highlight2}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={highlight1}
          alt=''
          width={640}
          height={640}
        />
      </div>
    </div>
  )
}
