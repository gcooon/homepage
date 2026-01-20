import HeroSection from "@/components/home/HeroSection";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import ServicesSection from "@/components/home/ServicesSection";
import CostCalculator from "@/components/home/CostCalculator";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <CostCalculator />
      <CTASection />
    </>
  );
}
