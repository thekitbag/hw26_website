import posthog from 'posthog-js'

export const initPostHog = () => {
  const posthogKey = import.meta.env.VITE_POSTHOG_KEY
  const isProduction = import.meta.env.PROD

  // Only initialize PostHog in production
  // In development, events will only be logged to console
  if (posthogKey && typeof window !== 'undefined' && isProduction) {
    posthog.init(posthogKey, {
      api_host: 'https://eu.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
    })
  }
}

export const isPostHogEnabled = () => {
  return import.meta.env.PROD && import.meta.env.VITE_POSTHOG_KEY
}

export { posthog }
