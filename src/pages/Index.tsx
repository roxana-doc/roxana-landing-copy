import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueSection from "@/components/ValueSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import UseCasesCompact from "@/components/UseCasesCompact";
import FAQCompact from "@/components/FAQCompact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <ValueSection />
      <HowItWorks />
      <Features />
      <UseCasesCompact />
      <FAQCompact />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
