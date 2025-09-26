"use client"

import { useState } from "react";
import {useStoreTheme} from "../../store/theme"
import Link from "next/link";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
async function GetListTodo() {
    const res = await fetch("http://localhost:3000/api/todo");
    const todos: Todo[] = await res.json();
    console.log("llist",todos);
    return todos;
}
const onClickTheme=()=>{
    console.log("click theme")
    useStoreTheme.getState().setIsDark(!useStoreTheme.getState().isDark);
}
const onClickAdd=()=>{
    useStoreTheme.getState().increasePopulation();
}
const onSelectKey=(e:any)=>{
    console.log(e)
}

export default function TodoPage(){
    const [title,setTitle] = useState("")
    const bear = useStoreTheme((st:any)=>st.bears)
    let isDark = useStoreTheme((st:any)=>st.isDark);
    const todos =  GetListTodo();
    return (
        <div className="flex flex-col mx-auto max-w-[500px] relative items-center h-screen pt-[20px] ">
            <div><h1 className="font-bold text-[30px]">MY TODO LIST {bear}</h1></div>
            <div className="flex gap-x-2">
                <input type="text" className="border border-gray-300 rounded-xl px-3 py-2 w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Add a new todo..." />
                <Dropdown backdrop="blur"> 
                    <DropdownTrigger>
                        <Button variant="bordered">Status</Button>
                    </DropdownTrigger>
                    <DropdownMenu  onAction={onSelectKey} aria-label="Static Actions">
                        <DropdownItem key="all">All</DropdownItem>
                        <DropdownItem key="complete">Complete</DropdownItem>
                        <DropdownItem key="incomplete">InComplete</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                 <Button color="primary">Button</Button>
                <div onClick={onClickTheme} className="w-[50px] h-[50px] flex justify-center cursor-pointer items-center rounded-xl bg-[#6c63ff]"><i className={`${isDark?"ri-sun-line ":"ri-moon-line"} text-[20px]`}></i></div>
            </div>
             {/* <Link href={"/store"}>Go to Store</Link> */}
                <div onClick={onClickAdd} className="w-[50px] absolute bottom-8 right-1.5 h-[50px] flex justify-center cursor-pointer items-center rounded-full bg-[#6c63ff]"><i className="ri-add-line text-[30px]"></i></div>
        </div>
    )
}