import Image from 'next/image'

export default function Highlight() {
  return (
    <div className='relative flex flex-col gap-4 items-center'>
      <div className='flex flex-row gap-4 items-center'>
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover bg-blue-600/30 backdrop-brightness-75'
          src={'/assets/images/highlight1.png'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight2.png'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight1.png'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight2.png'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight1.png'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight2.png'}
          alt=''
          width={640}
          height={640}
        />
      </div>

      <div className='flex flex-row gap-4 items-center'>
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight1.png'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight2.png'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight1.png'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight2.png'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight1.png'}
          alt=''
          width={640}
          height={640}
        />
      </div>
    </div>
  )
}
