import { FileText, ArrowRight } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import Section from '../components/layout/Section'
import IconBox from '../components/ui/IconBox'
import FadeInOnScroll from '../components/animation/FadeInOnScroll'
import { services, servicesIntro, downloadableDocuments } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Professional Services" subtitle={servicesIntro} />

      <Section>
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main content */}
          <div className="space-y-16">
            {services.map((service, i) => (
              <FadeInOnScroll key={service.id}>
                <div className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-80 shrink-0">
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy/5 to-teal/5 flex items-center justify-center">
                      <IconBox icon={service.icon} size="lg" variant={i % 2 === 0 ? 'blue' : 'teal'} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {/* Quick nav */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Our Services</h3>
                <nav className="space-y-2">
                  {services.map((service) => (
                    <a
                      key={service.id}
                      href={`#${service.id}`}
                      className="block text-sm text-slate-500 hover:text-navy-light transition-colors py-1"
                    >
                      {service.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Documents */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Documents</h3>
                <ul className="space-y-3">
                  {downloadableDocuments.map((doc) => (
                    <li key={doc.title}>
                      <span className="flex items-start gap-2 text-sm text-slate-600 hover:text-navy-light transition-colors cursor-pointer">
                        <FileText size={16} className="shrink-0 mt-0.5 text-red-500" />
                        {doc.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-white/80">
            Contact us to discuss how our services can help your organization.
          </p>
          <a
            href="mailto:sales@gistec.com"
            className="mt-8 inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-xl"
          >
            Contact Sales <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  )
}
