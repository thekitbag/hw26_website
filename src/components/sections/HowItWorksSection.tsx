import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import content from '../../content/website.json'
import posterScreenshot from '../../assets/posterscreenshot.png'
import appScreenshot from '../../assets/appscreenshot.png'
import portalScreenshot from '../../assets/portalscreenshot.png'
import emailScreenshot from '../../assets/emailscreenshot.png'

const imageMap = {
  printer: posterScreenshot,
  scan: appScreenshot,
  chart: portalScreenshot,
  email: emailScreenshot,
}

const screenshotDescriptions = {
  printer: 'Your branded QR poster, ready to print',
  scan: 'Simple feedback form on any phone',
  chart: 'Your live insights dashboard',
  email: 'Weekly email with actionable insights',
}

export default function HowItWorksSection() {
  const { howItWorks } = content

  return (
    <Section id="how-it-works" background="white">
      <SectionHeader
        title={howItWorks.title}
        subtitle="Get up and running in minutes"
      />

      <div className="max-w-6xl mx-auto space-y-16">
        {howItWorks.steps.map((step, index) => {
          const imageSrc = imageMap[step.icon as keyof typeof imageMap]
          const imageDesc =
            screenshotDescriptions[step.icon as keyof typeof imageMap]
          const isEven = index % 2 === 0

          return (
            <div
              key={step.number}
              className={`flex flex-col ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Content Side */}
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 shadow-lg">
                  <div className="rounded-lg overflow-hidden bg-white border border-gray-100">
                    <img
                      src={imageSrc}
                      alt={imageDesc}
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center mt-3">
                    {imageDesc}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
