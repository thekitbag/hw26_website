import { useState, FormEvent } from 'react'
import Section from '../ui/Section'
import Button from '../ui/Button'
import { trackSignupAttempt } from '../../utils/analytics'
import content from '../../content/website.json'

export default function SignupSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { cta } = content

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Track signup attempt
    trackSignupAttempt()
    // TODO: Integrate with actual signup/onboarding flow
    console.log('Signup email:', email)
    setSubmitted(true)
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
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              aria-label="Email address"
            />
            <Button type="submit" size="md">
              {cta.primary}
            </Button>
          </form>
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
