import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import BenefitsSection from './components/BenefitsSection'
import TrustedGloballySection from './components/TrustedGloballySection'
import ProblemSection from './components/ProblemSection'
import ArchitectureSection from './components/ArchitectureSection'
import EliminatedSection from './components/EliminatedSection'
import LPEvsDaxSection from './components/LPEvsDaxSection'
import ComparisonTable from './components/ComparisonTable'
import UseCasesSection from './components/UseCasesSection'
import FeaturesGrid from './components/FeaturesGrid'
import DashboardShowcase from './components/DashboardShowcase'
import StatsBar from './components/StatsBar'
import PricingSection from './components/PricingSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <div className="min-h-full flex flex-col bg-white text-[#374151]">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <TrustedGloballySection />
        <ProblemSection />
        <ArchitectureSection />
        <EliminatedSection />
        <LPEvsDaxSection />
        <ComparisonTable />
        <UseCasesSection />
        <FeaturesGrid />
        <DashboardShowcase />
        <StatsBar />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
      <FloatingCTA />
    </div>
  )
}
