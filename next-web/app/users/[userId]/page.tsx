import { Metadata } from "next";
import { notFound } from "next/navigation";

async function getUser(id:string){
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!data.ok) return null;
    return await data.json();
}

export const metadata: Metadata = {
  title: "Users",
  description: "Our Users List",
};

export default async function PageDetail({params}:{params:Promise<{userId:string}>}){
    const {userId} = await params;
    const res = await getUser(userId)
    console.log("detail : ",res)
    if(res===null){
        notFound();
    }

    return (
        <> {res!==null ?(<> <div>{res?.name}</div>
            <div>{res?.email}</div>
            <div>{res?.phone}</div>
            <div>{res?.username}</div></>):(<>No Data Found</>)}
           
        </>
    )
}