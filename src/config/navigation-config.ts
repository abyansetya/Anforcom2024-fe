const navigationConfig = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  },
  {
    name: 'Login',
    path: '/login'
  }
]

export type NavigationType = (typeof navigationConfig)[0]
export type NavigationConfigType = typeof navigationConfig

export const NavigationConfig = navigationConfig
