import { NextResponse } from "next/server";
const Todos:Todo[] = [];
export async function GET(){
    return NextResponse.json(Todos);
}