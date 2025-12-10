import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import pricingContent from '../../content/pricing.json'

export default function FAQSection() {
  const { faq } = pricingContent
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section background="gray">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Harkwise"
      />

      <div className="max-w-3xl mx-auto">
        {faq.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg mb-4 overflow-hidden shadow-sm"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold text-gray-900 pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
