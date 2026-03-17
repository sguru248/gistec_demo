import PageHero from '../components/layout/PageHero'
import Section from '../components/layout/Section'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import FadeInOnScroll from '../components/animation/FadeInOnScroll'
import StaggerChildren, { StaggerItem } from '../components/animation/StaggerChildren'
import { customers, customersIntro } from '../data/customers'

const accentColors = ['blue', 'green', 'teal', 'amber'] as const

export default function CustomersPage() {
  return (
    <>
      <PageHero title="Customer Success Stories" subtitle={customersIntro} />

      <Section>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((customer, i) => (
            <StaggerItem key={customer.id}>
              <Card
                className="h-full border-l-4"
                style={{ borderLeftColor: ['#13538A', '#2D8632', '#0D7377', '#FBBF24'][i % 4] } as React.CSSProperties}
                accent={accentColors[i % 4]}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 h-16 shrink-0 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center">
                    <img
                      src={customer.logo}
                      alt={customer.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{customer.name}</h3>
                </div>
                <Badge variant={i % 2 === 0 ? 'blue' : 'teal'}>{customer.industry}</Badge>
                <ul className="mt-4 space-y-2">
                  {customer.projects.map((project) => (
                    <li key={project} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                      {project}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Bottom text */}
      <Section className="bg-slate-50">
        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="blue">GeoWeb Business Applications</Badge>
              <Badge variant="teal">GIS Projects for Ministries</Badge>
              <Badge variant="green">Federal Agencies</Badge>
              <Badge variant="amber">Utilities</Badge>
            </div>
          </div>
        </FadeInOnScroll>
      </Section>
    </>
  )
}
