import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Freindly Users",
  description: "Our Users List",
};
export default async function User(){
     const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await data.json();
    console.log("user",res);
    return (
        <>
        <div>Users Page</div>
        <div>
            {res.map((item:any)=>{
                return (<><div> <Link href={`/users/${item.id}`}>{item?.name}</Link></div></>)
            })}
        </div>
        </>
    )
}