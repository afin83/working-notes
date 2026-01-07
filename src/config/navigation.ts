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
        description: 'Learn more about me',
      },
      {
        label: 'Personal portfolio',
        to: '/about/portfolio',
        description: 'View my work and projects',
      },
      {
        label: 'Form components',
        to: '/about/form-components',
        description: 'View all form and input components',
      },
      {
        label: 'Typography',
        to: '/about/typography',
        description: 'Text styles and typography patterns',
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
