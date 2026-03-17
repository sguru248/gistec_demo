import { MapPin, Phone, Mail, Facebook, Twitter } from 'lucide-react'
import FadeInOnScroll from '../../animation/FadeInOnScroll'
import ContactForm from '../../ui/ContactForm'

export default function QuickContact() {
  return (
    <section className="relative bg-navy py-20 px-4 overflow-hidden">
      {/* Topographic pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="40" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-topo)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <FadeInOnScroll direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Have a question about our geospatial solutions? We'd love to hear from you.
              Contact our team for expert guidance.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin size={20} className="text-emerald shrink-0 mt-0.5" />
                <span>1608 Al Batha Tower, 283 Corniche Street, Sharjah, UAE</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={20} className="text-emerald shrink-0" />
                <a href="tel:+97165750055" className="hover:text-white transition-colors">+971-6-575 0055</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={20} className="text-emerald shrink-0" />
                <a href="mailto:info@gistec.com" className="hover:text-white transition-colors">info@gistec.com</a>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://www.facebook.com/pages/Gistec/187257984730923"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com/GISTEC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </FadeInOnScroll>

          {/* Right: Form */}
          <FadeInOnScroll direction="right">
            <ContactForm dark />
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}
