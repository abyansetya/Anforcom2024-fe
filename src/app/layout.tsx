import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { fontSans, fontSerif } from '@/lib/fonts'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import Header from '@/components/header'
import navigationData from '@/constants/navigation-data'
import BottomNavigation from '@/components/bottom-navigation'
import { Analytics } from '@vercel/analytics/react'
import FramerProvider from './framer-provider'
import Footer from '@/components/footer'
import { Metadata } from 'next'
import Whatsapp from '@/components/whatsapp'

export const metadata: Metadata = {
  title: 'Anforcom 2023',
  description:
    'A series of events and competitions organized by the Computer Science Students of Diponegoro University that aims to introduce the Technology Culture to the community.',
  keywords: ['competition', 'anforcom', 'ui-ux', 'logic', 'it competition']
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={cn(`${fontSans.variable}`, `${fontSerif.variable}`, 'bg-cwhite-5')}>
        <Header logo={'/assets/images/logo.svg'} links={navigationData} />
        <FramerProvider>{children}</FramerProvider>
        <TailwindIndicator />
        <Analytics />
        <Footer />

        <div className='flex md:hidden'>
          <BottomNavigation links={navigationData} />
        </div>

        <div>
          <Whatsapp />
        </div>
      </body>
    </html>
  )
}
