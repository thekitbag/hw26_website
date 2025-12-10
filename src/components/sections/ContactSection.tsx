import { Mail, Phone } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import siteContent from '../../content/site.json'

export default function ContactSection() {
  return (
    <Section id="contact" background="white">
      <SectionHeader
        title="Get in Touch"
        subtitle="Have questions? We're here to help"
      />

      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href={`mailto:${siteContent.site.email}`}
            className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Email Us</div>
              <div className="text-gray-600">{siteContent.site.email}</div>
            </div>
          </a>

          <a
            href={`tel:${siteContent.site.phone}`}
            className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Call Us</div>
              <div className="text-gray-600">{siteContent.site.phone}</div>
            </div>
          </a>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>
            We typically respond within 24 hours during business days (Monday -
            Friday, 9am - 5pm EST)
          </p>
        </div>
      </div>
    </Section>
  )
}
