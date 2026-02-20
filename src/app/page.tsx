import HeroSection from "@/components/home/HeroSection";
import LifecycleFlowSection from "@/components/home/LifecycleFlowSection";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import ServicesSection from "@/components/home/ServicesSection";
import CostCalculator from "@/components/home/CostCalculator";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LifecycleFlowSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <CostCalculator />
      <CTASection />
    </>
  );
}
