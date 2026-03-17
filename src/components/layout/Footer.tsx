import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Twitter, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/images/logotagline.png"
                alt="gistec - Esri Official Distributor"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Esri Official Distributor in the UAE since 1976. Specializing in intelligent,
              cloud-based, and enterprise-wide geospatial data solutions.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/pages/Gistec/187257984730923"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-navy-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://twitter.com/GISTEC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-navy-light transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/training" className="hover:text-white transition-colors">Training</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Technical Support</Link></li>
              <li>
                <a href="https://support.gissupport.ae" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  My gistec <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/customers" className="hover:text-white transition-colors">Customers</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Headquarters</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-gistec-green" />
                <span>1608 Al Batha Tower, 283 Corniche Street, P.O. Box 5026, Sharjah, UAE</span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="shrink-0 text-gistec-green" />
                <a href="tel:+97165750055" className="hover:text-white transition-colors">+971-6-575 0055</a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="shrink-0 text-gistec-green" />
                <a href="mailto:info@gistec.com" className="hover:text-white transition-colors">info@gistec.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; 1976-{new Date().getFullYear()} gistec. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Powered by{' '}
            <a href="https://www.esri.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-medium">
              Esri
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
