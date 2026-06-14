'use client'

import { useState, useEffect, useCallback } from 'react'

const navLinks = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About Me' },
  { href: 'services', label: 'Services' },
  { href: 'projects', label: 'Projects' },
  { href: 'testimonials', label: 'Testimonials' },
  { href: 'faq', label: 'FAQ' },
  { href: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('home')

  const scrollTo = useCallback((id: string) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href)

    const handleScroll = () => {
      const threshold = window.scrollY + window.innerHeight * 0.35
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= threshold) current = id
      }
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 h-16 bg-white border-b border-[#E9EBED]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="text-[#0A1317] font-semibold text-sm tracking-tight"
          >
            Gnanasri
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`text-sm font-medium transition-colors duration-150 ${
                  active === href ? 'text-[#0064E0]' : 'text-[#5B6770] hover:text-[#0A1317]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-5 h-[2px] bg-[#0A1317] origin-center transition-all duration-200 ${
                isOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[#0A1317] transition-opacity duration-200 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[#0A1317] origin-center transition-all duration-200 ${
                isOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-16 z-40 bg-white border-b border-[#E9EBED] md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-2 flex flex-col">
          {navLinks.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`text-left py-3.5 text-sm font-medium border-b border-[#E9EBED] last:border-0 transition-colors ${
                active === href ? 'text-[#0064E0]' : 'text-[#1C2B33]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
