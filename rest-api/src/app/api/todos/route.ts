import { NextResponse } from "next/server";
const URL = "http://jsonplaceholder.typicode.com/todos";

export async function GET(){
    const result = await fetch(URL);
    console.log(result);
    const todos:Todo[] = await result.json();
    return NextResponse.json(todos);
}

export async function DELETE(req:Request){
    const {id} = await req.json();
    if(!id) return NextResponse.json({message:"Id is required to delete a todo"});
    const result = await fetch(`${URL}/${id}`,{
        method:"DELETE"
    });
    console.log(result);
    return NextResponse.json({message:`Todo with id ${id} deleted`});
}