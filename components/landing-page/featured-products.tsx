
import { Button } from "../ui/button"
import SectionHeader from "../common/section-header"
import {  ArrowUpRight, StarIcon } from "lucide-react"
import Link from "next/link"
import ProductCard from "../products/product-card"
const featuredProduct=[
    { id:1,
      name:"Parity Kit",
      description:"A toolkit for creating parity products",
      tags:["Saas","Productivity","Global"],
      votes:615,
      isFeatured:true
    },
    { id:2,
      name:"Developer to leader",
      description:"A course on Engineering leadership",
      tags:["Course","Leadership"],
      votes:222,
      isFeatured:true
    },
]
export default function  FeaturedProducts(){
    return (
        <section className="py-20 bg-muted/20">

       <div className="wrapper max-w-7xl ">
        <div className="flex justify-between items-center mb-8">
            <SectionHeader title="Featured Today" icon={StarIcon} description="Top picks from our community this week"/>
            <Button variant={"outline"} className="hidden sm:flex" render={<Link href="/explore"/>}>View all <ArrowUpRight/></Button>
        </div>
        <div className="grid-wrapper">
        {featuredProduct.map((product)=>
        <ProductCard key={product.id} product={product}/>    
        )}
        </div>
       </div> 
        </section>
    )
}