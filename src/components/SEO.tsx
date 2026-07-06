import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
}

export function SEO({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonicalUrl,
}: SEOProps) {
  useEffect(() => {
    // 1. Update document title
    document.title = `${title} | TravelMeLanka`

    // Helper to find or create a meta tag
    const updateMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attributeName, attributeValue)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Helper to find or create a link tag
    const updateLinkTag = (relValue: string, hrefValue: string) => {
      let element = document.querySelector(`link[rel="${relValue}"]`)
      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', relValue)
        document.head.appendChild(element)
      }
      element.setAttribute('href', hrefValue)
    }

    // 2. Standard Meta Tags
    updateMetaTag('name', 'description', description)
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords)
    } else {
      const defaultKeywords = 'travel, Sri Lanka travel, tour packages, travel agency, Sri Lanka tourism'
      updateMetaTag('name', 'keywords', defaultKeywords)
    }

    // 3. Open Graph (Facebook / LinkedIn)
    updateMetaTag('property', 'og:title', title)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:type', ogType)
    updateMetaTag('property', 'og:url', window.location.href)
    updateMetaTag('property', 'og:site_name', 'TravelMeLanka')
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage)
    }

    // 4. Twitter Cards
    updateMetaTag('name', 'twitter:card', 'summary_large_image')
    updateMetaTag('name', 'twitter:title', title)
    updateMetaTag('name', 'twitter:description', description)
    if (ogImage) {
      updateMetaTag('name', 'twitter:image', ogImage)
    }

    // 5. Canonical Link
    const currentUrl = canonicalUrl || window.location.href
    updateLinkTag('canonical', currentUrl)

  }, [title, description, keywords, ogImage, ogType, canonicalUrl])

  return null
}
