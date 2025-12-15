// Analytics utility functions
import { posthog, isPostHogEnabled } from '../lib/posthog'

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
  // Only send to PostHog in production
  if (typeof window !== 'undefined' && isPostHogEnabled()) {
    posthog.capture(event, {
      category,
      action,
      label,
      value,
    })
  }

  // Always log to console in development for testing
  if (import.meta.env.DEV) {
    console.log('📊 Analytics Event:', { event, category, action, label, value })
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
