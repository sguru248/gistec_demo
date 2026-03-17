export interface Announcement {
  id: string
  title: string
  description: string
  link?: string
}

export const announcements: Announcement[] = [
  {
    id: 'online-training',
    title: 'gistec Online Training',
    description: 'Level up your GIS skills with these training courses now offered online.',
    link: '/training',
  },
  {
    id: 'gisworx',
    title: 'gisworx Experiences',
    description: 'This gisworx, we have prepared new & exciting events especially designed for you.',
    link: 'https://www.gisworx.ae',
  },
  {
    id: 'web-appbuilder',
    title: 'Web AppBuilder Developer Edition 2.15 Now Available',
    description: 'The latest version of Web AppBuilder Developer Edition is now available for download.',
  },
  {
    id: 'gis-education',
    title: 'GIS for Education',
    description: 'Discover our education initiatives and how GIS is transforming learning.',
  },
]
