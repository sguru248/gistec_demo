import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <section className="min-h-[80vh] bg-navy flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="not-found-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#not-found-grid)" />
        </svg>
      </div>

      <div className="relative text-center">
        <MapPin size={64} className="mx-auto text-emerald mb-6" />
        <h1 className="text-8xl md:text-9xl font-bold text-white/10">404</h1>
        <h2 className="text-3xl font-bold text-white -mt-8">Location Not Found</h2>
        <p className="mt-4 text-slate-400 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to a new location.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-xl"
        >
          Back to Home <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
