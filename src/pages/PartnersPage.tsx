import { ArrowRight } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import Section from '../components/layout/Section'
import FadeInOnScroll from '../components/animation/FadeInOnScroll'
import StaggerChildren, { StaggerItem } from '../components/animation/StaggerChildren'
import { partners } from '../data/partners'

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Our Technology Partners"
        subtitle="Collaborating with leading software vendors and data providers worldwide"
      />

      <Section>
        <FadeInOnScroll>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto text-center mb-12">
            GISTEC collaborates with leading software vendors to offer our customers the most
            modern and comprehensive selection of geospatial solutions worldwide.
          </p>
        </FadeInOnScroll>

        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <StaggerItem key={partner.name}>
              <div className="group cursor-pointer">
                <div className="aspect-[3/2] rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center p-4 transition-all duration-500 hover:shadow-lg hover:border-navy-light/20 hover:-translate-y-1">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-[80%] max-h-[60px] object-contain opacity-75 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  <span className="mt-2 block text-xs font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
                    {partner.name}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal to-navy-light py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Become a Partner</h2>
          <p className="mt-4 text-white/80">
            Interested in partnering with gistec? Get in touch with our team.
          </p>
          <a
            href="mailto:info@gistec.com?subject=Partnership Inquiry"
            className="mt-8 inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-xl"
          >
            Apply Now <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  )
}
