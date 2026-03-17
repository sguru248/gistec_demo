export interface CustomerStory {
  id: string
  name: string
  shortName: string
  projects: string[]
  industry: string
  logo: string
  brandColor: string
}

export const customersIntro = "gistec has implemented enterprise GIS solutions for top organizations across the Middle East, leveraging Geocortex and Esri technologies to deliver feature-rich, user-centric web mapping applications."

export const customers: CustomerStory[] = [
  {
    id: 'rta',
    name: 'Roads & Transport Authority (RTA)',
    shortName: 'RTA',
    projects: [
      'Revamped portal with advanced Web Mapping capabilities',
      'Feature-rich, user-centric web mapping applications',
    ],
    industry: 'Transportation',
    logo: '/images/customers/rta-logo.png',
    brandColor: '#2E7D32',
  },
  {
    id: 'dot',
    name: 'Department of Transport',
    shortName: 'DoT',
    projects: [
      'GeoTRANS GIS portal',
      'Fast-track enterprise GIS implementation for transportation',
    ],
    industry: 'Transportation',
    logo: '/images/customers/dot-logo.png',
    brandColor: '#1565C0',
  },
  {
    id: 'sewa',
    name: 'Sharjah Electricity & Water Authority (SEWA)',
    shortName: 'SEWA',
    projects: [
      'Centralized GIS warehouse',
      'Web mapping services and distributed client solution',
      'Maximum benefit for utility stakeholders',
    ],
    industry: 'Utilities',
    logo: '/images/customers/sewa-logo.png',
    brandColor: '#00ACC1',
  },
  {
    id: 'adpc',
    name: 'Abu Dhabi Ports Company (ADPC)',
    shortName: 'ADPC',
    projects: [
      'Enterprise GIS integrating multiple departments',
      'Secure access to GIS information across organization',
    ],
    industry: 'Maritime & Logistics',
    logo: '/images/customers/adpc-logo.png',
    brandColor: '#283593',
  },
  {
    id: 'mpw',
    name: 'Ministry of Public Works',
    shortName: 'MPW',
    projects: [
      'Enterprise GIS system using Navteq Data',
      'COTS approach with web services access',
    ],
    industry: 'Government',
    logo: '/images/customers/mpw-logo.webp',
    brandColor: '#6A1B9A',
  },
  {
    id: 'fewa',
    name: 'Federal Electricity & Water Authority (FEWA)',
    shortName: 'FEWA',
    projects: [
      'Complete turn-key GIS services',
      'Demographic Impact Map',
      'Utility GIS needs for other emirates',
    ],
    industry: 'Utilities',
    logo: '/images/customers/fewa-logo.svg',
    brandColor: '#F57C00',
  },
  {
    id: 'rak',
    name: 'Ras Al Khaimah Municipality',
    shortName: 'RAK Municipality',
    projects: [
      'Fully functional spatial solution for Enterprise GIS (EGIS)',
    ],
    industry: 'Government',
    logo: '/images/customers/rak-logo.png',
    brandColor: '#C62828',
  },
]
