export interface NavItem {
  label: string
  path: string
}

export const mainNavItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Training', path: '/training' },
  { label: 'Technical Support', path: '/support' },
  { label: 'Customers', path: '/customers' },
  { label: 'Events', path: '/events' },
  { label: 'Partners', path: '/partners' },
  { label: 'About Us', path: '/about' },
]

export const topBarLinks: NavItem[] = [
  { label: 'Contact Us', path: '/contact' },
  { label: 'Careers', path: '/careers' },
]
