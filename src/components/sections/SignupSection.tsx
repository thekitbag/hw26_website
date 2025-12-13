import { useState, FormEvent } from 'react'
import Section from '../ui/Section'
import Button from '../ui/Button'
import { trackSignupAttempt } from '../../utils/analytics'
import content from '../../content/website.json'

export default function SignupSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { cta } = content

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Track signup attempt
    trackSignupAttempt()

    try {
      // Submit to Formspree
      // To use: Set VITE_FORMSPREE_FORM_ID in .env file
      // Get your form ID from https://formspree.io/
      const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID || 'YOUR_FORM_ID'

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          _subject: 'New Harkwise Trial Signup',
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
      } else {
        throw new Error('Submission failed')
      }
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section id="signup" background="primary">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Start your 14-day trial today. No credit card required.
        </p>

        {!submitted ? (
          <>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={loading}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Email address"
              />
              <Button type="submit" size="md" className={loading ? 'opacity-75 cursor-wait' : ''}>
                {loading ? 'Submitting...' : cta.primary}
              </Button>
            </form>
            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 max-w-md mx-auto">
                {error}
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-lg p-6 shadow-md max-w-md mx-auto">
            <h3 className="text-xl font-bold text-primary-600 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-700">
              We've received your information. Check your email for next steps
              to get started with Harkwise.
            </p>
          </div>
        )}

        <p className="text-sm text-gray-600 mt-4">
          Free forever for up to 50 responses/month. Upgrade anytime.
        </p>
      </div>
    </Section>
  )
}
