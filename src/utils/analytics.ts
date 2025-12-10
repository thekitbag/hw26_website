// Analytics utility functions

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      config?: Record<string, unknown>,
    ) => void
  }
}

interface AnalyticsEvent {
  event: string
  category: string
  action: string
  label?: string
  value?: number
}

export const trackEvent = ({
  event,
  category,
  action,
  label,
  value,
}: AnalyticsEvent) => {
  // TODO: Integrate with actual analytics service (Google Analytics, Plausible, etc.)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }

  // For now, just log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', { event, category, action, label, value })
  }
}

// Track CTA clicks
export const trackCTAClick = (ctaLocation: string) => {
  trackEvent({
    event: 'cta_click',
    category: 'Engagement',
    action: 'CTA Click',
    label: ctaLocation,
  })
}

// Track signup attempts
export const trackSignupAttempt = () => {
  trackEvent({
    event: 'signup_attempt',
    category: 'Conversion',
    action: 'Signup Attempt',
    label: 'Email Capture',
  })
}
