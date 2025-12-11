import { Check } from 'lucide-react'
import Button from '../ui/Button'
import content from '../../content/website.json'

export default function HeroSection() {
  const { hero, cta } = content

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="#signup" size="lg">
              {cta.primary}
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              {cta.secondary}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-700">
            {hero.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary-600" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
