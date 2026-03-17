import { ArrowRight, Users, Heart, TrendingUp } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import Section from '../components/layout/Section'
import Card from '../components/ui/Card'
import FadeInOnScroll from '../components/animation/FadeInOnScroll'
import StaggerChildren, { StaggerItem } from '../components/animation/StaggerChildren'

const perks = [
  { icon: Heart, title: 'Good Working Environment', description: 'A collaborative and supportive workplace culture.' },
  { icon: TrendingUp, title: 'Growth Potential', description: 'Enormous growth potential and career development opportunities.' },
  { icon: Users, title: 'Competitive Package', description: 'Competitive salary and comprehensive benefits.' },
]

export default function CareersPage() {
  return (
    <>
      <PageHero title="Join Our Team" subtitle="Build the future of geospatial technology" />

      <Section>
        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Join Us!</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              gistec always welcomes bright and talented professionals. Good working environment,
              competitive salary and enormous growth potential await the successful candidates.
            </p>
          </div>
        </FadeInOnScroll>
      </Section>

      {/* Perks */}
      <Section className="bg-slate-50">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {perks.map((perk) => (
            <StaggerItem key={perk.title}>
              <Card className="text-center h-full" accent="green">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gistec-green/10 flex items-center justify-center">
                  <perk.icon size={28} className="text-gistec-green" />
                </div>
                <h3 className="mt-4 font-semibold">{perk.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{perk.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Apply CTA */}
      <section className="bg-gradient-to-r from-gistec-green to-emerald py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Apply?</h2>
          <p className="mt-4 text-white/80 text-lg">
            Send your CV to our careers team and take the first step.
          </p>
          <a
            href="mailto:careers@gistec.com"
            className="mt-8 inline-flex items-center gap-2 bg-white text-gistec-green px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-xl"
          >
            Send Your CV <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  )
}
