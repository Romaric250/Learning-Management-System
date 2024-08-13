import { NextResponse } from "next/server";


import { db } from "@/lib/db";


export async function GET(req:Request){
    try {


        const getusers = await db.user.findMany()


    if(!getusers){
        return new NextResponse("No user found", {status:404})
    }

    return new NextResponse(JSON.stringify(getusers), {status:200})


        
    } catch (error:any) {
        console.log(error.message)
        return new NextResponse("An internal server error occured", {status:500})
        
    }
}


export async function POST(req:Request){
    try {
        const {name, email, password} = await req.json()

        if(!name || !email || !password){
            return new NextResponse("Please fill in all fields", {status:400})
        }

        const createUser = await db.user.create({
            data:{
                name,
                email
                
            }
        })

        return new NextResponse(JSON.stringify(createUser), {status:201})
        
    } catch (error:any) {
        console.log(error.message)
        return new NextResponse("An internal server error occured", {status:500})
        
    }
}