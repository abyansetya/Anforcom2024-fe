import { IconArtboard, IconHome2, IconUsers } from '@tabler/icons-react'

const navigationData = [
  {
    label: 'Home',
    href: '/',
    icon: <IconHome2 />
  },
  {
    label: 'Competition',
    href: '/competition',
    icon: <IconArtboard />,
    subMenu: [
      {
        label: 'UI-UX Competition',
        href: '/competition/duc'
      },
      {
        label: 'Logic Competition',
        href: '/competition/dlc'
      }
    ]
  },
  {
    label: 'Workshop',
    href: '/maintenance',
    icon: <IconUsers />
  }
]

export type NavigationDataType = typeof navigationData

export default navigationData
