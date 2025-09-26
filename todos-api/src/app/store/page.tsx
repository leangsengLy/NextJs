"use client"
import { useStoreTheme } from "@/store/theme"
import Link from "next/link";

const IncreateMore=()=>{
    useStoreTheme.getState().increasePopulation();
}
const DescreaseMore=()=>{
    useStoreTheme.getState().removeAllBears();
}
const IncreateMore5=(value:number)=>{
    useStoreTheme.getState().getValue(value);
}

export default function CheckStore(){
    const bear = useStoreTheme((st:any)=>st.bears);
    return (
        <>
        <div>CheckStore</div>
        <div>{bear}</div>
        <Link href={"/todo"}>Go to Todo</Link>
        <button onClick={IncreateMore}>+</button>
        <button onClick={DescreaseMore}>-</button>
        <button onClick={()=>{IncreateMore5(200)}}>+200</button>
        </>
    )

}