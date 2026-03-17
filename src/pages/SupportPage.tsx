import { ExternalLink, ArrowRight, BookOpen, FileText, Download, Users, HelpCircle, Globe } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import Section from '../components/layout/Section'
import Card from '../components/ui/Card'
import FadeInOnScroll from '../components/animation/FadeInOnScroll'
import StaggerChildren, { StaggerItem } from '../components/animation/StaggerChildren'

const quickLinks = [
  { icon: Globe, title: 'Esri Developer Network', href: 'https://developers.arcgis.com/', description: 'Developer tools & APIs' },
  { icon: BookOpen, title: 'ArcGIS Resources', href: 'https://doc.arcgis.com/en/', description: 'Documentation & guides' },
  { icon: HelpCircle, title: 'Contact Tech Support', href: 'mailto:support@gistec.com', description: 'Get expert help' },
]

const knowledgeBase = [
  { icon: HelpCircle, title: 'Help & FAQs', description: 'Common questions answered' },
  { icon: FileText, title: 'Technical Articles', description: 'In-depth technical guides' },
  { icon: BookOpen, title: 'White Papers', description: 'Research and best practices' },
  { icon: BookOpen, title: 'GIS Dictionary', description: 'GIS terminology reference' },
]

const communityLinks = [
  { title: 'ArcGIS Community Forums', href: 'https://community.esri.com/' },
  { title: 'Esri Blogs', href: 'https://www.esri.com/arcgis-blog' },
  { title: 'ArcGIS Status', href: 'https://status.arcgis.com' },
]

export default function SupportPage() {
  return (
    <>
      <PageHero title="Technical Support" subtitle="Expert assistance for all your GIS needs" />

      {/* Support Center Login */}
      <Section>
        <FadeInOnScroll>
          <div className="max-w-xl mx-auto text-center">
            <Card className="border-2 border-navy-light/20" hover={false} accent="none">
              <h2 className="text-2xl font-bold">Support Center</h2>
              <p className="mt-2 text-slate-500">Access your support tickets and knowledge base.</p>
              <a
                href="https://support.gissupport.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-navy-light text-white px-8 py-3 rounded-xl font-semibold hover:bg-navy transition-colors"
              >
                Login to Support Portal <ExternalLink size={16} />
              </a>
              <div className="mt-4">
                <a
                  href="https://www.esri.com/en-us/my-esri-login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-light hover:underline inline-flex items-center gap-1"
                >
                  My Esri Login <ExternalLink size={12} />
                </a>
              </div>
            </Card>
          </div>
        </FadeInOnScroll>
      </Section>

      {/* Quick links */}
      <Section className="bg-slate-50">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <StaggerItem key={link.title}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="h-full group text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-navy-light/10 flex items-center justify-center">
                    <link.icon size={28} className="text-navy-light" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{link.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{link.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-navy-light">
                    Visit <ExternalLink size={12} />
                  </span>
                </Card>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Knowledge Base */}
      <Section>
        <FadeInOnScroll>
          <h2 className="text-3xl font-bold mb-8">Knowledge Base</h2>
        </FadeInOnScroll>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {knowledgeBase.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full">
                <item.icon size={24} className="text-teal" />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Community & Downloads */}
      <Section className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-12">
          <FadeInOnScroll direction="left">
            <h3 className="text-2xl font-bold mb-6">
              <Users size={24} className="inline mr-2 text-navy-light" />
              Community
            </h3>
            <ul className="space-y-3">
              {communityLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-navy-light transition-colors"
                  >
                    <ArrowRight size={14} /> {link.title} <ExternalLink size={12} className="text-slate-400" />
                  </a>
                </li>
              ))}
            </ul>
          </FadeInOnScroll>

          <FadeInOnScroll direction="right">
            <h3 className="text-2xl font-bold mb-6">
              <Download size={24} className="inline mr-2 text-navy-light" />
              Downloads
            </h3>
            <ul className="space-y-3">
              <li className="text-slate-600 flex items-center gap-2"><ArrowRight size={14} /> Patches & Service Packs</li>
              <li className="text-slate-600 flex items-center gap-2"><ArrowRight size={14} /> Scripts & Samples</li>
              <li className="text-slate-600 flex items-center gap-2"><ArrowRight size={14} /> Data & Templates</li>
            </ul>
          </FadeInOnScroll>
        </div>
      </Section>
    </>
  )
}
