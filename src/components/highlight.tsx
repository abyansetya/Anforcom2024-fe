import Image from 'next/image'

export default function Highlight() {
  return (
    <div className=' flex overflow-hidden justify-center w-full '>
      {/* desktop & tablet */}
      <div className='absolute md:flex hidden overflow-hidden'>
        <Image
          className='w-[328px] h-[368px]  object-cover rotate-[20deg] translate-x-[-150px]'
          alt=''
          src={'/assets/images/polaroid.png'}
          width={328}
          height={368}
        />
        <Image
          className='w-[328px] h-[368px] object-cover translate-x-[-200px]'
          alt=''
          src={'/assets/images/polaroid.png'}
          width={328}
          height={368}
        />
        <Image
          className='w-[328px] h-[368px] object-cover rotate-[20deg] translate-x-[-240px]'
          alt=''
          src={'/assets/images/polaroid.png'}
          width={328}
          height={368}
        />
        <Image
          className='w-[328px] h-[368px] object-cover rotate-[20deg] translate-x-[-290px]'
          alt=''
          src={'/assets/images/polaroid.png'}
          width={328}
          height={368}
        />
        <Image
          className='w-[328px] h-[368px] object-cover  translate-x-[-300px]'
          alt=''
          src={'/assets/images/polaroid.png'}
          width={328}
          height={368}
        />
      </div>

      {/* mobile */}
      <div className='md:hidden flex w-full h-[900px] absolute overflow-hidden justify-center '>
        <Image
          className='w-[250px] absolute object-cover left-0 translate-y-[50px] translate-x-[-30px]'
          alt=''
          src={'/assets/images/polaroid.png'}
          width={328}
          height={368}
        />
        <Image
          className='w-[250px] absolute object-cover  translate-y-[50px] rotate-[30deg] right-0'
          alt=''
          src={'/assets/images/polaroid.png'}
          width={328}
          height={368}
        />
        <Image
          className='w-[250px] absolute object-cover left-0 translate-y-[250px] rotate-[10deg] translate-x-[-30px]'
          alt=''
          src={'/assets/images/polaroid.png'}
          width={328}
          height={368}
        />
        <Image
          className='w-[250px] absolute object-cover  translate-y-[220px] rotate-[10deg] right-0'
          alt=''
          src={'/assets/images/polaroid.png'}
          width={328}
          height={368}
        />
        <Image
          className='w-[250px] absolute object-cover left-0 translate-y-[450px] rotate-[30deg] translate-x-[-50px]'
          alt=''
          src={'/assets/images/polaroid.png'}
          width={328}
          height={368}
        />
        <Image
          className='w-[250px] absolute object-cover right-0 translate-y-[450px] rotate-[-20deg]'
          alt=''
          src={'/assets/images/polaroid.png'}
          width={328}
          height={368}
        />
      </div>
    </div>

    // <div className='relative flex flex-col gap-4 items-center'>
    //   <div className='flex flex-row gap-4 items-center'>
    //     <Image
    //       className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover bg-blue-600/30 backdrop-brightness-75'
    //       src={'/assets/images/highlight-1.jpg'}
    //       alt=''
    //       width={640}
    //       height={640}
    //     />
    //     <Image
    //       className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
    //       src={'/assets/images/highlight-2.jpg'}
    //       alt=''
    //       width={640}
    //       height={640}
    //     />
    //     <Image
    //       className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
    //       src={'/assets/images/highlight-3.jpg'}
    //       alt=''
    //       width={640}
    //       height={640}
    //     />
    //     <Image
    //       className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
    //       src={'/assets/images/highlight-4.jpg'}
    //       alt=''
    //       width={640}
    //       height={640}
    //     />
    //     <Image
    //       className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
    //       src={'/assets/images/highlight-5.jpg'}
    //       alt=''
    //       width={640}
    //       height={640}
    //     />
    //     <Image
    //       className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
    //       src={'/assets/images/highlight-6.jpg'}
    //       alt=''
    //       width={640}
    //       height={640}
    //     />
    //   </div>

    //   <div className='flex flex-row gap-4 items-center'>
    //     <Image
    //       className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
    //       src={'/assets/images/highlight-7.jpg'}
    //       alt=''
    //       width={640}
    //       height={640}
    //     />
    //     <Image
    //       className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
    //       src={'/assets/images/highlight-8.jpg'}
    //       alt=''
    //       width={640}
    //       height={640}
    //     />
    //     <Image
    //       className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
    //       src={'/assets/images/highlight-9.jpg'}
    //       alt=''
    //       width={640}
    //       height={640}
    //     />
    //     <Image
    //       className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
    //       src={'/assets/images/highlight-10.jpg'}
    //       alt=''
    //       width={640}
    //       height={640}
    //     />
    //     <Image
    //       className='aspect-square rounded-xl max-w-[200px] md:max-w-xs object-cover '
    //       src={'/assets/images/highlight-11.jpg'}
    //       alt=''
    //       width={640}
    //       height={640}
    //     />
    //   </div>
    // </div>
  )
}
