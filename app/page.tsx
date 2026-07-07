import SectionHeader from "@/components/common/section-header";
import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import { StarIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts/>
    </div>
  );
}
