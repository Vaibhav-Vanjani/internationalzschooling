"use client";

import { useState } from "react";

export default function({item,itemId}:{item:{title:string,hoverList:string[]},itemId:number}){  

    const [hover,setHover] = useState(false);
    return <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className="flex text-black">
                        <div
                            className="
                                group
                                flex items-center gap-1
                                cursor-pointer
                                text-[#0B1B35]
                                hover:text-[#0084FF]
                                transition-colors duration-200
                            "
                            >
                            <span className="font-medium">
                                {item.title}
                            </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="
                                w-4
                                transition-transform duration-300
                                group-hover:-translate-y-[2px]
                                group-hover:rotate-180
                                "
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                            </div>
                        {hover &&<div className="absolute mt-5 text-black border rounded bg-gray-50 p-2">
                            
                             {
                             item.hoverList.map((obj,index)=>{
                                return <div className="p-1" key={index}>{obj}</div>
                                })
                             }
                        </div>}
           </div>
}