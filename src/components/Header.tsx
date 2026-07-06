import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TravelMeLanka" className="h-16 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a className="hover:text-slate-900" href="/#destinations">
            Destinations
          </a>
          <a className="hover:text-slate-900" href="/#about">
            About
          </a>
          <a className="hover:text-slate-900" href="/reviews">
            Reviews
          </a>
          <a className="hover:text-slate-900" href="/#contact">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a
            href="/#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:from-slate-900 hover:via-indigo-900 hover:to-slate-800"
          >
            BOOK A RIDE
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
          <nav className="flex flex-col gap-4 px-4 py-4 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="/#destinations" onClick={() => setMobileMenuOpen(false)}>
              Destinations
            </a>
            <a className="hover:text-slate-900" href="/#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a className="hover:text-slate-900" href="/reviews" onClick={() => setMobileMenuOpen(false)}>
              Reviews
            </a>
            <a className="hover:text-slate-900" href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:from-slate-900 hover:via-indigo-900 hover:to-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              BOOK A RIDE
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
