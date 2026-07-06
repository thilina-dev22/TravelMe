import { useState } from 'react'
import { ScrollReveal } from '../ScrollReveal'
import { OptimizedImage } from '../OptimizedImage'
import colomboImg from '../../assets/locations/colombo.jpg'
import ellaImg from '../../assets/locations/ella.jpg'
import galleImg from '../../assets/locations/galle.jpg'
import kandyImg from '../../assets/locations/kandy.jpg'
import mirissaImg from '../../assets/locations/mirissa.jpg'
import nuwaraeliImg from '../../assets/locations/nuwaraeliya.jpg'
import polonnaruwaImg from '../../assets/locations/polonnaruwa.jpg'
import trincomaleeImg from '../../assets/locations/trincomalee.jpg'
import styles from '../../pages/Home.module.css'

type Destination = {
  name: string
  country: string
  description: string
  priceFrom: string
  image?: string
  fullDescription?: string
  bestTime?: string
  activities?: string[]
}

const featuredDestinations: Destination[] = [
  {
    name: 'Colombo',
    country: 'Sri Lanka',
    description: 'Dynamic oceanfront capital blending modern culture with colonial heritage.',
    priceFrom: '$199',
    image: colomboImg,
    fullDescription: 'Colombo is the vibrant capital city of Sri Lanka, situated on the west coast. It features historic buildings from British, Dutch, and Portuguese eras alongside sleek skyscrapers, bustling street markets, and the Galle Face Green oceanfront promenade.',
    bestTime: 'December - March',
    activities: ['City sightseeing', 'Local street food tours', 'Heritage walks', 'Shopping'],
  },
  {
    name: 'Kandy',
    country: 'Sri Lanka',
    description: 'Sacred lakeside city rich in culture and royal history.',
    priceFrom: '$249',
    image: kandyImg,
    fullDescription: 'Kandy is Sri Lanka\'s cultural capital and the last stronghold of the ancient kings. It houses the sacred Temple of the Tooth Relic, set alongside a scenic central lake. The city is surrounded by lush tea hills and biodiverse rainforests.',
    bestTime: 'December - April',
    activities: ['Temple visits', 'Traditional dance shows', 'Botanical gardens walk', 'Lake strolls'],
  },
  {
    name: 'Galle',
    country: 'Sri Lanka',
    description: 'Dutch colonial fort town brimming with boutique shops and ocean views.',
    priceFrom: '$299',
    image: galleImg,
    fullDescription: 'Galle is a historic coastal city famous for its Dutch Fort, a UNESCO World Heritage Site. Walking through its narrow streets reveals colonial-era houses, old churches, trendy boutiques, and beautiful views of the Indian Ocean from the fort walls.',
    bestTime: 'December - April',
    activities: ['Fort walking tours', 'Boutique shopping', 'Sunset watching', 'Lighthouse visit'],
  },
  {
    name: 'Ella',
    country: 'Sri Lanka',
    description: 'Scenic mountain village famous for hiking, waterfalls, and tea fields.',
    priceFrom: '$229',
    image: ellaImg,
    fullDescription: 'Ella is a popular hill country town loved for its misty mountain views, green tea plantations, and cool climate. It is home to the famous Nine Arch Bridge, Ravana Ella waterfall, and offers incredible hiking routes up Ella Rock and Little Adam\'s Peak.',
    bestTime: 'January - May',
    activities: ['Hiking & trekking', 'Train ride over Nine Arch Bridge', 'Tea plantation tours', 'Waterfalls'],
  },
  {
    name: 'Mirissa',
    country: 'Sri Lanka',
    description: 'Tropical beach destination famous for whale watching and surfing.',
    priceFrom: '$259',
    image: mirissaImg,
    fullDescription: 'Mirissa is a laid-back beach town on the south coast, popular for whale watching, surfing, and beachside dining. Its sandy bay is lined with coconut trees, creating a picture-perfect tropical setting.',
    bestTime: 'November - April',
    activities: ['Whale watching tours', 'Surfing', 'Coconut Tree Hill photos', 'Snorkeling with turtles'],
  },
  {
    name: 'Nuwara Eliya',
    country: 'Sri Lanka',
    description: 'Mist-clad highlands known as "Little England" for its colonial architecture.',
    priceFrom: '$249',
    image: nuwaraeliImg,
    fullDescription: 'Nuwara Eliya is a highland city known for its cool climate, colonial-era bungalows, and sprawling tea estates. Often called "Little England," it offers a calm retreat in the misty mountains of central Sri Lanka.',
    bestTime: 'February - May',
    activities: ['Tea factory tours', 'Boating on Lake Gregory', 'Golfing', 'Highland hikes'],
  },
  {
    name: 'Trincomalee',
    country: 'Sri Lanka',
    description: 'Serene eastern bay beaches with white sands and snorkeling reefs.',
    priceFrom: '$289',
    image: trincomaleeImg,
    fullDescription: 'Trincomalee boasts some of Sri Lanka\'s best beaches and exceptional diving opportunities. With warm waters year-round and vibrant marine life, it\'s a paradise for diving and water sports enthusiasts.',
    bestTime: 'May - September',
    activities: ['Diving & snorkeling', 'Beach activities', 'Whale watching', 'Island hopping'],
  },
  {
    name: 'Polonnaruwa',
    country: 'Sri Lanka',
    description: 'Ancient kingdom ruins showcasing medieval Sri Lankan greatness.',
    priceFrom: '$279',
    image: polonnaruwaImg,
    fullDescription: 'Polonnaruwa served as Sri Lanka\'s medieval capital and features remarkable stone carvings, ancient temples, and palace ruins. A UNESCO World Heritage Site that tells stories of ancient Sri Lankan architecture and Buddhism.',
    bestTime: 'December - March',
    activities: ['Archaeological tours', 'Photography', 'Temple exploration', 'History lessons'],
  },
]

export function DestinationsSection() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="destinations" className={`${styles.featuredDestinationsSection} relative w-full py-20 sm:py-32 border-b border-slate-100`}>
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Featured destinations</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Explore our curated Sri Lankan destinations. Click any card to learn more.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Ask for custom plan
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featuredDestinations.map((d, idx) => (
                <article
                  key={d.name}
                  onClick={() => {
                    setSelectedDestination(d)
                    setIsModalOpen(true)
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md cursor-pointer"
                >
                  {d.image && (
                    <div className="aspect-video overflow-hidden mb-4">
                      <OptimizedImage
                        src={d.image}
                        alt={d.name}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        priority={idx < 4}
                      />
                    </div>
                  )}
                  <div className="px-5 pb-5 pt-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900">{d.name}</p>
                      <span className="rounded-full bg-linear-to-r from-slate-100 to-sky-50 px-2 py-1 text-xs text-slate-700">
                        {d.country}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">{d.description}</p>

                    <div className="mt-5 flex items-center justify-end">
                      <button
                        className="inline-flex items-center gap-1 text-sm font-medium text-indigo-700 group-hover:underline"
                      >
                        Learn more
                        <span aria-hidden>→</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedDestination && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false)
          }}
        >
          <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto">
            {selectedDestination.image && (
              <div className="relative h-72 overflow-hidden bg-slate-200">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="h-full w-full object-cover"
                />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 rounded-full bg-white p-2 shadow-lg hover:bg-slate-100 transition z-10"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <div className="mb-4">
                  <h2 className="text-4xl font-bold text-slate-900">{selectedDestination.name}</h2>
                  <p className="text-lg text-slate-500 mt-2">{selectedDestination.country}</p>
                </div>

                {selectedDestination.fullDescription && (
                  <p className="text-slate-700 leading-relaxed">{selectedDestination.fullDescription}</p>
                )}
              </div>

              {selectedDestination.bestTime && (
                <div className="mb-6 p-4 bg-linear-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-200">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h12a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-indigo-900">Best time to visit</p>
                      <p className="text-sm text-indigo-700 mt-1">{selectedDestination.bestTime}</p>
                    </div>
                  </div>
                </div>
              )}

              {selectedDestination.activities && selectedDestination.activities.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Popular Activities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedDestination.activities.map((activity) => (
                      <div
                        key={activity}
                        className="flex items-center gap-3 p-3 bg-linear-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:border-slate-300 transition"
                      >
                        <svg className="w-5 h-5 text-indigo-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium text-slate-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4 border-t border-slate-200">
                <a
                  href="#contact"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 inline-flex items-center justify-center rounded-xl bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-slate-900 hover:via-indigo-900 hover:to-slate-800"
                >
                  Get Inquiry
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
