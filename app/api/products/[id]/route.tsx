import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(request: NextRequest,{params}:{params:{id:number}}){
    if(params.id>10){
        return NextResponse.json({error:"Product Not Found"},{status:400})
    }
 return NextResponse.json([
    {id:1, name:"Milk", price:300},
    {id:2, name:"Bread", price:600}
 ])
}

export async function POST( request: NextRequest,{params}:{params:{id:number}} ){
    const body= await request.json();
    const validation=schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400})
    }
    if(params.id>10){
        return NextResponse.json({error:"product not found"},{status:400})
    }
        
    return NextResponse.json({id:3, name:body.name, price:body.price},{status:201})
}

export function DELETE(request:NextRequest, {params}:{params:{id: number}}) {
    if(params.id>10)
        return NextResponse.json({error:"Product Not Found"},{status:400})
  
    return NextResponse.json({})
}

export async function PATCH(request:NextRequest, {params}:{params:{id: number}}){
    const body= await request.json();
    const validation=schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400})
    }
    if(params.id>10){
        return NextResponse.json({error:"product not found"},{status:400})
    }
    const updatedProduct={
        ...validation.data,
    }
    return NextResponse.json({message:"Product Updated Successfully",product:updatedProduct},{status:201})
}
