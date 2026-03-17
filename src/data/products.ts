import { Monitor, Satellite, RefreshCw, Wrench, Globe, Layers } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Product {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const productsIntro = "GISTEC collaborates with leading software vendors to offer our customers the most modern and comprehensive selection of geospatial solutions worldwide."

export const productsNote = "GISTEC does not just sell these software products, but develops solutions to meet the unique business requirements of its customers. In order to provide a one-stop shop to the customers GISTEC also delivers integrated turnkey systems including high-end DBMS software, advanced server hardware, large format digitizers & plotters, and high-resolution satellite imagery."

export const products: Product[] = [
  {
    id: 'gis-software',
    title: 'GIS Software',
    description: 'GIS and Mapping software for comprehensive geospatial analysis and visualization.',
    icon: Monitor,
  },
  {
    id: 'geoimaging',
    title: 'GeoImaging Solutions',
    description: 'Advanced geospatial imaging software for photogrammetry and remote sensing.',
    icon: Satellite,
  },
  {
    id: 'data-conversion',
    title: 'GIS Data Conversion',
    description: 'Spatial ETL software to transform data in many GIS, CAD, raster, and database formats.',
    icon: RefreshCw,
  },
  {
    id: 'specialized',
    title: 'Specialized GIS Solutions',
    description: 'GIS applications for Utilities and Land Management.',
    icon: Wrench,
  },
  {
    id: 'sdi',
    title: 'SDI Solutions',
    description: 'Spatial Data Infrastructure solutions for enterprise-wide geospatial data management.',
    icon: Globe,
  },
  {
    id: 'vertigis',
    title: 'VertiGIS',
    description: 'Web GIS applications development software for building powerful mapping solutions.',
    icon: Layers,
  },
]

export const additionalProducts = [
  'Telecom network planning and engineering solutions',
  'Wireless networks planning and managing solutions',
  'Accurate, reliable, and detailed road network data',
  'Advanced printing solutions for large-format printers',
  'Thin Client GIS Solutions',
]
