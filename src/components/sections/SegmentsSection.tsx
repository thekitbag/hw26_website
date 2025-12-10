import { Coffee, Utensils, Sparkles } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import content from '../../content/homepage.json'

const iconMap = {
  coffee: Coffee,
  utensils: Utensils,
  sparkles: Sparkles,
}

export default function SegmentsSection() {
  const { segments } = content

  return (
    <Section id="segments" background="gray">
      <SectionHeader
        title="Built for Your Business"
        subtitle="Tailored solutions for different types of offline businesses"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {segments.map((segment) => {
          const Icon = iconMap[segment.icon as keyof typeof iconMap]

          return (
            <div
              key={segment.id}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {segment.name}
              </h3>
              <p className="text-primary-600 font-semibold mb-4">
                {segment.tagline}
              </p>

              <ul className="space-y-2 mb-6">
                {segment.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 italic">{segment.example}</p>
              </div>

              <Button href="#signup" variant="outline" className="w-full">
                Get Started
              </Button>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
