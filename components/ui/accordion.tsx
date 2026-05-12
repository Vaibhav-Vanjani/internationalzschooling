"use client";

import { useState } from "react";

export default function({title,para}:{title:string,para:string[]}){
    const [accordion,setAccordion] = useState(false);
    return <div className="bg-white m-5 p-0">
        <div className="flex justify-between p-2 items-center mx-2" onClick={()=>setAccordion(prev=>!prev)}>
            <div className="font-bold text-xl">{title}</div>
            <div><svg
                className={`w-4 h-4 transition-transform duration-300 ${
                    accordion ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg></div>
        </div>
        {accordion && <div>{para.map((item,index)=>{
            return <div key={index} className="px-2 mx-6 text-[#5D5D5D]">{item}</div>
        })}</div>}
    </div>
}