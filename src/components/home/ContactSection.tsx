import { useState } from 'react'
import { ScrollReveal } from '../ScrollReveal'

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
  { code: '+93', country: 'Afghanistan', flag: '🇦🇫' },
  { code: '+355', country: 'Albania', flag: '🇦🇱' },
  { code: '+213', country: 'Algeria', flag: '🇩🇿' },
  { code: '+376', country: 'Andorra', flag: '🇦🇩' },
  { code: '+244', country: 'Angola', flag: '🇦🇴' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+374', country: 'Armenia', flag: '🇦🇲' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+43', country: 'Austria', flag: '🇦🇹' },
  { code: '+994', country: 'Azerbaijan', flag: '🇦🇿' },
  { code: '+1-242', country: 'Bahamas', flag: '🇧🇸' },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+1-246', country: 'Barbados', flag: '🇧🇧' },
  { code: '+375', country: 'Belarus', flag: '🇧🇾' },
  { code: '+32', country: 'Belgium', flag: '🇧🇪' },
  { code: '+501', country: 'Belize', flag: '🇧🇿' },
  { code: '+229', country: 'Benin', flag: '🇧🇯' },
  { code: '+975', country: 'Bhutan', flag: '🇧🇹' },
  { code: '+591', country: 'Bolivia', flag: '🇧🇴' },
  { code: '+387', country: 'Bosnia and Herzegovina', flag: '🇧🇦' },
  { code: '+267', country: 'Botswana', flag: '🇧🇼' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+673', country: 'Brunei', flag: '🇧🇳' },
  { code: '+359', country: 'Bulgaria', flag: '🇧🇬' },
  { code: '+226', country: 'Burkina Faso', flag: '🇧🇫' },
  { code: '+257', country: 'Burundi', flag: '🇧🇮' },
  { code: '+855', country: 'Cambodia', flag: '🇰🇭' },
  { code: '+237', country: 'Cameroon', flag: '🇨🇲' },
  { code: '+1', country: 'Canada', flag: '🇨🇦' },
  { code: '+236', country: 'Central African Republic', flag: '🇨🇫' },
  { code: '+235', country: 'Chad', flag: '🇹🇩' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+269', country: 'Comoros', flag: '🇰🇲' },
  { code: '+506', country: 'Costa Rica', flag: '🇨🇷' },
  { code: '+385', country: 'Croatia', flag: '🇭🇷' },
  { code: '+53', country: 'Cuba', flag: '🇨🇺' },
  { code: '+357', country: 'Cyprus', flag: '🇨🇾' },
  { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰' },
  { code: '+253', country: 'Djibouti', flag: '🇩🇯' },
  { code: '+1-809', country: 'Dominican Republic', flag: '🇩🇴' },
  { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+503', country: 'El Salvador', flag: '🇸🇻' },
  { code: '+372', country: 'Estonia', flag: '🇪🇪' },
  { code: '+251', country: 'Ethiopia', flag: '🇪🇹' },
  { code: '+679', country: 'Fiji', flag: '🇫🇯' },
  { code: '+358', country: 'Finland', flag: '🇫🇮' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+241', country: 'Gabon', flag: '🇬🇦' },
  { code: '+220', country: 'Gambia', flag: '🇬🇲' },
  { code: '+995', country: 'Georgia', flag: '🇬🇪' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+233', country: 'Ghana', flag: '🇬🇭' },
  { code: '+30', country: 'Greece', flag: '🇬🇷' },
  { code: '+502', country: 'Guatemala', flag: '🇬🇹' },
  { code: '+240', country: 'Guinea', flag: '🇬🇳' },
  { code: '+509', country: 'Haiti', flag: '🇭🇹' },
  { code: '+504', country: 'Honduras', flag: '🇭🇳' },
  { code: '+36', country: 'Hungary', flag: '🇭🇺' },
  { code: '+354', country: 'Iceland', flag: '🇮🇸' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+98', country: 'Iran', flag: '🇮🇷' },
  { code: '+964', country: 'Iraq', flag: '🇮🇶' },
  { code: '+353', country: 'Ireland', flag: '🇮🇪' },
  { code: '+972', country: 'Israel', flag: '🇮🇱' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+1-876', country: 'Jamaica', flag: '🇯🇲' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+962', country: 'Jordan', flag: '🇯🇴' },
  { code: '+7', country: 'Kazakhstan', flag: '🇰🇿' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+996', country: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: '+856', country: 'Laos', flag: '🇱🇦' },
  { code: '+371', country: 'Latvia', flag: '🇱🇻' },
  { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
  { code: '+218', country: 'Libya', flag: '🇱🇾' },
  { code: '+370', country: 'Lithuania', flag: '🇱🇹' },
  { code: '+352', country: 'Luxembourg', flag: '🇱🇺' },
  { code: '+261', country: 'Madagascar', flag: '🇲🇬' },
  { code: '+265', country: 'Malawi', flag: '🇲🇼' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+960', country: 'Maldives', flag: '🇲🇻' },
  { code: '+223', country: 'Mali', flag: '🇲🇱' },
  { code: '+356', country: 'Malta', flag: '🇲🇹' },
  { code: '+230', country: 'Mauritius', flag: '🇲🇺' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+373', country: 'Moldova', flag: '🇲🇩' },
  { code: '+377', country: 'Monaco', flag: '🇲🇨' },
  { code: '+976', country: 'Mongolia', flag: '🇲🇳' },
  { code: '+382', country: 'Montenegro', flag: '🇲🇪' },
  { code: '+212', country: 'Morocco', flag: '🇲🇦' },
  { code: '+258', country: 'Mozambique', flag: '🇲🇿' },
  { code: '+95', country: 'Myanmar', flag: '🇲🇲' },
  { code: '+264', country: 'Namibia', flag: '🇳🇦' },
  { code: '+977', country: 'Nepal', flag: '🇳🇵' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
  { code: '+505', country: 'Nicaragua', flag: '🇳🇮' },
  { code: '+227', country: 'Niger', flag: '🇳🇪' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+47', country: 'Norway', flag: '🇳🇴' },
  { code: '+968', country: 'Oman', flag: '🇴🇲' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+507', country: 'Panama', flag: '🇵🇦' },
  { code: '+675', country: 'Papua New Guinea', flag: '🇵🇬' },
  { code: '+595', country: 'Paraguay', flag: '🇵🇾' },
  { code: '+51', country: 'Peru', flag: '🇵🇪' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  { code: '+48', country: 'Poland', flag: '🇵🇱' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦' },
  { code: '+40', country: 'Romania', flag: '🇷🇴' },
  { code: '+7', country: 'Russia', flag: '🇷🇺' },
  { code: '+250', country: 'Rwanda', flag: '🇷🇼' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+221', country: 'Senegal', flag: '🇸🇳' },
  { code: '+381', country: 'Serbia', flag: '🇷🇸' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
  { code: '+386', country: 'Slovenia', flag: '🇸🇮' },
  { code: '+252', country: 'Somalia', flag: '🇸🇴' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+249', country: 'Sudan', flag: '🇸🇩' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+963', country: 'Syria', flag: '🇸🇾' },
  { code: '+886', country: 'Taiwan', flag: '🇹🇼' },
  { code: '+992', country: 'Tajikistan', flag: '🇹🇯' },
  { code: '+255', country: 'Tanzania', flag: '🇹🇿' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭' },
  { code: '+228', country: 'Togo', flag: '🇹🇬' },
  { code: '+216', country: 'Tunisia', flag: '🇹🇳' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+993', country: 'Turkmenistan', flag: '🇹🇲' },
  { code: '+256', country: 'Uganda', flag: '🇺🇬' },
  { code: '+380', country: 'Ukraine', flag: '🇺🇦' },
  { code: '+971', country: 'United Arab Emirates', flag: '🇦🇪' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+1', country: 'United States', flag: '🇺🇸' },
  { code: '+598', country: 'Uruguay', flag: '🇺🇾' },
  { code: '+998', country: 'Uzbekistan', flag: '🇺🇿' },
  { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+967', country: 'Yemen', flag: '🇾🇪' },
  { code: '+260', country: 'Zambia', flag: '🇿🇲' },
  { code: '+263', country: 'Zimbabwe', flag: '🇿🇼' }
]

export function ContactSection() {
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
    
    // WhatsApp validation (optional)
    if (formData.whatsapp.trim() && !/^\d{6,15}$/.test(formData.whatsapp.replace(/\s/g, ''))) {
      errors.whatsapp = 'Enter a valid phone number (6-15 digits)'
    }
    
    return errors
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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

  return (
    <>
      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm transition-all duration-300">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="h-20 w-20 rounded-full border-4 border-indigo-200/30 border-t-indigo-500 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">Sending Your Request</h3>
              <p className="mt-2 text-sm text-slate-300">Please wait while we process your inquiry...</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="h-2 w-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="h-2 w-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          </div>
        </div>
      )}

      {/* Success Overlay */}
      {formSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm transition-all duration-300">
          <div className="relative mx-4 max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => setFormSubmitted(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg">
              <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-slate-900">Request Sent!</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Thank you for your inquiry. We've received your request and will get back to you within <span className="font-semibold text-indigo-600">24 hours</span>.
              </p>
            </div>
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
            <button
              onClick={() => setFormSubmitted(false)}
              className="mt-6 w-full rounded-xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-slate-900 hover:via-indigo-900 hover:to-slate-800 hover:shadow-xl"
            >
              Got it, thanks!
            </button>
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-green-400/20 blur-2xl" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-indigo-400/20 blur-2xl" />
          </div>
        </div>
      )}

      <section id="contact" className="border-t border-slate-200 bg-linear-to-b from-white via-slate-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex flex-col items-center text-center">
                <span className="rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                  Contact Us
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Ready to plan your trip?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600 leading-relaxed">
                  Connect directly with Najith on WhatsApp, send an email, or fill out the booking form below. We'll reply within 24 hours.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-6">
                  <a
                    href="https://wa.me/94714843570"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-3 transition-all duration-300"
                    title="WhatsApp"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-green-500 shadow-md border border-slate-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-green-500 group-hover:text-white group-hover:shadow-lg">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">WhatsApp</span>
                  </a>

                  <a
                    href="mailto:info@travelmelanka.com"
                    className="group flex flex-col items-center gap-3 transition-all duration-300"
                    title="Email"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-red-500 shadow-md border border-slate-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-red-500 group-hover:text-white group-hover:shadow-lg">
                      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <ScrollReveal>
              <div className="flex h-full w-full min-h-[300px] md:min-h-[350px] overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2212976226656!2d79.92956971057573!3d6.983190992988605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257d7cad43d8b%3A0xdba961f4a51efc23!2sTravelMe.lk!5e0!3m2!1sen!2slk!4v1783363609654!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TravelMeLanka Location Map"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
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
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="John Doe"
                          className={`rounded-xl border p-2.5 outline-none transition focus:border-slate-400 ${formErrors.name ? 'border-red-500 focus:border-red-500 bg-red-50/50' : 'border-slate-200'}`}
                        />
                        {formErrors.name && <span className="text-xs text-red-500 font-medium mt-0.5">{formErrors.name}</span>}
                      </label>

                      <label className="grid gap-1 text-sm">
                        <span className="font-medium text-slate-700">Country <span className="text-red-500">*</span></span>
                        <select
                          required
                          value={formData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          className={`rounded-xl border p-2.5 bg-white outline-none transition focus:border-slate-400 ${formErrors.country ? 'border-red-500 focus:border-red-500 bg-red-50/50' : 'border-slate-200'}`}
                        >
                          <option value="">Select country</option>
                          {countries.map((c) => (
                            <option key={c.name} value={c.name}>
                              {c.flag} {c.name}
                            </option>
                          ))}
                        </select>
                        {formErrors.country && <span className="text-xs text-red-500 font-medium mt-0.5">{formErrors.country}</span>}
                      </label>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="grid gap-1 text-sm">
                        <span className="font-medium text-slate-700">Nationality <span className="text-red-500">*</span></span>
                        <input
                          type="text"
                          required
                          value={formData.nationality}
                          onChange={(e) => handleInputChange('nationality', e.target.value)}
                          placeholder="e.g. British"
                          className={`rounded-xl border p-2.5 outline-none transition focus:border-slate-400 ${formErrors.nationality ? 'border-red-500 focus:border-red-500 bg-red-50/50' : 'border-slate-200'}`}
                        />
                        {formErrors.nationality && <span className="text-xs text-red-500 font-medium mt-0.5">{formErrors.nationality}</span>}
                      </label>

                      <label className="grid gap-1 text-sm">
                        <span className="font-medium text-slate-700">Number of Travelers <span className="text-red-500">*</span></span>
                        <select
                          required
                          value={formData.pax}
                          onChange={(e) => handleInputChange('pax', e.target.value)}
                          className={`rounded-xl border p-2.5 bg-white outline-none transition focus:border-slate-400 ${formErrors.pax ? 'border-red-500 focus:border-red-500 bg-red-50/50' : 'border-slate-200'}`}
                        >
                          <option value="">Select passengers</option>
                          <option value="1">1 Passenger</option>
                          <option value="2">2 Passengers</option>
                          <option value="3">3 Passengers</option>
                          <option value="4">4 Passengers</option>
                          <option value="5">5 Passengers</option>
                        </select>
                        {formErrors.pax && <span className="text-xs text-red-500 font-medium mt-0.5">{formErrors.pax}</span>}
                      </label>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="grid gap-1 text-sm">
                        <span className="font-medium text-slate-700">Arrival Date <span className="text-red-500">*</span></span>
                        <input
                          type="date"
                          required
                          value={formData.arrivalDate}
                          onChange={(e) => handleInputChange('arrivalDate', e.target.value)}
                          className={`rounded-xl border p-2.5 outline-none transition focus:border-slate-400 ${formErrors.arrivalDate ? 'border-red-500 focus:border-red-500 bg-red-50/50' : 'border-slate-200'}`}
                        />
                        {formErrors.arrivalDate && <span className="text-xs text-red-500 font-medium mt-0.5">{formErrors.arrivalDate}</span>}
                      </label>

                      <label className="grid gap-1 text-sm">
                        <span className="font-medium text-slate-700">Departure Date <span className="text-red-500">*</span></span>
                        <input
                          type="date"
                          required
                          value={formData.departureDate}
                          onChange={(e) => handleInputChange('departureDate', e.target.value)}
                          className={`rounded-xl border p-2.5 outline-none transition focus:border-slate-400 ${formErrors.departureDate ? 'border-red-500 focus:border-red-500 bg-red-50/50' : 'border-slate-200'}`}
                        />
                        {formErrors.departureDate && <span className="text-xs text-red-500 font-medium mt-0.5">{formErrors.departureDate}</span>}
                      </label>
                    </div>

                    <label className="grid gap-1 text-sm">
                      <span className="font-medium text-slate-700">Email Address <span className="text-red-500">*</span></span>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="you@example.com"
                        className={`rounded-xl border p-2.5 outline-none transition focus:border-slate-400 ${formErrors.email ? 'border-red-500 focus:border-red-500 bg-red-50/50' : 'border-slate-200'}`}
                      />
                      {formErrors.email && <span className="text-xs text-red-500 font-medium mt-0.5">{formErrors.email}</span>}
                    </label>

                    <div className="grid gap-1 text-sm">
                      <span className="font-medium text-slate-700">WhatsApp Number</span>
                      <div className="flex gap-2">
                        <select
                          value={formData.countryCode}
                          onChange={(e) => handleInputChange('countryCode', e.target.value)}
                          className="w-28 rounded-xl border border-slate-200 p-2.5 bg-white outline-none focus:border-slate-400"
                        >
                          {countryCodes.map((c) => (
                            <option key={`${c.country}-${c.code}`} value={c.code}>
                              {c.flag} {c.code}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          value={formData.whatsapp}
                          onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                          placeholder="712345678"
                          className={`flex-1 rounded-xl border p-2.5 outline-none transition focus:border-slate-400 ${formErrors.whatsapp ? 'border-red-500 focus:border-red-500 bg-red-50/50' : 'border-slate-200'}`}
                        />
                      </div>
                      {formErrors.whatsapp && <span className="text-xs text-red-500 font-medium mt-0.5">{formErrors.whatsapp}</span>}
                    </div>

                    <label className="grid gap-1 text-sm">
                      <span className="font-medium text-slate-700">Special Notes / Preferences</span>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about the places you want to visit, budget, or other special requests..."
                        className="rounded-xl border border-slate-200 p-2.5 outline-none transition focus:border-slate-400"
                      />
                    </label>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-xl bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 py-3 text-sm font-semibold text-white shadow-md transition hover:from-slate-900 hover:via-indigo-900 hover:to-slate-800 hover:shadow-lg"
                    >
                      Send Request
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
