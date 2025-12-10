import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name'
      let element = document.querySelector(
        `meta[${attribute}="${name}"]`,
      ) as HTMLMetaElement

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }

      element.content = content
    }

    // Basic meta tags
    updateMetaTag('description', description)
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }

    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:type', 'website', true)
    if (ogImage) {
      updateMetaTag('og:image', ogImage, true)
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage)
    }

    // Canonical URL
    if (canonicalUrl) {
      let link = document.querySelector(
        'link[rel="canonical"]',
      ) as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonicalUrl
    }
  }, [title, description, keywords, ogImage, canonicalUrl])

  // Also add JSON-LD structured data for better SEO
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Harkwise',
      description:
        'Simple QR-based feedback for offline businesses',
      url: typeof window !== 'undefined' ? window.location.origin : '',
      logo: typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : '',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@harkwise.com',
        contactType: 'Customer Service',
      },
    })

    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
