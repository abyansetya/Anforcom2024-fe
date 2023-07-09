const navigationConfig = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Event',
    path: '/event'
  },
  {
    name: 'Competition',
    path: '/contact'
  }
]

export type NavigationType = (typeof navigationConfig)[0]
export type NavigationConfigType = typeof navigationConfig

export const NavigationConfig = navigationConfig
