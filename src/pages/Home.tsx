import { SEO } from '../components/SEO'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeroSection } from '../components/home/HeroSection'
import { DestinationsSection } from '../components/home/DestinationsSection'
import { AboutSection } from '../components/home/AboutSection'
import { ReviewsSection } from '../components/home/ReviewsSection'
import { ContactSection } from '../components/home/ContactSection'

export function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "TravelMeLanka",
    "url": "https://travelmelanka.com",
    "logo": "https://travelmelanka.com/assets/logo.png",
    "image": "https://travelmelanka.com/assets/travel.png",
    "description": "Tailor-made Sri Lankan travel planning & private driver-guided tours.",
    "telephone": "+94714843570",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "TravelMe.lk, Sri Lanka",
      "addressLocality": "Colombo",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.983191,
      "longitude": 79.929570
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94714843570",
      "contactType": "customer support",
      "areaServed": "LK",
      "availableLanguage": ["English", "Sinhala"]
    },
    "sameAs": [
      "https://www.facebook.com/travelmelanka",
      "https://www.instagram.com/travelmelanka"
    ]
  }

  return (
    <div className="min-h-dvh">
      <SEO
        title="Custom Sri Lanka Tours & Vacation Packages"
        description="Plan your dream vacation to Sri Lanka with TravelMeLanka. Custom travel plans, driver-guided tours, and local experiences tailored to your interests."
        keywords="Sri Lanka travel, Sri Lanka tour, custom travel Sri Lanka, TravelMeLanka, vacation packages"
        ogImage="/assets/travel.png"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <Header />

      <main>
        <HeroSection />
        <DestinationsSection />
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
