import { CTASection } from "./components/home/CTASection";
import { FeatureSection } from "./components/home/FeatureSection";
import  HeroSection  from "./components/home/HeroSection";
import { LocationSection } from "./components/home/LocationSection";
import { PortfolioSection } from "./components/home/PortfolioSection";
import { ReviewsSection } from "./components/home/ReviewsSection";
import { ServiceSection } from "./components/home/ServiceSection";



export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <HeroSection />
          <ServiceSection />
          <FeatureSection />
          <PortfolioSection />
          <ReviewsSection />
          <LocationSection />
          <CTASection />
        </div>
      </main>
    </div>
  );
}
