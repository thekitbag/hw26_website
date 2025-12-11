import { Printer, ScanLine, BarChart3 } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import content from '../../content/website.json'

const iconMap = {
  printer: Printer,
  scan: ScanLine,
  chart: BarChart3,
}

export default function HowItWorksSection() {
  const { howItWorks } = content

  return (
    <Section id="how-it-works" background="white">
      <SectionHeader
        title={howItWorks.title}
        subtitle="Get up and running in minutes"
      />

      <div className="max-w-5xl mx-auto">
        {howItWorks.steps.map((step, index) => {
          const Icon = iconMap[step.icon as keyof typeof iconMap]
          const isLast = index === howItWorks.steps.length - 1

          return (
            <div key={step.number} className="relative">
              <div className="flex flex-col md:flex-row gap-6 mb-12">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {!isLast && (
                <div className="hidden md:block absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 -mb-12" />
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
