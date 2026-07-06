import { useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/bg/1.jpg'
import img2 from '../assets/bg/2.jpg'
import img3 from '../assets/bg/3.jpg'
import img4 from '../assets/bg/4.jpg'
import img5 from '../assets/bg/5.jpg'
import logo from '../assets/logo.png'

type Review = {
  name: string
  location: string
  rating: number
  image: string
  text: string
}

const reviews: Review[] = [
  {
    name: 'Disah Vetker',
    location: 'Netherland',
    rating: 5,
    image: img1,
    text: 'Absolutely incredible experience! Our travel guide was incredibly knowledgeable, friendly, and made us feel so welcome. The driver was professional, safe, and very courteous. Would definitely book with TravelMeLanka again!',
  },
  {
    name: 'Marcel',
    location: 'Netherland',
    rating: 5,
    image: img2,
    text: 'Amazing service from start to finish. The travel guide was passionate about sharing the local culture and had great recommendations. The driving was smooth and comfortable. Highly recommend TravelMeLanka!',
  },
  {
    name: 'Marcel',
    location: 'Netherland',
    rating: 5,
    image: img3,
    text: 'Best travel experience ever! The guide was so friendly and accommodating, answered all our questions with enthusiasm. Safe driving and comfortable transportation throughout. Will definitely return!',
  },
  {
    name: 'Van Den',
    location: 'Netherland',
    rating: 5,
    image: img4,
    text: 'Outstanding experience from beginning to end! Our travel guide was extremely knowledgeable about every destination and so personable. The driver was professional and courteous. Would highly recommend TravelMeLanka to anyone!',
  },
  {
    name: 'Liz Van',
    location: 'Netherland',
    rating: 5,
    image: img5,
    text: 'Simply amazing! The guide went above and beyond to make our trip special. Great driving, comfortable vehicles, and genuine hospitality. Best decision we made for our Sri Lanka vacation!',
  },
]

export function Reviews() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-48 -top-48 size-136 rounded-full bg-slate-700/30 blur-3xl animate-float" />
          <div
            className="absolute -right-48 top-10 size-152 rounded-full bg-indigo-800/25 blur-3xl animate-float"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute left-1/3 top-1/2 size-112 -translate-y-1/2 rounded-full bg-slate-700/20 blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
        </div>

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

        <main className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <section className="text-center mb-16 animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
              Customer Reviews
              <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[11px] text-white">TravelMeLanka</span>
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              What our travelers say
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have experienced the best of Sri Lanka with our expert guides and professional drivers.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md animate-fade-up"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-semibold text-slate-900">{review.name}</p>
                      <p className="text-sm text-slate-600">{review.location}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    "{review.text}"
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-200 flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      ✓ Verified traveler
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-20 rounded-3xl border border-slate-200 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 p-8 text-white sm:p-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready for your next adventure?</h2>
            <p className="mb-8 text-slate-200 max-w-2xl mx-auto">
              Join our community of happy travelers. Book your Sri Lankan journey today and experience world-class service.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-50"
            >
              Book Now
            </a>
          </section>
        </main>

        <footer className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 mt-20">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-8">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Link to="/" className="inline-block">
                  <img src={logo} alt="TravelMeLanka" className="h-16 w-auto brightness-0 invert" />
                </Link>
                <p className="mt-6 text-base text-slate-300 leading-relaxed max-w-md">
                  Your trusted Sri Lankan travel partner. We create unforgettable experiences with local expertise, personalized service, and genuine hospitality.
                </p>
                
                <div className="mt-8 flex gap-3">
                  <a
                    href="https://wa.me/94XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-green-500 hover:border-green-500 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333H18V2.169c-.585-.089-1.308-.169-2.227-.169-2.995 0-5.27 1.991-5.27 5.831V8z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-linear-to-br hover:from-pink-500 hover:via-red-500 hover:to-orange-400 hover:border-pink-500 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:info@travelmelanka.com"
                    className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-red-500 hover:border-red-500 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Explore</h3>
                <ul className="mt-6 space-y-4">
                  <li><a href="/#destinations" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Destinations</a></li>
                  <li><a href="/#about" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>About Us</a></li>
                  <li><a href="/reviews" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Reviews</a></li>
                  <li><a href="/#contact" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Contact</a></li>
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Destinations</h3>
                <ul className="mt-6 space-y-4">
                  <li><a href="/#destinations" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Colombo</a></li>
                  <li><a href="/#destinations" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Kandy</a></li>
                  <li><a href="/#destinations" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Galle</a></li>
                  <li><a href="/#destinations" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Ella</a></li>
                </ul>
              </div>

              <div className="lg:col-span-3">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Get in Touch</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3 text-slate-300">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="mt-1 text-sm">Sri Lanka</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="mt-1 text-sm">info@travelmelanka.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center">
                <p className="text-sm text-slate-400">© {new Date().getFullYear()} TravelMeLanka. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
