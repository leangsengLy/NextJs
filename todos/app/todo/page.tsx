"use client"

import { useEffect, useState } from "react";
import {useStoreTheme} from "../../store/theme"
import Link from "next/link";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { Checkbox } from "@nextui-org/react";
import moment from 'moment';

export default function TodoPage(){
    const [todo,setTodo] = useState("")
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const [list,setList] = useState<Todo[]>([])
    const bear = useStoreTheme((st:any)=>st.bears)
    let isDark = useStoreTheme((st:any)=>st.isDark);
    async function GetListTodo() {
        const res = await fetch("http://localhost:3000/api/todo");
        const todos: Todo[] = await res.json();
        console.log("llist",todos);
        setIsLoading(false)
        return todos;
    }
    const onClickTheme=()=>{
        console.log("click theme")
        useStoreTheme.getState().setIsDark(!useStoreTheme.getState().isDark);
    }
    const onClickAdd=()=>{
        useStoreTheme.getState().increasePopulation();
    }
    const onSelectKey=async(e:any)=>{
        let lists: Todo[] = await GetListTodo();
        if(e=="incomplete") lists = lists.filter(s=>!s.Completed);
        else if(e=="complete")lists = lists.filter(s=>s.Completed);
        setList(lists);
    }
    useEffect(()=>{
        const fetchTodos = async () => {
            const lists: Todo[] = await GetListTodo();
            setList(lists);
        };
        setIsLoading(true)
        fetchTodos();
    },[])
    const onSetTodo=(e:any)=>{
        setTodo(val=>val=e.target.value)
    }
    const onKeyDown=async(e:any)=>{
        if(e.key=="Enter"){
            const res = await fetch("http://localhost:3000/api/todo",{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({title:todo})
            })
            console.log(res)
            if (!res.ok) {
               console.log(res)
            }else {
                setTodo("")
                const lists: Todo[] = await GetListTodo();
                setList(lists);
            }
        }
    }
    const checkData=()=>{
        console.log("your data: ",list)
    }
    const changeStatus=async(index:number)=>{
        // setList(list.map((todo:Todo,i) =>
        //     i === index ? { ...todo, Completed: !todo.Completed } : todo
        // ));
        const res = await fetch(`http://localhost:3000/api/todo?id=${list[index].Id}&isComplete=${!list[index].Completed}`,{method:"PUT"})
        if (!res.ok) console.log(res)
        else {
            const lists: Todo[] = await GetListTodo();
            setList(lists);
        }
    }
    const deleteTodo=async(Id:string)=>{
        const res = await fetch(`http://localhost:3000/api/todo?id=${Id}`,{method:"DELETE"})
        if (!res.ok) console.log(res)
        else {
            const lists: Todo[] = await GetListTodo();
            setList(lists);
        }
    }
    return (
        <div className="flex flex-col gap-y-3 mx-auto max-w-[500px] pb-[30px] relative items-center h-screen pt-[20px] ">
            <div><h1 className="font-bold text-[30px]">TODO 🫠</h1></div>
            <div className="flex gap-x-2">
                <input type="text" onChange={onSetTodo} value={todo} onKeyDown={onKeyDown} className="border border-gray-300 rounded-xl px-3 py-2 w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Add a new todo..." />
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
                 {/* <Button color="primary">Button</Button> */}
                <div onClick={onClickTheme} className="w-[50px] h-[50px] flex justify-center cursor-pointer items-center rounded-xl bg-[#6c63ff]"><i className={`${isDark?"ri-sun-line ":"ri-moon-line"} text-[20px]`}></i></div>
            </div>
            <div className={`flex ${ list.length>0?` flex-col pt-[20px] px-6`:`justify-center items-center`} w-full h-full border border-[#ffffff1e] rounded-2xl`}>
                {
                    list.length>0?(<>{list.map((val,index)=>{
                        return (<>
                            {index==0?<div className="font-bold" onClick={checkData}>Task</div>:(<></>)} 
                            <div className="flex justify-between px-2 items-center py-3 border-b border-b-[#ffffff39]">
                                <div className="flex gap-x-3 items-center">
                                    <input type="checkbox" checked={val.Completed} onChange={()=>{changeStatus(index)}}/>
                                   <div>
                                    <div className={`${val.Completed?` line-through `:``}`}>{val.Title}</div>
                                    <div className="text-[13px] text-[#e1e1e160]">{moment(val.Date).format("MMMM D, YYYY h:mm A")}</div>
                                   </div>
                                </div>
                                <div className="flex gap-x-3">
                                    <i className="cursor-pointer hover:text-gray-400 ri-pencil-fill"></i>
                                    <i onClick={()=>{deleteTodo(val.Id)}}  className="cursor-pointer hover:text-red-400 ri-delete-bin-line"></i>
                                </div>
                            </div>
                        </>)
                    })}</>):(<>{isLoading?(<>Loading ...</>):<div className="!px-[40px] !py-[10px] rounded-2xl bg-[#e5e5e531]">No data available</div>}</>)
                }
            </div>
            <div onClick={onClickAdd} className="w-[50px] absolute bottom-[70px] right-[30px] h-[50px] flex justify-center cursor-pointer items-center rounded-full bg-[#6c63ff]"><i className="ri-add-line text-[30px]"></i></div>
        </div>
    )
}