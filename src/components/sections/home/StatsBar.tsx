import { Clock, MapPin, Handshake, Briefcase } from 'lucide-react'
import AnimatedCounter from '../../ui/AnimatedCounter'

const stats = [
  { icon: Clock, value: 50, suffix: '+', label: 'Years of Excellence' },
  { icon: MapPin, value: 5, suffix: '', label: 'Global Offices' },
  { icon: Handshake, value: 25, suffix: '+', label: 'Technology Partners' },
  { icon: Briefcase, value: 100, suffix: '+', label: 'Enterprise Projects' },
]

export default function StatsBar() {
  return (
    <section className="bg-navy py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-light/20 via-transparent to-teal/10" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 text-emerald" size={32} />
              <div className="text-3xl md:text-4xl font-bold text-white">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-sm text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
