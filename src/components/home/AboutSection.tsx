import { OptimizedImage } from '../OptimizedImage'
import { ScrollReveal } from '../ScrollReveal'
import uncleImg from '../../assets/uncle.png'
import corollaImg from '../../assets/corolla.png'
import styles from '../../pages/Home.module.css'

export function AboutSection() {
  return (
    <section id="about" className={`${styles.featuredDestinationsSection} relative`}>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:py-32">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900">About Me</h2>
              <p className="mt-2 text-base font-medium text-slate-700">Your Personal Tour Guide & Driver</p>
              <p className="mt-4 text-base text-slate-800 leading-relaxed">
                <strong className="text-slate-900">Najith Darshena</strong> is a professional tour guide with over 12 years of experience in the tourism industry. With strong local knowledge and a passion for hospitality, he specializes in creating safe, comfortable, and unforgettable travel experiences. From personal, honeymoon, cultural tours to nature and adventure trips, every journey is carefully planned to suit each traveler's needs.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">Professional Driver</span>
                <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">12+ Years Experience</span>
                <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">Local Expert</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/94714843570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-br from-green-500 to-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-green-600 hover:to-green-700 hover:shadow-xl hover:scale-105"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Message on WhatsApp
                </a>
                <a
                  href="mailto:info@travelmelanka.com"
                  className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-br from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:scale-105"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Email Me
                </a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div>
              <OptimizedImage 
                src={uncleImg} 
                alt="Sri Lankan Travel Guide" 
                className="rounded-3xl w-full h-auto shadow-lg" 
                wrapperClassName="rounded-3xl"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Car Highlight Section */}
        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <ScrollReveal>
              <div className="order-2 md:order-1">
                <OptimizedImage 
                  src={corollaImg} 
                  alt="Toyota Corolla Fielder" 
                  className="rounded-3xl w-full h-auto shadow-2xl ring-4 ring-indigo-100" 
                  wrapperClassName="rounded-3xl"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 px-4 py-1.5 text-xs font-semibold text-white mb-4">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Your Ride
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Toyota Corolla Fielder</h3>
                <p className="mt-2 text-base font-semibold text-indigo-700">Comfort Meets Reliability</p>
                <p className="mt-4 text-base text-slate-800 font-medium leading-relaxed">
                  A comfortable and reliable vehicle, ideal for tours and long-distance travel. Fully air-conditioned with spacious seating, smooth handling, and excellent fuel efficiency, ensuring a safe and pleasant journey for every guest.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 rounded-xl bg-linear-to-br from-slate-50 to-slate-100 p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                      <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Climate</p>
                      <p className="text-base font-semibold text-slate-800">Air Conditioned</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-linear-to-br from-slate-50 to-slate-100 p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Efficiency</p>
                      <p className="text-base font-semibold text-slate-800">Fuel Efficient</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-linear-to-br from-slate-50 to-slate-100 p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Seating</p>
                      <p className="text-base font-semibold text-slate-800">Spacious</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-linear-to-br from-slate-50 to-slate-100 p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Safety</p>
                      <p className="text-base font-semibold text-slate-800">Reliable</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
