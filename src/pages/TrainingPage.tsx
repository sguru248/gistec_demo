import { Award, Monitor, MapPin, ArrowRight, Users, BookOpen, Calendar } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import Section from '../components/layout/Section'
import Card from '../components/ui/Card'
import FadeInOnScroll from '../components/animation/FadeInOnScroll'
import StaggerChildren, { StaggerItem } from '../components/animation/StaggerChildren'
import { trainingData } from '../data/training'

const highlights = [
  { icon: Award, title: 'Certified Trainers', description: 'Esri-certified professionals with years of industry experience.' },
  { icon: Monitor, title: 'Modern Labs', description: 'Well-equipped training labs with powerful workstations and dedicated servers.' },
  { icon: MapPin, title: 'Flexible Delivery', description: 'Training at our center or on-site at your premises.' },
]

export default function TrainingPage() {
  return (
    <>
      <PageHero title={trainingData.heading} subtitle="Enhance and broaden your GIS skills" />

      {/* Highlights */}
      <Section className="bg-slate-50">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="text-center h-full" accent="teal">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-teal/10 flex items-center justify-center">
                  <item.icon size={32} className="text-teal" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-slate-500">{item.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Description */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <FadeInOnScroll>
            <p className="text-lg text-slate-600 leading-relaxed">{trainingData.description}</p>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">{trainingData.facility}</p>
          </FadeInOnScroll>
        </div>
      </Section>

      {/* Discount Scheme */}
      <Section className="bg-gradient-to-r from-amber/10 to-amber/5">
        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber/20 flex items-center justify-center shrink-0">
                <Users size={24} className="text-amber-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Discount Scheme</h2>
                <p className="mt-2 text-slate-600">{trainingData.discountScheme}</p>
                <ul className="mt-4 space-y-2">
                  {trainingData.discountCategories.map((cat) => (
                    <li key={cat} className="flex items-center gap-2 text-slate-700">
                      <ArrowRight size={14} className="text-amber-600" /> {cat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </Section>

      {/* Seminar Series */}
      <Section>
        <FadeInOnScroll>
          <Card className="max-w-3xl mx-auto border-l-4 border-l-navy-light" hover={false} accent="none">
            <div className="flex items-start gap-4">
              <Calendar size={24} className="text-navy-light shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">ArcGIS Community Seminar Series</h3>
                <p className="mt-2 text-slate-600">{trainingData.seminarSeries}</p>
              </div>
            </div>
          </Card>
        </FadeInOnScroll>
      </Section>

      {/* CTA */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen size={48} className="mx-auto text-emerald mb-4" />
          <h2 className="text-3xl font-bold text-white">Request a Training Quote</h2>
          <p className="mt-4 text-slate-300">
            Get in touch to discuss your training needs and schedule.
          </p>
          <a
            href="mailto:training@gistec.com?subject=Quotation for Training"
            className="mt-8 inline-flex items-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald/90 transition-colors shadow-xl"
          >
            Email Training Team <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  )
}
