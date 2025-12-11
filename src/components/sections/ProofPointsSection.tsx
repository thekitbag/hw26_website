import Section from '../ui/Section'
import content from '../../content/website.json'

export default function ProofPointsSection() {
  const { proofPoints } = content

  return (
    <Section background="white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {proofPoints.map((point, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              {point.stat}
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-2">
              {point.label}
            </div>
            <div className="text-gray-600">{point.description}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
