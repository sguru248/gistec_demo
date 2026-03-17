import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  {
    id: 1,
    title: 'Esri Official Distributor in the UAE Since 1976',
    subtitle: 'Empowering organizations with the science of where',
    cta: 'Explore Solutions',
    link: '/products',
    gradient: 'from-navy via-navy/90 to-navy/60',
    accent: 'bg-gistec-green',
  },
  {
    id: 2,
    title: 'Enterprise Geospatial Solutions',
    subtitle: 'Intelligent, cloud-based solutions for every industry',
    cta: 'Our Services',
    link: '/services',
    gradient: 'from-slate-900 via-slate-900/90 to-slate-900/60',
    accent: 'bg-navy-light',
  },
  {
    id: 3,
    title: 'Esri UAE User Conference',
    subtitle: 'Feb 25-26, 2025 | Movenpick Grand Al Bustan, Dubai',
    cta: 'Learn More',
    link: '/events',
    gradient: 'from-teal/90 via-navy/80 to-navy/60',
    accent: 'bg-amber',
  },
]

export default function HeroSlider() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet-active]:bg-white [&_.swiper-pagination]:bottom-8"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full bg-navy overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0">
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
                {/* Topographic SVG pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`hero-topo-${slide.id}`} x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                      <circle cx="150" cy="150" r="120" fill="none" stroke="white" strokeWidth="0.5" />
                      <circle cx="150" cy="150" r="90" fill="none" stroke="white" strokeWidth="0.5" />
                      <circle cx="150" cy="150" r="60" fill="none" stroke="white" strokeWidth="0.5" />
                      <circle cx="150" cy="150" r="30" fill="none" stroke="white" strokeWidth="0.5" />
                      <circle cx="0" cy="0" r="80" fill="none" stroke="white" strokeWidth="0.5" />
                      <circle cx="300" cy="300" r="80" fill="none" stroke="white" strokeWidth="0.5" />
                      <circle cx="300" cy="0" r="60" fill="none" stroke="white" strokeWidth="0.5" />
                      <circle cx="0" cy="300" r="60" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#hero-topo-${slide.id})`} />
                </svg>
                {/* Gradient overlay from bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
                <div className="max-w-3xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className={`w-16 h-1 ${slide.accent} rounded-full mb-8`} />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <Link
                      to={slide.link}
                      className="mt-8 inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all duration-300 hover:gap-3 shadow-xl"
                    >
                      {slide.cta} <ArrowRight size={20} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
