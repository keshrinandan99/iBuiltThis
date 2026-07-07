import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { Badge } from "../ui/badge"

interface Product{
    id:number,
    name:string,
    description:string,
    tags:string [],
    votes:number,
    isFeatured:boolean
}
export default function ProductCard({product}:{product:Product}){
    return (
        <Link href={`/products/${product.id}`}>
            <Card>
               <CardHeader>
                {product.name}
                <CardDescription>
                    {product.description}
                </CardDescription>
                <CardFooter>
                    {product.tags.map((t)=><Badge className="secondary"variant="outline" >{t}</Badge>)}
                </CardFooter>

               </CardHeader>
            </Card>
        </Link>
    )
}