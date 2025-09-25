"use client"; 
import { useState } from "react"
import ButtonComponent from "./button";
import { Metadata } from "next";



export default function Contact(){
  const [count,setCount] = useState(0);
  console.log("Hey is this in the server or client?")
  const onClickCoutn=()=>{
    setCount(()=>{
      return count+1
    })
  }
  return (<>
  <div>
    <h1>Contact {count}</h1>
    <ButtonComponent/>
  </div></>)
}