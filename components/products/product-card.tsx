import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
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
            <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-[180px]">
               <CardHeader>
               <CardTitle>{product.name}</CardTitle> 
               {product.isFeatured && <Badge>Featured</Badge>}
                <CardDescription>
                    {product.description}
                </CardDescription>

               </CardHeader>
                <CardFooter >
                    <div className="flex items-center gap-2">
                    {product.tags.map((t)=><Badge variant="secondary"key={t}  >{t}</Badge>)}
                    </div>
                </CardFooter>

            </Card>
        </Link>
    )
}