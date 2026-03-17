import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Building2 } from 'lucide-react'
import FadeInOnScroll from '../../animation/FadeInOnScroll'
import { customers } from '../../../data/customers'
import 'swiper/css'

export default function CustomerLogos() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-navy/5 text-navy-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Building2 size={16} />
              Our Clients
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Trusted By Leading Organizations
            </h2>
            <p className="mt-3 text-slate-500 max-w-lg mx-auto">
              Delivering enterprise GIS solutions to top government and private organizations across the UAE
            </p>
          </div>
        </FadeInOnScroll>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={24}
          loop
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {[...customers, ...customers].map((customer, i) => (
            <SwiperSlide key={`${customer.id}-${i}`}>
              <div className="group cursor-pointer py-2">
                <div
                  className="relative bg-white rounded-2xl border border-slate-100 p-6 h-32 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Hover accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: customer.brandColor }}
                  />
                  {/* Subtle background glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl"
                    style={{ backgroundColor: customer.brandColor }}
                  />
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="max-w-[85%] max-h-[70px] object-contain transition-all duration-500 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Decorative dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {customers.map((c) => (
            <div
              key={c.id}
              className="w-2 h-2 rounded-full opacity-30"
              style={{ backgroundColor: c.brandColor }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
