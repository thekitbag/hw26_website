import { Shield } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import content from '../../content/website.json'

export default function TrustSection() {
  const { trust } = content

  return (
    <Section background="white">
      <SectionHeader title={trust.title} />

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trust.reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <p className="text-gray-700">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
