import { SEO } from '../components/SEO'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import img1 from '../assets/bg/1.jpg'
import img2 from '../assets/bg/2.jpg'
import img3 from '../assets/bg/3.jpg'
import img4 from '../assets/bg/4.jpg'
import img5 from '../assets/bg/5.jpg'

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
  return (
    <div className="min-h-screen">
      <SEO
        title="Customer Stories & Reviews"
        description="Read real testimonials and customer reviews from travelers who planned their Sri Lankan journeys with TravelMeLanka."
        keywords="TravelMe reviews, Sri Lanka travel reviews, customer testimonials"
      />
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

        <Header />

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

        <Footer />
      </div>
    </div>
  )
}
