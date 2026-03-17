import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import Section from '../components/layout/Section'
import Card from '../components/ui/Card'
import IconBox from '../components/ui/IconBox'
import FadeInOnScroll from '../components/animation/FadeInOnScroll'
import StaggerChildren, { StaggerItem } from '../components/animation/StaggerChildren'
import { products, productsIntro, productsNote, additionalProducts } from '../data/products'

export default function ProductsPage() {
  return (
    <>
      <PageHero title="Products & Solutions" subtitle={productsIntro} />

      <Section>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <Card className="h-full group">
                <IconBox icon={product.icon} />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{product.title}</h3>
                <p className="mt-2 text-slate-500 leading-relaxed">{product.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy-light group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Additional products */}
      <Section className="bg-slate-50">
        <FadeInOnScroll>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Additional Solutions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalProducts.map((product) => (
              <div key={product} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <ArrowRight size={18} className="text-navy-light shrink-0 mt-0.5" />
                <span className="text-slate-700">{product}</span>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </Section>

      {/* Note section */}
      <Section>
        <FadeInOnScroll>
          <div className="bg-navy rounded-2xl p-8 md:p-12 text-center">
            <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">{productsNote}</p>
          </div>
        </FadeInOnScroll>
      </Section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-navy-light to-teal py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Need Help Choosing?</h2>
          <p className="mt-4 text-white/80 text-lg">
            Our team of experts can help you find the right solution for your organization.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-xl"
          >
            Contact Sales <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
