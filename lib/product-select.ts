import { db } from "@/db";
import { products } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export async function  getFeaturedProducts(){
    const product=await db.select().from(products).where(eq(products.status,"approved")).orderBy(desc(products.voteCount));
    console.log(product)
    return product;
}