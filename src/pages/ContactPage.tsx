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
                <div key={office.id} className="bg-slate-50 rounded-xl p-4">
                  <h3 className="font-semibold text-sm">
                    gistec — {office.city}
                    {office.isHQ && <span className="ml-2 text-xs text-gistec-green font-bold">(HQ)</span>}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 flex items-start gap-1.5">
                    <MapPin size={12} className="shrink-0 mt-0.5" />
                    {office.address}
                  </p>
                  {office.phone && (
                    <p className="mt-1 text-xs text-slate-500 flex items-center gap-1.5">
                      <Phone size={12} />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-navy-light">
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
    </>
  )
}
