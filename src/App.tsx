import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, lazy, Suspense } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const TrainingPage = lazy(() => import('./pages/TrainingPage'))
const SupportPage = lazy(() => import('./pages/SupportPage'))
const CustomersPage = lazy(() => import('./pages/CustomersPage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))
const PartnersPage = lazy(() => import('./pages/PartnersPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function ScrollRestoration() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </BrowserRouter>
  )
}
