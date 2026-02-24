import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import SolutionSection from '@/components/landing/SolutionSection';
import ResultsSection from '@/components/landing/ResultsSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import PricingSection from '@/components/landing/PricingSection';
import FAQSection from '@/components/landing/FAQSection';
import Footer from '@/components/landing/Footer';
import ScrollToTop from '@/components/landing/ScrollToTop';
import ChatWidget from '@/components/landing/ChatWidget';

const Index = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ResultsSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <ScrollToTop />
      <ChatWidget />
    </main>
  );
};

export default Index;
