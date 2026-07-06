import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { OptimizedImage } from '../components/OptimizedImage'
import { SEO } from '../components/SEO'

import logo from '../assets/logo.png'
import airplaneImg from '../assets/airplane.png'
import uncleImg from '../assets/uncle.png'
import corollaImg from '../assets/corolla.png'

import colomboImg from '../assets/locations/colombo.jpg'
import ellaImg from '../assets/locations/ella.jpg'
import galleImg from '../assets/locations/galle.jpg'
import kandyImg from '../assets/locations/kandy.jpg'
import mirissaImg from '../assets/locations/mirissa.jpg'
import nuwaraeliImg from '../assets/locations/nuwaraeliya.jpg'
import polonnaruwaImg from '../assets/locations/polonnaruwa.jpg'
import trincomaleeImg from '../assets/locations/trincomalee.jpg'

import styles from './Home.module.css'

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

type LocationCard = {
  name: string
  country: string
  image: string
  badge: string
}

const countries = [
  { name: 'Afghanistan', flag: '🇦🇫' }, { name: 'Albania', flag: '🇦🇱' }, { name: 'Algeria', flag: '🇩🇿' }, { name: 'Andorra', flag: '🇦🇩' }, { name: 'Angola', flag: '🇦🇴' },
  { name: 'Argentina', flag: '🇦🇷' }, { name: 'Armenia', flag: '🇦🇲' }, { name: 'Australia', flag: '🇦🇺' }, { name: 'Austria', flag: '🇦🇹' }, { name: 'Azerbaijan', flag: '🇦🇿' },
  { name: 'Bahamas', flag: '🇧🇸' }, { name: 'Bahrain', flag: '🇧🇭' }, { name: 'Bangladesh', flag: '🇧🇩' }, { name: 'Barbados', flag: '🇧🇧' }, { name: 'Belarus', flag: '🇧🇾' },
  { name: 'Belgium', flag: '🇧🇪' }, { name: 'Belize', flag: '🇧🇿' }, { name: 'Benin', flag: '🇧🇯' }, { name: 'Bhutan', flag: '🇧🇹' }, { name: 'Bolivia', flag: '🇧🇴' },
  { name: 'Bosnia and Herzegovina', flag: '🇧🇦' }, { name: 'Botswana', flag: '🇧🇼' }, { name: 'Brazil', flag: '🇧🇷' }, { name: 'Brunei', flag: '🇧🇳' }, { name: 'Bulgaria', flag: '🇧🇬' },
  { name: 'Burkina Faso', flag: '🇧🇫' }, { name: 'Burundi', flag: '🇧🇮' }, { name: 'Cambodia', flag: '🇰🇭' }, { name: 'Cameroon', flag: '🇨🇲' }, { name: 'Canada', flag: '🇨🇦' },
  { name: 'Central African Republic', flag: '🇨🇫' }, { name: 'Chad', flag: '🇹🇩' }, { name: 'Chile', flag: '🇨🇱' }, { name: 'China', flag: '🇨🇳' }, { name: 'Colombia', flag: '🇨🇴' },
  { name: 'Comoros', flag: '🇰🇲' }, { name: 'Costa Rica', flag: '🇨🇷' }, { name: 'Croatia', flag: '🇭🇷' }, { name: 'Cuba', flag: '🇨🇺' }, { name: 'Cyprus', flag: '🇨🇾' },
  { name: 'Czech Republic', flag: '🇨🇿' }, { name: 'Denmark', flag: '🇩🇰' }, { name: 'Djibouti', flag: '🇩🇯' }, { name: 'Dominican Republic', flag: '🇩🇴' }, { name: 'Ecuador', flag: '🇪🇨' },
  { name: 'Egypt', flag: '🇪🇬' }, { name: 'El Salvador', flag: '🇸🇻' }, { name: 'Estonia', flag: '🇪🇪' }, { name: 'Ethiopia', flag: '🇪🇹' }, { name: 'Fiji', flag: '🇫🇯' },
  { name: 'Finland', flag: '🇫🇮' }, { name: 'France', flag: '🇫🇷' }, { name: 'Gabon', flag: '🇬🇦' }, { name: 'Gambia', flag: '🇬🇲' }, { name: 'Georgia', flag: '🇬🇪' },
  { name: 'Germany', flag: '🇩🇪' }, { name: 'Ghana', flag: '🇬🇭' }, { name: 'Greece', flag: '🇬🇷' }, { name: 'Guatemala', flag: '🇬🇹' }, { name: 'Guinea', flag: '🇬🇳' },
  { name: 'Haiti', flag: '🇭🇹' }, { name: 'Honduras', flag: '🇭🇳' }, { name: 'Hungary', flag: '🇭🇺' }, { name: 'Iceland', flag: '🇮🇸' }, { name: 'India', flag: '🇮🇳' },
  { name: 'Indonesia', flag: '🇮🇩' }, { name: 'Iran', flag: '🇮🇷' }, { name: 'Iraq', flag: '🇮🇶' }, { name: 'Ireland', flag: '🇮🇪' }, { name: 'Israel', flag: '🇮🇱' },
  { name: 'Italy', flag: '🇮🇹' }, { name: 'Jamaica', flag: '🇯🇲' }, { name: 'Japan', flag: '🇯🇵' }, { name: 'Jordan', flag: '🇯🇴' }, { name: 'Kazakhstan', flag: '🇰🇿' },
  { name: 'Kenya', flag: '🇰🇪' }, { name: 'Kuwait', flag: '🇰🇼' }, { name: 'Kyrgyzstan', flag: '🇰🇬' }, { name: 'Laos', flag: '🇱🇦' }, { name: 'Latvia', flag: '🇱🇻' },
  { name: 'Lebanon', flag: '🇱🇧' }, { name: 'Libya', flag: '🇱🇾' }, { name: 'Lithuania', flag: '🇱🇹' }, { name: 'Luxembourg', flag: '🇱🇺' }, { name: 'Madagascar', flag: '🇲🇬' },
  { name: 'Malawi', flag: '🇲🇼' }, { name: 'Malaysia', flag: '🇲🇾' }, { name: 'Maldives', flag: '🇲🇻' }, { name: 'Mali', flag: '🇲🇱' }, { name: 'Malta', flag: '🇲🇹' },
  { name: 'Mauritius', flag: '🇲🇺' }, { name: 'Mexico', flag: '🇲🇽' }, { name: 'Moldova', flag: '🇲🇩' }, { name: 'Monaco', flag: '🇲🇨' }, { name: 'Mongolia', flag: '🇲🇳' },
  { name: 'Montenegro', flag: '🇲🇪' }, { name: 'Morocco', flag: '🇲🇦' }, { name: 'Mozambique', flag: '🇲🇿' }, { name: 'Myanmar', flag: '🇲🇲' }, { name: 'Namibia', flag: '🇳🇦' },
  { name: 'Nepal', flag: '🇳🇵' }, { name: 'Netherlands', flag: '🇳🇱' }, { name: 'New Zealand', flag: '🇳🇿' }, { name: 'Nicaragua', flag: '🇳🇮' }, { name: 'Niger', flag: '🇳🇪' },
  { name: 'Nigeria', flag: '🇳🇬' }, { name: 'Norway', flag: '🇳🇴' }, { name: 'Oman', flag: '🇴🇲' }, { name: 'Pakistan', flag: '🇵🇰' }, { name: 'Panama', flag: '🇵🇦' },
  { name: 'Papua New Guinea', flag: '🇵🇬' }, { name: 'Paraguay', flag: '🇵🇾' }, { name: 'Peru', flag: '🇵🇪' }, { name: 'Philippines', flag: '🇵🇭' }, { name: 'Poland', flag: '🇵🇱' },
  { name: 'Portugal', flag: '🇵🇹' }, { name: 'Qatar', flag: '🇶🇦' }, { name: 'Romania', flag: '🇷🇴' }, { name: 'Russia', flag: '🇷🇺' }, { name: 'Rwanda', flag: '🇷🇼' },
  { name: 'Saudi Arabia', flag: '🇸🇦' }, { name: 'Senegal', flag: '🇸🇳' }, { name: 'Serbia', flag: '🇷🇸' }, { name: 'Singapore', flag: '🇸🇬' }, { name: 'Slovakia', flag: '🇸🇰' },
  { name: 'Slovenia', flag: '🇸🇮' }, { name: 'Somalia', flag: '🇸🇴' }, { name: 'South Africa', flag: '🇿🇦' }, { name: 'South Korea', flag: '🇰🇷' }, { name: 'Spain', flag: '🇪🇸' },
  { name: 'Sri Lanka', flag: '🇱🇰' }, { name: 'Sudan', flag: '🇸🇩' }, { name: 'Sweden', flag: '🇸🇪' }, { name: 'Switzerland', flag: '🇨🇭' }, { name: 'Syria', flag: '🇸🇾' },
  { name: 'Taiwan', flag: '🇹🇼' }, { name: 'Tajikistan', flag: '🇹🇯' }, { name: 'Tanzania', flag: '🇹🇿' }, { name: 'Thailand', flag: '🇹🇭' }, { name: 'Togo', flag: '🇹🇬' },
  { name: 'Tunisia', flag: '🇹🇳' }, { name: 'Turkey', flag: '🇹🇷' }, { name: 'Turkmenistan', flag: '🇹🇲' }, { name: 'Uganda', flag: '🇺🇬' }, { name: 'Ukraine', flag: '🇺🇦' },
  { name: 'United Arab Emirates', flag: '🇦🇪' }, { name: 'United Kingdom', flag: '🇬🇧' }, { name: 'United States', flag: '🇺🇸' }, { name: 'Uruguay', flag: '🇺🇾' }, { name: 'Uzbekistan', flag: '🇺🇿' },
  { name: 'Venezuela', flag: '🇻🇪' }, { name: 'Vietnam', flag: '🇻🇳' }, { name: 'Yemen', flag: '🇾🇪' }, { name: 'Zambia', flag: '🇿🇲' }, { name: 'Zimbabwe', flag: '🇿🇼' }
]

const countryCodes = [
  { code: '+1', country: 'United States/Canada', flag: '🇺🇸' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+32', country: 'Belgium', flag: '🇧🇪' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+43', country: 'Austria', flag: '🇦🇹' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+47', country: 'Norway', flag: '🇳🇴' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰' },
  { code: '+358', country: 'Finland', flag: '🇫🇮' },
  { code: '+48', country: 'Poland', flag: '🇵🇱' },
  { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
  { code: '+36', country: 'Hungary', flag: '🇭🇺' },
  { code: '+30', country: 'Greece', flag: '🇬🇷' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
  { code: '+353', country: 'Ireland', flag: '🇮🇪' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦' },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
  { code: '+968', country: 'Oman', flag: '🇴🇲' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+972', country: 'Israel', flag: '🇮🇱' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+51', country: 'Peru', flag: '🇵🇪' },
  { code: '+7', country: 'Russia', flag: '🇷🇺' },
  { code: '+380', country: 'Ukraine', flag: '🇺🇦' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+977', country: 'Nepal', flag: '🇳🇵' },
  { code: '+960', country: 'Maldives', flag: '🇲🇻' },
]

const featuredDestinations: Destination[] = [
  {
    name: 'Colombo',
    country: 'Sri Lanka',
    description: 'Vibrant capital blending modern city culture with history.',
    priceFrom: '$399',
    image: colomboImg,
    fullDescription: 'Sri Lanka\'s capital and largest city, Colombo is a bustling hub of colonial architecture, modern shopping centers, and coastal charm. Explore the Old Parliament buildings, visit Galle Face Green, and experience authentic local cuisine.',
    bestTime: 'January - March, July - September',
    activities: ['Shopping', 'Cultural sites', 'Beach walks', 'Dining & nightlife'],
  },
  {
    name: 'Kandy',
    country: 'Sri Lanka',
    description: 'Sacred Buddhist city nestled among hills and a scenic lake.',
    priceFrom: '$299',
    image: kandyImg,
    fullDescription: 'Home to the revered Temple of the Tooth Relic, Kandy is Sri Lanka\'s cultural heart. Surrounded by lush hills and a serene artificial lake, it\'s a perfect blend of spirituality, nature, and local culture.',
    bestTime: 'December - March',
    activities: ['Temple visits', 'Lake walks', 'Tea estates', 'Cultural performances'],
  },
  {
    name: 'Nuwara Eliya',
    country: 'Sri Lanka',
    description: 'Charming hill station known as "Little England" with cool climate.',
    priceFrom: '$319',
    image: nuwaraeliImg,
    fullDescription: 'Nuwara Eliya, often called "Little England," is a picturesque hill station surrounded by lush tea plantations and misty mountains. Known for its cool climate, colonial-era bungalows, and stunning Gregory Lake, it offers a refreshing escape from tropical heat.',
    bestTime: 'January - April',
    activities: ['Tea plantation visits', 'Gregory Lake boating', 'Horton Plains hiking', 'Strawberry farms'],
  },
  {
    name: 'Ella',
    country: 'Sri Lanka',
    description: 'Scenic mountain village surrounded by tea plantations and misty hills.',
    priceFrom: '$299',
    image: ellaImg,
    fullDescription: 'Nestled in the central highlands, Ella is a charming village famous for its stunning tea plantations, hiking trails, and breathtaking views. Perfect for adventure seekers and nature lovers seeking tranquility.',
    bestTime: 'January - March, June - September',
    activities: ['Tea plantation tours', 'Hiking', 'Train rides', 'Photography'],
  },
  {
    name: 'Mirissa',
    country: 'Sri Lanka',
    description: 'Tropical beach paradise ideal for whale watching and surfing.',
    priceFrom: '$349',
    image: mirissaImg,
    fullDescription: 'Mirissa is a picturesque southern beach town famous for whale watching expeditions, golden sands, and water sports. A perfect destination for beach lovers and adventure enthusiasts.',
    bestTime: 'October - April',
    activities: ['Whale watching', 'Surfing', 'Snorkeling', 'Beach relaxation'],
  },
  {
    name: 'Galle',
    country: 'Sri Lanka',
    description: 'Historic fort town with Dutch-era architecture and beaches.',
    priceFrom: '$349',
    image: galleImg,
    fullDescription: 'Galle Fort is a UNESCO World Heritage Site showcasing remarkable Dutch colonial architecture. Walk the ancient ramparts, explore charming cafés, and enjoy pristine beaches all within this historic walled city.',
    bestTime: 'October - April',
    activities: ['Fort exploration', 'Beach activities', 'Whale watching', 'Local market tours'],
  },
  {
    name: 'Trincomalee',
    country: 'Sri Lanka',
    description: 'Eastern coastal gem known for pristine beaches and deep-sea diving.',
    priceFrom: '$329',
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

const locations: LocationCard[] = [
  { name: 'Colombo', country: 'Sri Lanka', image: colomboImg, badge: 'City coast' },
  { name: 'Galle', country: 'Sri Lanka', image: galleImg, badge: 'Fort town' },
  { name: 'Mirissa', country: 'Sri Lanka', image: mirissaImg, badge: 'Beach vibes' },
  { name: 'Nuwara Eliya', country: 'Sri Lanka', image: nuwaraeliImg, badge: 'Hill country' },
]

export function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroBackgrounds = (() => {
    const modules = import.meta.glob('../assets/bg/bg*.jpeg', {
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
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    nationality: '',
    pax: '',
    arrivalDate: '',
    departureDate: '',
    email: '',
    countryCode: '+94',
    whatsapp: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const errors: Record<string, string> = {}
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    }
    
    // Country validation
    if (!formData.country) {
      errors.country = 'Country is required'
    }
    
    // Nationality validation
    if (!formData.nationality.trim()) {
      errors.nationality = 'Nationality is required'
    }
    
    // Number of Pax validation
    if (!formData.pax) {
      errors.pax = 'Number of travelers is required'
    } else if (parseInt(formData.pax) < 1) {
      errors.pax = 'At least 1 traveler required'
    } else if (parseInt(formData.pax) > 5) {
      errors.pax = 'Maximum 5 travelers allowed'
    }
    
    // Arrival date validation
    if (!formData.arrivalDate) {
      errors.arrivalDate = 'Arrival date is required'
    } else {
      const arrival = new Date(formData.arrivalDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (arrival < today) {
        errors.arrivalDate = 'Arrival date cannot be in the past'
      }
    }
    
    // Departure date validation
    if (!formData.departureDate) {
      errors.departureDate = 'Departure date is required'
    } else if (formData.arrivalDate) {
      const arrival = new Date(formData.arrivalDate)
      const departure = new Date(formData.departureDate)
      if (departure <= arrival) {
        errors.departureDate = 'Departure must be after arrival'
      }
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email'
    }
    
    // WhatsApp validation (optional - only validate if provided)
    if (formData.whatsapp.trim() && !/^\d{6,15}$/.test(formData.whatsapp.replace(/\s/g, ''))) {
      errors.whatsapp = 'Enter a valid phone number (6-15 digits)'
    }
    
    return errors
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateForm()
    setFormErrors(errors)
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true)
      
      const apiKey = import.meta.env.VITE_WEB3FORMS_KEY
      
      if (!apiKey) {
        setFormErrors({ submit: "The contact form is missing its configuration API key. Please set VITE_WEB3FORMS_KEY in your Vercel Environment Variables." })
        setIsSubmitting(false)
        return
      }

      const submissionData = {
        access_key: apiKey,
        subject: `New Travel Booking Request from ${formData.name}`,
        from_name: "TravelMeLanka Website",
        name: formData.name,
        email: formData.email,
        country: formData.country,
        nationality: formData.nationality,
        pax: formData.pax,
        arrival_date: formData.arrivalDate,
        departure_date: formData.departureDate,
        whatsapp: `${formData.countryCode} ${formData.whatsapp}`,
        message: formData.message
      }

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(submissionData)
        })

        const result = await response.json()

        if (result.success) {
          setFormSubmitted(true)
          setFormData({
            name: '',
            country: '',
            nationality: '',
            pax: '',
            arrivalDate: '',
            departureDate: '',
            email: '',
            countryCode: '+94',
            whatsapp: '',
            message: ''
          })
          setTimeout(() => setFormSubmitted(false), 5000)
        } else {
          setFormErrors({ submit: result.message || "Failed to submit request. Please try again." })
        }
      } catch (error) {
        console.error(error)
        setFormErrors({ submit: "Failed to send request. Please check your network connection." })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const triggerFadeIn = () => {
    // Use a double-rAF so the DOM commits the "opacity-0" state first,
    // then transitions to the visible state.
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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "TravelMeLanka",
    "url": "https://travelmelanka.com",
    "logo": "https://travelmelanka.com/assets/logo.png",
    "description": "Tailor-made Sri Lankan travel planning & private driver-guided tours.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK",
      "addressLocality": "Colombo"
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
      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm transition-all duration-300">
          <div className="flex flex-col items-center gap-6">
            {/* Animated Logo/Spinner */}
            <div className="relative">
              <div className="h-20 w-20 rounded-full border-4 border-indigo-200/30 border-t-indigo-500 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
            </div>
            
            {/* Loading Text */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">Sending Your Request</h3>
              <p className="mt-2 text-sm text-slate-300">Please wait while we process your inquiry...</p>
            </div>
            
            {/* Animated Dots */}
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="h-2 w-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="h-2 w-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          </div>
        </div>
      )}

      {/* Success Overlay */}
      {formSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm transition-all duration-300">
          <div className="relative mx-4 max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setFormSubmitted(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Success Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg">
              <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Success Content */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-slate-900">Request Sent!</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Thank you for your inquiry. We've received your request and will get back to you within <span className="font-semibold text-indigo-600">24 hours</span>.
              </p>
            </div>

            {/* Info Box */}
            <div className="mt-6 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 p-4 border border-slate-100">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                  <svg className="h-4 w-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-slate-700">What happens next?</p>
                  <p className="mt-1 text-slate-500">Our team will review your travel preferences and send you a personalized itinerary via email or WhatsApp.</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => setFormSubmitted(false)}
              className="mt-6 w-full rounded-xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-slate-900 hover:via-indigo-900 hover:to-slate-800 hover:shadow-xl"
            >
              Got it, thanks!
            </button>

            {/* Decorative Elements */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-green-400/20 blur-2xl" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-indigo-400/20 blur-2xl" />
          </div>
        </div>
      )}

      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="TravelMeLanka" className="h-16 w-auto" />
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#destinations">
              Destinations
            </a>
            <a className="hover:text-slate-900" href="#about">
              About
            </a>
            <a className="hover:text-slate-900" href="/reviews">
              Reviews
            </a>
            <a className="hover:text-slate-900" href="#contact">
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
              href="#contact"
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
              <a className="hover:text-slate-900" href="#destinations" onClick={() => setMobileMenuOpen(false)}>
                Destinations
              </a>
              <a className="hover:text-slate-900" href="#about" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a className="hover:text-slate-900" href="/reviews" onClick={() => setMobileMenuOpen(false)}>
                Reviews
              </a>
              <a className="hover:text-slate-900" href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:from-slate-900 hover:via-indigo-900 hover:to-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                BOOK A RIDE
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
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

        <section id="destinations" className={`${styles.featuredDestinationsSection} relative w-full py-20 sm:py-32 border-b border-slate-100`}>
          <div className="relative z-10 mx-auto max-w-6xl px-4">
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

        <section id="about" className={`${styles.featuredDestinationsSection} relative`}>
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:py-32">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900">About Me</h2>
                <p className="mt-2 text-base font-medium text-slate-700">Your Personal Tour Guide & Driver</p>
                <p className="mt-4 text-base text-slate-800 leading-relaxed"><strong className="text-slate-900">Najith Darshena</strong> is a professional tour guide with over 12 years of experience in the tourism industry. With strong local knowledge and a passion for hospitality, he specializes in creating safe, comfortable, and unforgettable travel experiences. From personal, honeymoon, cultural tours to nature and adventure trips, every journey is carefully planned to suit each traveler's needs.</p>
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
              <div>
                <OptimizedImage 
                  src={uncleImg} 
                  alt="Sri Lankan Travel Guide" 
                  className="rounded-3xl w-full h-auto shadow-lg" 
                  wrapperClassName="rounded-3xl"
                />
              </div>
            </div>

            {/* Car Highlight Section */}
            <div className="mt-16">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1">
                  <OptimizedImage 
                    src={corollaImg} 
                    alt="Toyota Corolla Fielder" 
                    className="rounded-3xl w-full h-auto shadow-2xl ring-4 ring-indigo-100" 
                    wrapperClassName="rounded-3xl"
                  />
                </div>
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
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-linear-to-b from-white via-slate-50 to-white py-20 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <div className="mb-16">
              <div className="text-center mb-10">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Get in Touch</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let's Connect</h2>
                <p className="mt-4 text-lg text-slate-600">Follow our journey or reach out anytime</p>
              </div>

              <div className="flex justify-center gap-8 md:gap-12">
                <a
                  href="https://wa.me/94714843570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 transition-all duration-300"
                  title="WhatsApp"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-green-400 to-green-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:from-green-500 group-hover:to-green-700">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">WhatsApp</span>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 transition-all duration-300"
                  title="Facebook"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-blue-700 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:from-blue-600 group-hover:to-blue-800">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333H16V2.169c-.585-.089-1.308-.169-2.227-.169-2.995 0-5.27 1.991-5.27 5.831V8z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">Facebook</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 transition-all duration-300"
                  title="Instagram"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-pink-500 via-red-500 to-orange-400 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:from-pink-600 group-hover:via-red-600 group-hover:to-orange-500">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">Instagram</span>
                </a>

                  <a
                    href="mailto:info@travelmelanka.com"
                    className="group flex flex-col items-center gap-3 transition-all duration-300"
                    title="Gmail"
                  >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-red-400 to-red-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:from-red-500 group-hover:to-red-700">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">Gmail</span>
                </a>
              </div>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <div className="hidden md:flex flex-col items-center justify-center">
                <OptimizedImage 
                  src={airplaneImg} 
                  alt="Travel airplane" 
                  className="w-full h-auto max-w-md" 
                />
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Request a quote</h2>
                  <p className="mt-2 text-sm text-slate-600">Send your destination and dates we'll reply with options.</p>
                </div>

                <form onSubmit={handleFormSubmit} className="rounded-3xl border border-slate-200 p-4 shadow-sm sm:p-6">
                <div className="grid gap-3">
                  {formErrors.submit && (
                    <div className="rounded-xl bg-red-50 p-4 border border-red-200 text-sm text-red-600 flex items-start gap-2">
                      <svg className="h-5 w-5 shrink-0 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900">Submission failed</p>
                        <p className="mt-1 text-xs text-red-500">{formErrors.submit}</p>
                      </div>
                    </div>
                  )}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="grid gap-1 text-sm">
                      <span className="font-medium text-slate-700">Name <span className="text-red-500">*</span></span>
                      <input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`h-11 rounded-xl border ${formErrors.name ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'} px-4 text-sm outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/15 transition-colors`}
                        placeholder="Your name"
                      />
                      {formErrors.name && <span className="text-xs text-red-500 flex items-center gap-1"><svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{formErrors.name}</span>}
                    </label>
                    <label className="grid gap-1 text-sm">
                      <span className="font-medium text-slate-700">Country <span className="text-red-500">*</span></span>
                      <select
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className={`h-11 rounded-xl border ${formErrors.country ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'} px-4 text-sm outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/15 transition-colors appearance-none cursor-pointer`}
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                      >
                        <option value="">Select your country</option>
                        {countries.map((country) => (
                          <option key={country.name} value={country.name}>{country.flag} {country.name}</option>
                        ))}
                      </select>
                      {formErrors.country && <span className="text-xs text-red-500 flex items-center gap-1"><svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{formErrors.country}</span>}
                    </label>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="grid gap-1 text-sm">
                      <span className="font-medium text-slate-700">Nationality <span className="text-red-500">*</span></span>
                      <input
                        value={formData.nationality}
                        onChange={(e) => handleInputChange('nationality', e.target.value)}
                        className={`h-11 rounded-xl border ${formErrors.nationality ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'} px-4 text-sm outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/15 transition-colors`}
                        placeholder="Your nationality"
                      />
                      {formErrors.nationality && <span className="text-xs text-red-500 flex items-center gap-1"><svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{formErrors.nationality}</span>}
                    </label>
                    <label className="grid gap-1 text-sm">
                      <span className="font-medium text-slate-700">No of Pax <span className="text-red-500">*</span></span>
                      <input
                        type="number"
                        min="1"
                        max="5"
                        value={formData.pax}
                        onChange={(e) => handleInputChange('pax', e.target.value)}
                        className={`h-11 rounded-xl border ${formErrors.pax ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'} px-4 text-sm outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/15 transition-colors`}
                        placeholder="Number of travelers"
                      />
                      {formErrors.pax && <span className="text-xs text-red-500 flex items-center gap-1"><svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{formErrors.pax}</span>}
                    </label>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="grid gap-1 text-sm">
                      <span className="font-medium text-slate-700">Arrival Date <span className="text-red-500">*</span></span>
                      <input
                        type="date"
                        value={formData.arrivalDate}
                        onChange={(e) => handleInputChange('arrivalDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className={`h-11 rounded-xl border ${formErrors.arrivalDate ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'} px-4 text-sm outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/15 transition-colors`}
                      />
                      {formErrors.arrivalDate && <span className="text-xs text-red-500 flex items-center gap-1"><svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{formErrors.arrivalDate}</span>}
                    </label>
                    <label className="grid gap-1 text-sm">
                      <span className="font-medium text-slate-700">Departure Date <span className="text-red-500">*</span></span>
                      <input
                        type="date"
                        value={formData.departureDate}
                        onChange={(e) => handleInputChange('departureDate', e.target.value)}
                        min={formData.arrivalDate || new Date().toISOString().split('T')[0]}
                        className={`h-11 rounded-xl border ${formErrors.departureDate ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'} px-4 text-sm outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/15 transition-colors`}
                      />
                      {formErrors.departureDate && <span className="text-xs text-red-500 flex items-center gap-1"><svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{formErrors.departureDate}</span>}
                    </label>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="grid gap-1 text-sm">
                      <span className="font-medium text-slate-700">Email <span className="text-red-500">*</span></span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`h-11 rounded-xl border ${formErrors.email ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'} px-4 text-sm outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/15 transition-colors`}
                        placeholder="you@example.com"
                      />
                      {formErrors.email && <span className="text-xs text-red-500 flex items-center gap-1"><svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{formErrors.email}</span>}
                    </label>
                    <label className="grid gap-1 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-700">WhatsApp Number</span>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">Optional</span>
                      </div>
                      <div className={`relative flex h-11 items-center overflow-hidden rounded-xl border ${formErrors.whatsapp ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white hover:border-slate-400'} transition-all focus-within:border-indigo-600 focus-within:ring-4 focus-within:ring-indigo-600/15`}>
                        <div className="flex h-full items-center gap-2 border-r border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100/50 pl-3 pr-3">
                          <svg className="h-4 w-4 shrink-0 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          <select
                            value={formData.countryCode}
                            onChange={(e) => handleInputChange('countryCode', e.target.value)}
                            className="h-full appearance-none bg-transparent pr-1 text-sm font-medium text-slate-700 outline-none cursor-pointer"
                          >
                            {countryCodes.map((cc) => (
                              <option key={cc.code} value={cc.code}>
                                {cc.flag} {cc.code}
                              </option>
                            ))}
                          </select>
                          <svg className="h-3 w-3 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <input
                          type="tel"
                          value={formData.whatsapp}
                          onChange={(e) => handleInputChange('whatsapp', e.target.value.replace(/[^0-9]/g, ''))}
                          className="h-full w-full flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-slate-400"
                          placeholder="Enter phone number"
                        />
                      </div>
                      {formErrors.whatsapp && <span className="text-xs text-red-500 flex items-center gap-1"><svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{formErrors.whatsapp}</span>}
                    </label>
                  </div>
                  <label className="grid gap-1 text-sm">
                    <span className="font-medium text-slate-700">Message</span>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="min-h-28 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/15 transition-colors"
                      placeholder="Tell us about your trip preferences, destinations you'd like to visit..."
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 px-5 text-sm font-medium text-white shadow-sm transition hover:from-slate-900 hover:via-indigo-900 hover:to-slate-800 focus:outline-none focus:ring-4 focus:ring-indigo-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Request'
                    )}
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
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
                  href="https://wa.me/94714843570"
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
                <li><a href="#destinations" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Destinations</a></li>
                <li><a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>About Us</a></li>
                <li><a href="/reviews" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Reviews</a></li>
                <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Contact</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Destinations</h3>
              <ul className="mt-6 space-y-4">
                <li><a href="#destinations" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Colombo</a></li>
                <li><a href="#destinations" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Kandy</a></li>
                <li><a href="#destinations" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Galle</a></li>
                <li><a href="#destinations" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span className="h-1 w-1 rounded-full bg-indigo-400 group-hover:w-2 transition-all duration-200"></span>Ella</a></li>
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
  )
}
