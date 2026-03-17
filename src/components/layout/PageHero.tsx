import { motion } from 'framer-motion'

interface Props {
  title: string
  subtitle?: string
}

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Topographic pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="20" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="50" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="50" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-28 md:py-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
        {/* Accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 h-1 bg-gistec-green rounded-full"
        />
      </div>
    </section>
  )
}
