import { Check } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import pricingContent from '../../content/pricing.json'

export default function PricingSection() {
  const { pricing } = pricingContent

  return (
    <Section id="pricing" background="white">
      <SectionHeader title={pricing.title} subtitle={pricing.subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricing.plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg p-8 ${
              plan.highlighted
                ? 'border-2 border-primary-600 shadow-xl scale-105'
                : 'border border-gray-200 shadow-md'
            }`}
          >
            {plan.highlighted && (
              <div className="bg-primary-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {plan.name}
            </h3>

            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-gray-600 ml-2">/{plan.period}</span>
              )}
            </div>

            <p className="text-gray-600 mb-6">{plan.description}</p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              href="#signup"
              variant={plan.highlighted ? 'primary' : 'outline'}
              className="w-full"
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  )
}
