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
            {reviews.map((review) => (
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
      </div>
    </section>
  )
}
