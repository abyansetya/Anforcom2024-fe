'use client'

import { useRouter, usePathname } from 'next/navigation'

type BottomNavigationItemProps = {
  label: string
  href: string
  icon: React.ReactNode
}

type BottomNavigationProps = {
  links: BottomNavigationItemProps[]
}

const BottomNavigation = ({ links }: BottomNavigationProps) => {
  return (
    <div>
      <div className='font-sans fixed bottom-0 left-0 right-0 flex max-h-20 w-full justify-around border-t border-t-cpurple-7 bg-cpurple-6 p-2 z-50'>
        {links.map((link) => {
          return <BottomNavigationItem key={link.href} label={link.label} href={link.href} icon={link.icon} />
        })}
      </div>
    </div>
  )
}

const BottomNavigationItem = ({ label, href, icon }: BottomNavigationItemProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const isActive = pathname === href ? 'bg-cpurple-4 text-white' : 'text-gray-500'

  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={() => router.push(href)}
      className={`${isActive} flex flex-grow cursor-pointer flex-col items-center gap-1 rounded-xl p-2 px-4 py-2 transition-all duration-150`}
    >
      <div>{icon}</div>
      <span className='text-xs'>{label}</span>
    </div>
  )
}

export default BottomNavigation
