import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest,{params}:{params:{id:string}}){

    const products = await prisma.product.findUnique({
        where:{id:parseInt(params.id)}
    })
    if(!products){
        return NextResponse.json({error:"Product Not Found"},{status:400})
    }
 return NextResponse.json(products)
}

export async function PUT(request:NextRequest ,{params}:{params:{id:string}}){
    const body= await request.json();
    const validation=schema.safeParse(body)
    if(!validation.success){
     return NextResponse.json(validation.error.errors,{status:400})
    }
    
    const product= await prisma.product.findUnique({
        where:{id:parseInt(params.id)}
    })
    
    if(!product){
        return NextResponse.json({error:"product not found"},{status:400})
    }

    const updatedProduct = await prisma.product.update({
        where:{id:product.id},
        data :{
            name:body.name,
            price:body.price
        }
    }
       
    )
     return NextResponse.json(updatedProduct,{status:201});
 }


export function DELETE(request:NextRequest, {params}:{params:{id: string}}) {

    const product= prisma.product.findUnique({
        where:{id:parseInt(params.id)}
    })
    if(!product)
        return NextResponse.json({error:"Product Not Found"},{status:400})
  
    const deletedProduct= prisma.product.delete({
        where:{id:parseInt(params.id)}
    })

    return NextResponse.json("product deleted successfully")
}


