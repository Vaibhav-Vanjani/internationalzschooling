"use client";

import { useState } from "react";

export default function({title,para,questionMark}:{title:string,para:string[],questionMark:boolean | undefined}){
    const [accordion,setAccordion] = useState(false);
    return <div className="bg-white m-5 p-0">
        <div className="flex justify-between p-2 items-center mx-2" onClick={()=>setAccordion(prev=>!prev)}>
           
            <div className="flex gap-2 items-center font-bold text-xl">
                 {
                    questionMark && <span><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                    >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                    </svg></span>
                    }

                <span>{title}</span>
            </div>
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
            return <div key={index} className={`px-2 mx-6 text-[#5D5D5D] ${questionMark ? "mx-10" : ""}`}>{item}</div>
        })}</div>}
        {questionMark && <hr/>}
    </div>
}