export interface NavItem {
  label: string
  to?: string
  children?: NavChild[]
}

export interface NavChild {
  label: string
  to: string
  description?: string
}

export const navigationConfig: NavItem[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    children: [
      {
        label: 'About me',
        to: '/about',
        description: 'Meet the people behind Working Notes',
      },
      {
        label: 'Our Team',
        to: '/about/team',
        description: 'Meet the people behind Working Notes',
      },
      {
        label: 'Mission',
        to: '/about/mission',
        description: 'Our vision and values',
      },
      {
        label: 'History',
        to: '/about/history',
        description: 'How Working Notes came to be',
      },
    ],
  },
  {
    label: 'Notes',
    to: '/notes',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
]
