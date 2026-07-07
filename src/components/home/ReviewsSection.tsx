import { useState } from 'react'
import { ScrollReveal } from '../ScrollReveal'
import img1 from '../../assets/bg/1.jpg'
import img2 from '../../assets/bg/2.jpg'
import img3 from '../../assets/bg/3.jpg'
import img4 from '../../assets/bg/4.jpg'
import img5 from '../../assets/bg/5.jpg'

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

export function ReviewsSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const displayedReviews = isExpanded ? reviews : reviews.slice(0, 3)

  return (
    <section id="reviews" className="border-t border-slate-100 bg-slate-50/50 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
              Customer Reviews
              <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[11px] text-white">TravelMeLanka</span>
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What our travelers say
            </h2>
            <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied travelers who have experienced the best of Sri Lanka with our expert guides and professional drivers.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {displayedReviews.map((review) => (
              <article
                key={`${review.name}-${review.image}`}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
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
          </div>
        </ScrollReveal>

        {reviews.length > 3 && (
          <ScrollReveal>
            <div className="mt-10 text-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                {isExpanded ? 'Show Less' : 'Show More Reviews'}
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal>
          <div className="mt-12 text-center">
            <a
              href="https://share.google/Hici2yTZee0BNCcAw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow transition-all duration-300"
            >
              <svg className="h-5 w-5 text-[#00AF87]" fill="currentColor" viewBox="0 0 24 24">
                <title>Tripadvisor</title>
                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/>
              </svg>
              Read more reviews on Tripadvisor
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
