import { useReveal } from "@/hooks/useReveal";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProofStrip from "@/components/landing/ProofStrip";
import ProblemSection from "@/components/landing/ProblemSection";
import WhatWeDoSection from "@/components/landing/WhatWeDoSection";
import FreeOfferSection from "@/components/landing/FreeOfferSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PaidOfferSection from "@/components/landing/PaidOfferSection";
import WhoItsForSection from "@/components/landing/WhoItsForSection";
import WhyNowSection from "@/components/landing/WhyNowSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FormSection from "@/components/landing/FormSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProofStrip />
        <ProblemSection />
        <WhatWeDoSection />
        <FreeOfferSection />
        <HowItWorksSection />
        <PaidOfferSection />
        <WhoItsForSection />
        <WhyNowSection />
        <FAQSection />
        <FinalCTASection />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
