import { Star } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import content from '../../content/homepage.json'

export default function TestimonialsSection() {
  const { testimonials } = content['social-proof']

  return (
    <Section background="white">
      <SectionHeader
        title="Loved by Small Businesses"
        subtitle="Here's what our customers have to say"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              "{testimonial.quote}"
            </p>

            <div>
              <div className="font-semibold text-gray-900">
                {testimonial.author}
              </div>
              <div className="text-gray-600 text-sm">
                {testimonial.business}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
