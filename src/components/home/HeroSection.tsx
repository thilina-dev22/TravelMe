import { useEffect, useState } from 'react'
import { OptimizedImage } from '../OptimizedImage'
import logo from '../../assets/logo.png'
import colomboImg from '../../assets/locations/colombo.jpg'
import galleImg from '../../assets/locations/galle.jpg'
import mirissaImg from '../../assets/locations/mirissa.jpg'
import nuwaraeliImg from '../../assets/locations/nuwaraeliya.jpg'
import styles from '../../pages/Home.module.css'

type LocationCard = {
  name: string
  country: string
  image: string
  badge: string
}

const locations: LocationCard[] = [
  { name: 'Colombo', country: 'Sri Lanka', image: colomboImg, badge: 'City coast' },
  { name: 'Galle', country: 'Sri Lanka', image: galleImg, badge: 'Fort town' },
  { name: 'Mirissa', country: 'Sri Lanka', image: mirissaImg, badge: 'Beach vibes' },
  { name: 'Nuwara Eliya', country: 'Sri Lanka', image: nuwaraeliImg, badge: 'Hill country' },
]

export function HeroSection() {
  const heroBackgrounds = (() => {
    const modules = import.meta.glob('../../assets/bg/bg*.jpeg', {
      eager: true,
      import: 'default',
    }) as Record<string, string>

    // Sort by the number in bg1.jpeg, bg2.jpeg, etc.
    const sorted = Object.entries(modules).sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true }),
    )

    return sorted.map(([, value]) => value)
  })()

  const [bgIndex, setBgIndex] = useState(0)
  const [prevBgIndex, setPrevBgIndex] = useState<number | null>(null)
  const [bgVisible, setBgVisible] = useState(false)
  const [bgLoaded, setBgLoaded] = useState<Set<number>>(new Set([0]))

  const triggerFadeIn = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setBgVisible(true))
    })
  }

  // Preload next background image for smooth transitions
  useEffect(() => {
    if (heroBackgrounds.length <= 1) return
    
    const nextIndex = (bgIndex + 1) % heroBackgrounds.length
    if (!bgLoaded.has(nextIndex)) {
      const img = new Image()
      img.src = heroBackgrounds[nextIndex]
      img.onload = () => {
        setBgLoaded(prev => new Set([...prev, nextIndex]))
      }
    }
  }, [bgIndex, heroBackgrounds, bgLoaded])

  useEffect(() => {
    triggerFadeIn()
  }, [])

  useEffect(() => {
    if (prevBgIndex === null) return
    const timeoutId = window.setTimeout(() => setPrevBgIndex(null), 1800)
    return () => window.clearTimeout(timeoutId)
  }, [prevBgIndex])

  useEffect(() => {
    if (heroBackgrounds.length <= 1) return

    const intervalId = window.setInterval(() => {
      setBgIndex((i) => {
        setPrevBgIndex(i)
        setBgVisible(false)
        triggerFadeIn()
        return (i + 1) % heroBackgrounds.length
      })
    }, 8000)

    return () => window.clearInterval(intervalId)
  }, [heroBackgrounds.length])

  return (
    <section className="relative min-h-screen md:h-screen overflow-hidden">
      <div className="absolute inset-0 -z-20">
        {prevBgIndex !== null && (
          <img
            src={heroBackgrounds[prevBgIndex]}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover saturate-125 contrast-110 transition-opacity duration-1800 ease-in-out motion-reduce:transition-none ${
              bgVisible ? 'opacity-0' : 'opacity-75'
            }`}
            style={{ transform: 'scale(1.12)' }}
            loading="lazy"
          />
        )}
        <img
          src={heroBackgrounds[bgIndex]}
          alt=""
          aria-hidden="true"
          key={bgIndex}
          className={`absolute inset-0 h-full w-full object-cover saturate-125 contrast-110 transition duration-1800 ease-in-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none animate-kenburns ${
            bgVisible ? 'opacity-75 blur-none' : 'opacity-0 blur-sm'
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/45 via-slate-800/35 to-slate-900/55" />
      </div>

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

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:gap-10 md:grid-cols-2 md:py-16 lg:py-20">
        <div className="self-center">
          <p className={styles['heroBadge']}>
            Simple trips, planned well
            <span className={styles['badgeYear']}>
              2026
            </span>
          </p>

          <h1 className={styles['heroHeading']}>
            <span className={styles['whiteText']}>Your next getaway</span>{' '}
            <span className={styles['highlight']}>
              starts here
            </span>
            .
          </h1>

          {/* Agency Quote Box */}
          <div className={styles.heroQuoteBox}>
            <div className={styles.heroQuoteIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.012z"/>
              </svg>
            </div>
            <p className={styles.heroQuoteText}>
              Pick a destination, choose a package, and we'll handle <span className={styles.heroQuoteHighlight}>flights, hotels, and support</span>.
            </p>
          </div>

          {/* Logo */}
          <div className="mt-6 flex justify-center">
            <img src={logo} alt="TravelMeLanka" className="h-32 w-auto brightness-0 invert" />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className={styles['stat-card']}>
              <p className={styles['stat-number']}>48h</p>
              <p className={styles['stat-label']}>Quick planning</p>
            </div>
            <div className={styles['stat-card']}>
              <p className={styles['stat-number']}>24/7</p>
              <p className={styles['stat-label']}>Always available</p>
            </div>
            <div className={styles['stat-card']}>
              <p className={styles['stat-number']}>4.8</p>
              <p className={styles['stat-label']}>Guest rating</p>
            </div>
          </div>
        </div>

        <div className="md:self-center pb-6 md:pb-0">
          <div id="locations" className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm animate-fade-up sm:p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-900">Agency locations</p>
              <span className="rounded-full bg-linear-to-r from-indigo-600/10 to-sky-600/10 px-2 py-1 text-xs font-medium text-slate-700">
                Sri Lanka
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-600">
              We operate in the most loved coastal spots modern stays, smooth transport, and local support.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {locations.map((loc, idx) => (
                <article
                  key={loc.name}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <div className="aspect-16/10 overflow-hidden">
                    <OptimizedImage
                      src={loc.image}
                      alt={`${loc.name}, ${loc.country}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                      wrapperClassName="h-full w-full"
                      priority={idx < 2}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950/50 via-slate-950/15 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white drop-shadow">{loc.name}</p>
                      <span className="rounded-full bg-white/75 px-2 py-1 text-[11px] font-medium text-slate-800 shadow-sm">
                        {loc.badge}
                      </span>
                    </div>
                  </div>
                </article>
              ))}

              <div className="rounded-2xl border border-slate-200 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 p-5 text-white shadow-sm sm:col-span-2">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm font-semibold">Colombo → Kandy → Nuwara Eliya → Yala → Mirissa → Galle</p>
                    <p className="mt-1 text-sm text-slate-200">A simple 7–10 day Sri Lanka route.</p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex w-fit items-center justify-center rounded-xl bg-linear-to-br from-red-500 to-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:from-red-600 hover:to-red-700 hover:shadow-lg"
                  >
                    Get itinerary
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Airport pickup</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Beach stays</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Guided fort tour</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Tea country</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
