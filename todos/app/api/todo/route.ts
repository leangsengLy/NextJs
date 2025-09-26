import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
let Todos:Todo[] = [];
export async function GET(){
    console.log("Call 1")
    return NextResponse.json(Todos);
}

export async function POST(request:Request){
        const newId = uuidv4(); 
        const {title} = await request.json();
        if(title=="" || title==null) return NextResponse.json({message:"Title is required."},{ status: 400 });
        const data:Todo = {
            Id:newId,
            Title : title,
            Completed:false,
            Date : new Date(),
        }
        Todos.push(data);
        return NextResponse.json(data);
}

export async function DELETE(req:Request,res:NextApiResponse) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
    if(id=="" || id==null) return res.status(400).json({message:"id is required and bigger than 0."})
    var find:Todo[] = Todos.filter(s=>s.Id==id);
    console.log("find",find)
    if(find.length==0) return res.status(400).json({message:"Todo not found!"});
    Todos = Todos.filter(s=>s.Id!=id);
    return NextResponse.json({message:"Delete todo successfuly!"});
}

export async function PUT(req:Request,res:NextApiResponse) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const isComplete = searchParams.get("isComplete");
  console.log("get",isComplete)
    if(id=="" || id==null) return NextResponse.json({message:"id is required and bigger than 0."})
    var find:Todo[] = Todos.filter(s=>s.Id==id);
    console.log("find",find)
    console.log("is Check",Boolean(isComplete))
    if(find.length==0) return NextResponse.json({message:"Todo not found!"});
    Todos = Todos.map(val=>{
        if(val.Id==id) val.Completed = isComplete=="true"; 
        return val;
    })
    return NextResponse.json({message:"Update todo successfuly!"});
}