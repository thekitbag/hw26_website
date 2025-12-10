import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/sections/HeroSection'
import ProofPointsSection from '../components/sections/ProofPointsSection'
import SegmentsSection from '../components/sections/SegmentsSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import ExamplesSection from '../components/sections/ExamplesSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import PricingSection from '../components/sections/PricingSection'
import FAQSection from '../components/sections/FAQSection'
import SignupSection from '../components/sections/SignupSection'
import ContactSection from '../components/sections/ContactSection'
import SEO from '../components/SEO'

export default function HomePage() {
  return (
    <>
      <SEO
        title="Harkwise - Simple Customer Feedback for Offline Businesses"
        description="Turn every customer into your next with Harkwise. Get actionable feedback from your offline customers with simple QR codes. No apps. No hassle."
        keywords="customer feedback, QR code feedback, offline business, restaurant feedback, cafe feedback, salon feedback"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ProofPointsSection />
          <HowItWorksSection />
          <SegmentsSection />
          <ExamplesSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <SignupSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
