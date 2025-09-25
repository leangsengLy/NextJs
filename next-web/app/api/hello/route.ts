import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({message:"Hello World from Get"})
}
export async function POST(req:Request) {
    const {name,englishName,gender} = await req.json();
    return NextResponse.json({message:"Hello World from POST",data:{Name:name,EnglishName:englishName,Sex:gender}})
}