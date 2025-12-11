import { LayoutDashboard, FileText, Mail } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import content from '../../content/website.json'

const iconMap = {
  dashboard: LayoutDashboard,
  poster: FileText,
  report: Mail,
}

export default function ExamplesSection() {
  const { examples } = content

  return (
    <Section id="examples" background="gray">
      <SectionHeader title={examples.title} subtitle={examples.description} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {examples.items.map((item, index) => {
          const Icon = iconMap[item.type as keyof typeof iconMap]

          return (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <Icon className="w-20 h-20 text-primary-600 opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Want to see real examples from businesses like yours?
        </p>
        <a
          href="#signup"
          className="text-primary-600 hover:text-primary-700 font-semibold"
        >
          Get your free demo account →
        </a>
      </div>
    </Section>
  )
}
