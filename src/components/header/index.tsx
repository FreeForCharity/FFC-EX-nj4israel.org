'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { FiMenu, FiChevronDown } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/ui/Logo'

interface MenuChild {
  label: string
  path: string
}
interface MenuItem {
  label: string
  path: string
  children?: MenuChild[]
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const menuItems: MenuItem[] = useMemo(
    () => [
      {
        label: 'About Us',
        path: '/about',
        children: [
          { label: 'Operating Principles', path: '/operating-principles' },
          { label: 'Our History', path: '/our-history' },
          { label: 'Our Leadership', path: '/leadership' },
          { label: 'Our Partners', path: '/our-partners' },
          { label: 'Media Coverage', path: '/media-coverage' },
          { label: 'Financial Reports', path: '/financial-reports' },
        ],
      },
      { label: 'Volunteer', path: '/volunteer' },
      { label: 'Contact', path: '/contact' },
    ],
    []
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => {
    setIsMobileMenuOpen(false)
    setOpenSubmenu(null)
  }

  return (
    <header
      id="header"
      className={`w-full fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        isScrolled
          ? 'h-[64px] bg-white shadow-md'
          : 'h-[84px] bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="w-full">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" onClick={closeMobile} aria-label="New Jersey Support Israel home">
              <Logo size={isScrolled ? 'sm' : 'md'} />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-1 aria-font"
              aria-label="Main navigation"
            >
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenSubmenu(item.label)}
                  onMouseLeave={() => item.children && setOpenSubmenu(null)}
                >
                  <Link
                    href={item.path}
                    className="px-4 py-2 text-[15px] font-medium text-[#0A1F44] hover:text-[#0038B8] transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0038B8] rounded"
                  >
                    {item.label}
                    {item.children && <FiChevronDown className="h-3 w-3" aria-hidden="true" />}
                  </Link>
                  {item.children && openSubmenu === item.label && (
                    <div className="absolute left-0 top-full w-[240px] bg-white border border-gray-100 shadow-xl rounded-md py-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.path}
                          className="block px-4 py-2 text-[14px] text-[#0A1F44] hover:bg-[#F3F6FF] hover:text-[#0038B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0038B8]"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/donate"
                className="ml-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0038B8] text-white text-[15px] font-semibold hover:bg-[#002a8c] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0038B8]"
              >
                Donate
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#0A1F44] hover:text-[#0038B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0038B8] rounded"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              {isMobileMenuOpen ? <RxCross2 className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`lg:hidden absolute left-0 right-0 w-full overflow-hidden z-40 ${
              isScrolled ? 'top-[63px]' : 'top-[83px]'
            }`}
          >
            <nav
              className="bg-white border-t-2 border-[#0038B8] shadow-xl max-h-[80vh] overflow-auto"
              aria-label="Mobile navigation"
            >
              <ul className="py-3">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.path}
                      onClick={closeMobile}
                      className="block px-6 py-3 text-[16px] font-medium text-[#0A1F44] hover:bg-[#F3F6FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0038B8]"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="bg-[#FAFBFE] border-l-2 border-[#0038B8] ml-6 mb-2">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <Link
                              href={c.path}
                              onClick={closeMobile}
                              className="block px-5 py-2 text-[14px] text-[#27315A] hover:text-[#0038B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0038B8]"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li className="px-6 pt-3 pb-4">
                  <Link
                    href="/donate"
                    onClick={closeMobile}
                    className="block w-full text-center px-5 py-3 rounded-full bg-[#0038B8] text-white text-[16px] font-semibold"
                  >
                    Donate
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
