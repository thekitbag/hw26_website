import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import content from '../../content/website.json'
import portalScreenshot from '../../assets/portalscreenshot.png'
import posterScreenshot from '../../assets/posterscreenshot.png'
import emailScreenshot from '../../assets/emailscreenshot.png'

const imageMap = {
  dashboard: portalScreenshot,
  poster: posterScreenshot,
  report: emailScreenshot,
}

export default function ExamplesSection() {
  const { examples } = content

  return (
    <Section id="examples" background="gray">
      <SectionHeader title={examples.title} subtitle={examples.description} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {examples.items.map((item, index) => {
          const imageSrc = imageMap[item.type as keyof typeof imageMap]

          return (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
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
