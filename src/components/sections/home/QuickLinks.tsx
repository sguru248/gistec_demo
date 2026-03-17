import { ShoppingCart, Cloud, Settings, GraduationCap, ArrowRight } from 'lucide-react'
import Card from '../../ui/Card'
import IconBox from '../../ui/IconBox'
import FadeInOnScroll from '../../animation/FadeInOnScroll'
import StaggerChildren, { StaggerItem } from '../../animation/StaggerChildren'
import Section from '../../layout/Section'

const links = [
  {
    icon: ShoppingCart,
    title: 'Buy ArcGIS',
    description: 'Purchase ArcGIS software licenses through the Esri Store.',
    href: 'https://int-store.esri.com/en-us/store/overview',
    external: true,
    variant: 'blue' as const,
  },
  {
    icon: Cloud,
    title: 'Cloud GIS',
    description: 'ArcGIS Online subscription plans for cloud-based mapping.',
    href: 'mailto:rusell.echevarria@gistec.com?subject=Quotation for ArcGIS Online Subscription Plans',
    external: true,
    variant: 'teal' as const,
  },
  {
    icon: Settings,
    title: 'Software Maintenance',
    description: 'Renew your software maintenance for continued support.',
    href: 'mailto:genevieve.lim@gistec.com?cc=rusell.echevarria@gistec.com&subject=Quotation for Software Maintenance Renewal',
    external: true,
    variant: 'green' as const,
  },
  {
    icon: GraduationCap,
    title: 'Training',
    description: 'Professional GIS training by certified instructors.',
    href: '/training',
    external: false,
    variant: 'blue' as const,
  },
]

export default function QuickLinks() {
  return (
    <Section className="bg-slate-50">
      <FadeInOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Quick Access</h2>
      </FadeInOnScroll>
      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {links.map((link) => (
          <StaggerItem key={link.title}>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="block h-full"
            >
              <Card className="h-full group cursor-pointer" accent={link.variant}>
                <IconBox icon={link.icon} variant={link.variant} />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{link.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{link.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy-light group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </Card>
            </a>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  )
}
