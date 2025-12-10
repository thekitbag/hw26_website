import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>,
    ) => void
  }
}

// Component to track page views
export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
      })
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', location.pathname)
    }
  }, [location])

  return null
}
