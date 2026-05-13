"use client";
import { useRouter } from "next/navigation";

export default function({routeTo,btnName}:{routeTo:string,btnName:string}){
    const router = useRouter();
    return <button className="flex gap-2 hover:underline" onClick={()=>{
        router.push(routeTo);
    }}><span>{btnName}</span><span>|</span> </button>
}