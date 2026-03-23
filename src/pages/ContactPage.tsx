import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import Section from '../components/layout/Section'
import Card from '../components/ui/Card'
import ContactForm from '../components/ui/ContactForm'
import FadeInOnScroll from '../components/animation/FadeInOnScroll'
import StaggerChildren, { StaggerItem } from '../components/animation/StaggerChildren'
import { offices } from '../data/offices'

const contactCategories = [
  { label: 'General Inquiries', email: 'info@gistec.com' },
  { label: 'Sales', email: 'sales@gistec.com' },
  { label: 'Technical Support', email: 'support@gistec.com' },
  { label: 'Training', email: 'training@gistec.com' },
  { label: 'Careers', email: 'careers@gistec.com' },
]

export default function ContactPage() {
  const [selectedOffice, setSelectedOffice] = useState(offices.find((o) => o.isHQ) ?? offices[0])

  const mapSrc = `https://www.google.com/maps?q=${selectedOffice.lat},${selectedOffice.lng}&z=17&output=embed`

  return (
    <>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you" />

      {/* Contact categories */}
      <Section className="bg-slate-50">
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {contactCategories.map((cat) => (
            <StaggerItem key={cat.label}>
              <a href={`mailto:${cat.email}`} className="block">
                <Card className="text-center h-full" accent="blue">
                  <Mail size={20} className="mx-auto text-navy-light" />
                  <h3 className="mt-2 text-sm font-semibold">{cat.label}</h3>
                  <p className="mt-1 text-xs text-navy-light">{cat.email}</p>
                </Card>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Form + Offices */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <FadeInOnScroll direction="left">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </FadeInOnScroll>

          {/* Offices */}
          <FadeInOnScroll direction="right">
            <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
            <div className="space-y-4">
              {offices.map((office) => (
                <div
                  key={office.id}
                  onClick={() => setSelectedOffice(office)}
                  className={`rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                    selectedOffice.id === office.id
                      ? 'bg-navy text-white ring-2 ring-navy'
                      : 'bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <h3 className="font-semibold text-sm">
                    gistec — {office.city}
                    {office.isHQ && (
                      <span
                        className={`ml-2 text-xs font-bold ${
                          selectedOffice.id === office.id ? 'text-gistec-green' : 'text-gistec-green'
                        }`}
                      >
                        (HQ)
                      </span>
                    )}
                  </h3>
                  <p
                    className={`mt-1 text-xs flex items-start gap-1.5 ${
                      selectedOffice.id === office.id ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    <MapPin size={12} className="shrink-0 mt-0.5" />
                    {office.address}
                  </p>
                  {office.phone && (
                    <p
                      className={`mt-1 text-xs flex items-center gap-1.5 ${
                        selectedOffice.id === office.id ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      <Phone size={12} />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {office.phone}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </Section>

      {/* Map Section */}
      <Section className="bg-slate-50">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold mb-2 text-center">Find Us on the Map</h2>
          <p className="text-center text-slate-500 mb-6 text-sm">
            Showing: <span className="font-semibold text-navy">gistec — {selectedOffice.city}</span>
            {selectedOffice.isHQ && <span className="text-gistec-green font-bold ml-1">(HQ)</span>}
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              key={selectedOffice.id}
              title={`gistec ${selectedOffice.city} office location`}
              src={mapSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeInOnScroll>
      </Section>
    </>
  )
}
