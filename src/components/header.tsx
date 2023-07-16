// 'use client'

// import { NavigationType, NavigationConfig as navigationConfig } from '@/config/navigation-config'
// import { Button } from './ui/button'
// import Link from 'next/link'
// import Image from 'next/image'
// import anforcomIcon from 'public/anforcom-icon.svg'

// const Header = () => {
//   return (
//     <nav className='flex items-center fixed top-0 z-50 w-full h-20 backdrop-blur-lg bg-cpurple-4 bg-opacity-25'>
//       <div className='container flex justify-between max-w-6xl items-center'>
//         <Link href='/' className='text-xl font-bold font-serif'>
//           <Image src={anforcomIcon} alt='anforcom-icon' width={70} height={33} />
//         </Link>
//         <div className='flex gap-8'>
//           {navigationConfig.map((item: NavigationType) => (
//             <Link
//               href={item.path}
//               key={item.name}
//               className='flex cursor-pointer rounded-full font-serif  hover:bg-cpurple-3 hover:bg-opacity-50 px-4 py-2 bg-opacity-100 active:bg-cpurple-3 text-cgray-0 items-center'
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//         <div>
//           <Link href='/login'>
//             <Button>Login</Button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Header

'use client'

import { NavigationDataType } from '@/constants/navigation-data'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { twJoin } from 'tailwind-merge'
import { Button } from './ui'

type HeaderProps = {
  logo: string
  links: NavigationDataType
}

const Header = ({ logo, links }: HeaderProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const isActive = (link: string) => (pathname === link ? 'text-white font-bold' : 'text-neutral-400')

  return (
    <nav className='flex items-center fixed top-0 z-50 w-full h-20 backdrop-blur-lg bg-cpurple-4 bg-opacity-25 mx-auto justify-center px-4 py-4 md:justify-between font-sans'>
      <div className='container px-2 flex justify-between max-w-[983px] items-center'>
        <div className='flex items-center justify-center md:justify-between font-bold w-max'>
          <Image src={logo} alt='hero-title' height={48} width={48} />
        </div>

        <div className='hidden items-center gap-4 md:flex'>
          {links.map((link) => {
            return (
              <div
                key={link.href}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={() => router.push(link.href)}
                className={`${isActive(
                  link.href
                )} bold flex h-min flex-grow cursor-pointer flex-col items-center gap-1 rounded-full p-2 px-4 py-2 transition-all duration-150 hover:border-white hover:bg-cpurple-6 hover:bg-opacity-20 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50 focus-visible:border-sky-700 sm:w-auto`}
              >
                <span className='text-base'>{link.label}</span>
              </div>
            )
          })}
        </div>

        <div className={`items-center`}>
          <Button
            variant='outline'
            className='text-sm'
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => router.push('/request-quotation')}
          >
            Masuk
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Header
