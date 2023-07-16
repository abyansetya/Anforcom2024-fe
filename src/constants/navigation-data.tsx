import { IconArtboard, IconHome2, IconUsers } from '@tabler/icons-react'

const navigationData = [
  {
    label: 'Beranda',
    href: '/',
    icon: <IconHome2 />
  },
  {
    label: 'Kompetisi',
    href: '/competition',
    icon: <IconArtboard />,
    subMenu: [
      {
        label: 'Kompetisi 1',
        href: '/competition/1'
      },
      {
        label: 'Kompetisi 2',
        href: '/competition/2'
      }
    ]
  },
  {
    label: 'Seminar',
    href: '/seminar',
    icon: <IconUsers />
  }
]

export type NavigationDataType = typeof navigationData

export default navigationData
