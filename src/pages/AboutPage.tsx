import { Calendar, Globe, MapPin, Phone, Mail, Award, Building2 } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import Section from '../components/layout/Section'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import FadeInOnScroll from '../components/animation/FadeInOnScroll'
import StaggerChildren, { StaggerItem } from '../components/animation/StaggerChildren'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import { offices } from '../data/offices'

const keyFacts = [
  { icon: Calendar, label: 'Founded', value: '1976' },
  { icon: Award, label: 'Status', value: 'Esri Official Distributor' },
  { icon: Building2, label: 'Offices', value: '5 Global' },
  { icon: Globe, label: 'Coordinates', value: 'N25.3341 E55.3894' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero title="About gistec" subtitle="Leveraging GIS & IT Synergy" />

      {/* Company Overview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <FadeInOnScroll>
            <p className="text-lg text-slate-600 leading-relaxed">
              gistec is an Esri Official Distributor in the UAE, specializing in intelligent,
              cloud-based, and enterprise-wide geospatial data solutions. Services include GIS
              consulting, database services, geographic imaging, applications & production/solution
              development, server, web and mobile GIS, 3D GIS, training, and professional services.
            </p>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              gistec leverages GIS information within dynamic business processes and can spatially
              enable existing or planned business applications (ERP, CRM, Asset Management,
              Maintenance Management, HR Systems). The company collaborates with leading software
              vendors and data providers and has implemented mygistec, a self-service customer
              portal at my.gistec.com.
            </p>
          </FadeInOnScroll>
        </div>
      </Section>

      {/* Key Facts */}
      <Section className="bg-navy" dark>
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {keyFacts.map((fact) => (
            <StaggerItem key={fact.label}>
              <div className="text-center">
                <fact.icon className="mx-auto mb-3 text-emerald" size={28} />
                <div className="text-xl font-bold text-white">{fact.value}</div>
                <p className="mt-1 text-sm text-slate-400">{fact.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Years counter */}
      <Section className="bg-slate-50">
        <FadeInOnScroll>
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-navy">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <p className="mt-2 text-xl text-slate-600 font-medium">Years of Excellence</p>
          </div>
        </FadeInOnScroll>
      </Section>

      {/* Office Locations */}
      <Section>
        <FadeInOnScroll>
          <h2 className="text-3xl font-bold mb-12 text-center">Our Offices</h2>
        </FadeInOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office) => (
            <StaggerItem key={office.id}>
              <Card className="h-full" accent={office.isHQ ? 'green' : 'blue'}>
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold">gistec — {office.city}</h3>
                  {office.isHQ && <Badge variant="green">HQ</Badge>}
                </div>
                <p className="mt-1 text-sm text-slate-500">{office.country}</p>

                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p className="flex items-start gap-2">
                    <MapPin size={14} className="shrink-0 mt-1 text-slate-400" />
                    {office.address}
                  </p>
                  {office.phone && (
                    <p className="flex items-center gap-2">
                      <Phone size={14} className="text-slate-400" />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-navy-light transition-colors">
                        {office.phone}
                      </a>
                    </p>
                  )}
                  {office.tollFree && (
                    <p className="flex items-center gap-2">
                      <Phone size={14} className="text-slate-400" />
                      Toll Free: {office.tollFree}
                    </p>
                  )}
                  {office.fax && (
                    <p className="text-slate-400 text-xs">Fax: {office.fax}</p>
                  )}
                  {office.email && (
                    <p className="flex items-center gap-2">
                      <Mail size={14} className="text-slate-400" />
                      <a href={`mailto:${office.email}`} className="hover:text-navy-light transition-colors">
                        {office.email}
                      </a>
                    </p>
                  )}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>
    </>
  )
}
