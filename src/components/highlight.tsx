import Image from 'next/image'

export default function Highlight() {
  return (
    <div className='relative flex flex-col gap-4 items-center'>
      <div className='flex flex-row gap-4 items-center'>
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover bg-blue-600/30 backdrop-brightness-75'
          src={'/assets/images/highlight1.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight2.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight3.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight4.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight5.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight6.jpg'}
          alt=''
          width={640}
          height={640}
        />
      </div>

      <div className='flex flex-row gap-4 items-center'>
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight7.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight8.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight9.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight10.jpg'}
          alt=''
          width={640}
          height={640}
        />
        <Image
          className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
          src={'/assets/images/highlight11.jpg'}
          alt=''
          width={640}
          height={640}
        />
      </div>
    </div>
  )
}
