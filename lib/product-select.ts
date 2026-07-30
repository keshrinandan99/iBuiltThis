import { db } from "@/db";
import { products } from "@/db/schema";

export async function  getFeaturedProducts(){
    const product=await db.select().from(products);
    console.log(product)
    return product;
}