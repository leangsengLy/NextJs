"use client"

import { useState } from "react";

async function PostDataApi() {
    const res = await fetch(`/api/hello`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({gender:"Male",name:"John",englishName:"John LyZEE"})
    })
    console.log("res",res)
    return await res.json();
}
export default  function Friend() {
    const [res,setRes]  = useState<any>(null);
    const onClick = async()=>{
        var data = await PostDataApi();
        setRes(data)
    }
    return (<>
    <div>
        Friend Page <h1 className="font-bold">{res?.data?.Name} - {res?.data?.EnglishName}</h1>
        <button onClick={onClick} className="p-2 bg-blue-400 text-white rounded">Click Me to Post Data</button>
    </div>
    </>)
}