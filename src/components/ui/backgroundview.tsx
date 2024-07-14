import React from 'react'

const backgroundview = () => {
  return (
    <div className='relative w-full -z-10 flex items-center justify-center'>
      <img
        src='/assets/images/bg-green.svg'
        alt='Background Image'
        className='absolute object-cover hidden md:flex w-full md:top-[-200px] lg:top-[-400px] '
      />
    </div>
  )
}

export default backgroundview
