'use client'

import { NavigationType, NavigationConfig as navigationConfig } from '@/config/navigation-config'
import { Button } from './ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='flex items-center sticky top-0 z-10 w-full h-20 backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 border-b'>
      <div className='container flex justify-between'>
        <Link href='/' className='text-xl font-bold font-serif'>
          Anforcom
        </Link>
        <div className='flex gap-4'>
          {navigationConfig.map((item: NavigationType) => (
            <div
              key={item.name}
              className='flex cursor-pointer font-serif text-sm hover:bg-white px-4 py-2 bg-opacity-60 text-gray-400 hover:text-black rounded-full'
            >
              {item.name}
            </div>
          ))}
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  )
}

export default Header
