import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { mainNavItems, topBarLinks } from '../../data/navigation'
import { cn } from '../../lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+97165750055" className="flex items-center gap-1.5 hover:text-emerald transition-colors">
              <Phone size={14} /> +971-6-575 0055
            </a>
            <a href="mailto:info@gistec.com" className="flex items-center gap-1.5 hover:text-emerald transition-colors">
              <Mail size={14} /> info@gistec.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            {topBarLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-emerald transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://support.gissupport.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald transition-colors"
            >
              My gistec
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <img
                src="/images/logotagline.png"
                alt="gistec - Esri Official Distributor"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-lg transition-colors relative group',
                    location.pathname === item.path
                      ? 'text-navy-light'
                      : 'text-slate-600 hover:text-navy-light hover:bg-slate-50'
                  )}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-navy-light rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-navy"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
            >
              <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      location.pathname === item.path
                        ? 'bg-blue-50 text-navy-light'
                        : 'text-slate-600 hover:bg-slate-50'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <hr className="my-2 border-slate-100" />
                {topBarLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
