import SectionHeader from "@/components/common/section-header";
import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products";
import { StarIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts/>
      <RecentlyLaunchedProducts/>
    </div>
  );
}
