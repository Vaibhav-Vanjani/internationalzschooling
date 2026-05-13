"use client";

import Image from "next/image";
import Navdropdown from "./ui/navdropdown";
import Button from "./ui/button";
import { useState } from "react";
import Accordion from "./ui/accordion";

const programsMenu = [
  "One-To-One Learning",
  "Group Learning",
  "Self Study Learning",
  "Self Study Plus Learning",
  "Single | Flexy Course",
  "English Learning Program",
  "Connect to Impact",
  "University Program",
  "Tutors Services",
  "AP Courses",
  "Dual Diploma Program",
  "Course Catalog",
  "Fee Structure",
  "Special Education",
  "School for Student Athletes",
  "Extra-Curriculars",
  "School for Adults",
  "Online Elementary School",
  "Online Middle School",
  "Online High School",
];

const aboutMenu = [
  "About Us",
  "Vision, Mission & Philosophy",
  "Head of School",
  "NEASC Accreditation",
  "WASC Accreditation",
  "Cognia Accreditation",
  "College Board",
  "NCAA, USA",
  "UNESCO, CID",
  "Changing Lives for the Best",
  "Technology Partners",
  "Testimonials",
  "Contact Us",
];

const resourcesMenu = [
  "Student Zone",
  "Teacher Zone",
  "Careers",
  "Partnership",
  "Clubs",
  "Events",
  "Press Release",
];

const navbuttons = [
  {
    title: "About",
    hoverList: aboutMenu,
  },
  {
    title: "Programs",
    hoverList: programsMenu,
  },
  {
    title: "Resources",
    hoverList: resourcesMenu,
  },
];

export default function Navbar() {
  const [mobileDropDown,setMobileDropDown] = useState(false);
  return (
    <>
    <nav
      className="
        sticky top-0 z-[999]
        w-full
        bg-[#F7FBFF]/95
        backdrop-blur-md
        border-b border-[#E6EDF5]
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-[90px]
          flex
          items-center
          justify-between
          gap-8 lg:justify-center
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-14">
          {/* logo */}
          <Image
            src="/logo.webp"
            alt="logo"
            width={330}
            height={80}
            priority
            className="object-contain"
          />

        </div>

        <div className="hidden lg:flex gap-8 ">
            {
                navbuttons.map((item,index)=>{
                    return <Navdropdown key={index} item={item} itemId={index}/>
                })
            }
        </div>

        <div className="flex shrink-0 gap-3">
          <Button/>
          {!mobileDropDown && <div className="flex lg:hidden" onClick={()=>{setMobileDropDown(true)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#027DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu swap-off"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
          </div>}
         {mobileDropDown && <div className="flex lg:hidden" onClick={()=>{setMobileDropDown(false)}}>
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#027DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x swap-on"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>  
          </div> } 
        </div>
      </div>
    </nav>
      {
      mobileDropDown && <>
        <div className="h-screen w-full overflow-y-auto z-10 relative bg-[#F7FBFF]/95 border border-[#F7FBFF]/95">
            { navbuttons.map((item,index)=>{
                    return <Accordion key={index} title={item.title} para={item.hoverList} questionMark={undefined}/>
                })}
          </div>
          
      </>
      }
    </>

  );
}