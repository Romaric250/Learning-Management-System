import { NextResponse } from "next/server";


import { db } from "@/lib/db";


export async function GET(req:Request){
    try {


        const getusers = await db.user.findMany()



        
    } catch (error:any) {
        console.log(error.message)
        return new NextResponse("An internal server error occured", {status:500})
        
    }
}