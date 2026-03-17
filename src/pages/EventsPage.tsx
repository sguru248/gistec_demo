import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import Section from '../components/layout/Section'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import FadeInOnScroll from '../components/animation/FadeInOnScroll'
import { events } from '../data/events'

export default function EventsPage() {
  const upcoming = events.filter((e) => e.type === 'upcoming')
  const past = events.filter((e) => e.type === 'past')

  // Group past events by year
  const pastByYear = past.reduce<Record<number, typeof past>>((acc, event) => {
    if (!acc[event.year]) acc[event.year] = []
    acc[event.year].push(event)
    return acc
  }, {})

  const years = Object.keys(pastByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <>
      <PageHero title="Events" subtitle="Join us at conferences, workshops, and exhibitions" />

      {/* Upcoming Event */}
      {upcoming.length > 0 && (
        <Section>
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            {upcoming.map((event) => (
              <Card key={event.id} className="bg-gradient-to-r from-navy to-navy-light p-8 md:p-12" hover={false} accent="none">
                <Badge variant="green">Upcoming</Badge>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white">{event.name}</h3>
                <div className="mt-4 flex flex-wrap gap-6 text-slate-300">
                  <span className="flex items-center gap-2">
                    <Calendar size={18} className="text-emerald" /> {event.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={18} className="text-emerald" /> {event.location}
                  </span>
                </div>
              </Card>
            ))}
          </FadeInOnScroll>
        </Section>
      )}

      {/* Past Events Timeline */}
      <Section className="bg-slate-50">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold mb-12">Past Events</h2>
        </FadeInOnScroll>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

          {years.map((year) => (
            <div key={year} className="mb-12">
              {/* Year label */}
              <div className="relative flex items-center justify-center mb-8">
                <span className="relative z-10 bg-navy text-white text-sm font-bold px-4 py-2 rounded-full">
                  {year}
                </span>
              </div>

              {pastByYear[year].map((event, i) => (
                <FadeInOnScroll key={event.id} delay={i * 0.05}>
                  <div className={`relative flex items-start gap-6 mb-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-navy-light rounded-full -translate-x-1/2 mt-6 z-10 ring-4 ring-white" />

                    {/* Spacer for alignment */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Card */}
                    <div className="ml-10 md:ml-0 md:w-1/2 md:px-6">
                      <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-sm text-slate-400 font-medium">{event.date}</p>
                        <h3 className="mt-1 font-semibold text-slate-900">{event.name}</h3>
                        <p className="mt-1 text-sm text-slate-500 flex items-center gap-1">
                          <MapPin size={12} /> {event.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Visit gisworx</h2>
          <p className="mt-4 text-slate-300">
            Our flagship conference and exhibition for GIS professionals.
          </p>
          <a
            href="https://www.gisworx.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald/90 transition-colors shadow-xl"
          >
            Explore gisworx <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  )
}
