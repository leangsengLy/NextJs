import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "This is About Page",
};
export default async function About(){
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await data.json();
    console.log(res);
    return (
        <>
        <div>About Page</div>
        <div>
            {res.map((item:any)=>{
                return <h1>{item?.title}</h1>
            })}
        </div>
        </>
    )
}