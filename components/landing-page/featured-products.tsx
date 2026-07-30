
import { Button } from "../ui/button"
import SectionHeader from "../common/section-header"
import {  ArrowUpRight, StarIcon } from "lucide-react"
import Link from "next/link"
import ProductCard from "../products/product-card"
import { getFeaturedProducts } from "@/lib/product-select"

export default async function  FeaturedProducts(){
    const featuredProduct=await getFeaturedProducts();
    return (
        <section className="py-20 bg-muted/20">

       <div className="wrapper max-w-7xl ">
        <div className="flex justify-between items-center mb-8">
            <SectionHeader title="Featured Today" icon={StarIcon} description="Top picks from our community this week"/>
            <Button variant={"outline"} className="hidden sm:flex" render={<Link href="/explore"/>}>View all <ArrowUpRight/></Button>
        </div>
        <div className="grid-wrapper">
        {featuredProduct.map((p)=>
        <ProductCard key={p.id} product={p}/>    
        )}
        </div>
       </div> 
        </section>
    )
}