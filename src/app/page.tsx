import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturesSection from "@/components/home/FeaturesSection";
import ClientsSection from "@/components/home/ClientsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeaturesSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
