'use client'

import { NavigationType, NavigationConfig as navigationConfig } from '@/config/navigation-config'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import anforcomIcon from 'public/anforcom-icon.svg'

const Header = () => {
  return (
    <nav className='flex items-center fixed top-0 z-10 w-full h-20 backdrop-blur-lg bg-cpurple-4 bg-opacity-25 border border-cpurple-3'>
      <div className='container flex justify-between min-w-full items-center'>
        <Link href='/' className='text-xl font-bold font-serif'>
          <Image src={anforcomIcon} alt='anforcom-icon' width={70} height={33} />
        </Link>
        <div className='flex gap-8'>
          {navigationConfig.map((item: NavigationType) => (
            <div
              key={item.name}
              className='flex cursor-pointer font-serif text-lg hover:bg-cpurple-4 hover:bg-opacity-100 px-4 py-2 bg-opacity-100 active:bg-cpurple-3 text-cgray-0 rounded-md items-center'
            >
              <Link href={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div>
          <Link href='/login'>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
