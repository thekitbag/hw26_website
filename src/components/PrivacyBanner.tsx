import { useState, useEffect } from 'react'
import Button from './ui/Button'

export default function PrivacyBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem('privacy-accepted')
    if (!hasAccepted) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('privacy-accepted', 'true')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use minimal analytics to improve your experience. No tracking
          cookies are used beyond necessary analytics.{' '}
          <a href="#privacy" className="underline hover:text-primary-300">
            Learn more
          </a>
        </p>
        <Button onClick={handleAccept} variant="secondary" size="sm">
          I Understand
        </Button>
      </div>
    </div>
  )
}
