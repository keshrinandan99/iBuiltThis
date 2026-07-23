import SectionHeader from "@/components/common/section-header";
import { Calendar, CalendarIcon, RocketIcon } from "lucide-react";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";

const recentlyLaunchedProducts = [
    {
      id: "launch-1",
      slug: "launch-1",
      name: "Launchpad Dashboard",
      description: "A unified dashboard for early-stage product launches.",
      tags: ["Launch", "Dashboard"],
      votes: 85,
      isFeatured: false,
    },
    {
      id: "launch-2",
      slug: "launch-2",
      name: "Founder CRM",
      description: "A lightweight CRM built for founders and small teams.",
      tags: ["CRM", "Startup"],
      votes: 112,
      isFeatured: true,
    },
];

export default function RecentlyLaunchedProducts() {
    const hasProducts = recentlyLaunchedProducts.length > 0;

    return (
        <section className="py-20">
            <div className="wrapper max-w-7xl">
                <SectionHeader
                    title="Recently Launched"
                    icon={RocketIcon}
                    description="Check out the latest products launched by our community"
                />

                {hasProducts ? (
                    <div className="grid-wrapper mt-8">
                        {recentlyLaunchedProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-8">
                        <EmptyState message="No product launched in last week. Check back soon for new launches." />
                    </div>
                )}
            </div>
        </section>
    );
}