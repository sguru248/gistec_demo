import { Lightbulb, Database, Image, Code, Server, GraduationCap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const servicesIntro = "gistec is a technical professional company specializing in the development of intelligent, enterprise-wide geo-spatial data solutions for clients in several disciplines and industries."

export const services: Service[] = [
  {
    id: 'consulting',
    title: 'GIS Consulting',
    description: 'Strategic planning and implementation guidance to help organizations maximize the value of their geospatial investments.',
    icon: Lightbulb,
  },
  {
    id: 'database',
    title: 'Database Services',
    description: 'Geospatial database design and management for efficient data storage, retrieval, and analysis.',
    icon: Database,
  },
  {
    id: 'imaging',
    title: 'Geographic Imaging',
    description: 'Remote sensing and image processing for accurate geospatial data extraction and analysis.',
    icon: Image,
  },
  {
    id: 'development',
    title: 'Applications Development',
    description: 'Custom GIS application development tailored to your unique business requirements and workflows.',
    icon: Code,
  },
  {
    id: 'server-web',
    title: 'Server and Web GIS',
    description: 'Enterprise and web-based GIS solutions for distributed access to geospatial information.',
    icon: Server,
  },
  {
    id: 'training',
    title: 'Training',
    description: 'Professional GIS training programs delivered by certified instructors at our modern training facilities.',
    icon: GraduationCap,
  },
]

export const downloadableDocuments = [
  { title: 'gistec Company Profile', type: 'PDF' },
  { title: 'gistec Service Delivery Program T&C', type: 'PDF' },
  { title: 'Project Developed Source Code T&C', type: 'PDF' },
  { title: 'Application Maintenance Program T&C', type: 'PDF' },
]
