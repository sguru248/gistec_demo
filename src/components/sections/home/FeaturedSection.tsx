import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeInOnScroll from '../../animation/FadeInOnScroll'
import Section from '../../layout/Section'

const features = [
  'Enterprise-wide geospatial data solutions',
  'Custom GIS applications for every industry',
  'Cloud-based and on-premises deployment',
]

export default function FeaturedSection() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image placeholder */}
        <FadeInOnScroll direction="left">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy via-navy-light to-teal overflow-hidden relative">
            {/* Map visualization pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <circle cx="30%" cy="40%" r="80" fill="none" stroke="rgba(16,185,129,0.5)" strokeWidth="2" />
              <circle cx="60%" cy="30%" r="50" fill="none" stroke="rgba(6,182,212,0.5)" strokeWidth="2" />
              <circle cx="50%" cy="60%" r="100" fill="none" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" />
              <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="70%" y1="25%" x2="40%" y2="65%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold opacity-30">GIS</div>
                <div className="text-sm opacity-50 mt-2">Geospatial Intelligence</div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Right: Content */}
        <FadeInOnScroll direction="right">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Comprehensive Geospatial Solutions
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            gistec leverages GIS information within dynamic business processes and can spatially
            enable existing or planned business applications including ERP, CRM, Asset Management,
            Maintenance Management, and HR Systems.
          </p>
          <ul className="mt-6 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-emerald" />
                </span>
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 bg-navy-light text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy transition-all duration-300 hover:gap-3"
          >
            View All Products <ArrowRight size={18} />
          </Link>
        </FadeInOnScroll>
      </div>
    </Section>
  )
}
