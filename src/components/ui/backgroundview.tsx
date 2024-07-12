import React from 'react'

const backgroundview = () => {
  return (
    <div className='absolute w-full h-screen -z-10  flex items-center justify-center'>
      <img
        src='/assets/images/bg-green.svg'
        alt='Background Image'
        className='absolute object-cover  md:translate-y-[0px] lg:translate-y-[150px] xl:translate-y-[90px] hidden  md:flex  '
      />
    </div>
  )
}

export default backgroundview
