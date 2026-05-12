"use client";

import Image from "next/image";
import Navdropdown from "./ui/navdropdown";
import Button from "./ui/button";

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
  return (
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
          justify-center
          gap-8
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

        <div className="flex gap-8">
            {
                navbuttons.map((item,index)=>{
                    return <Navdropdown key={index} item={item} itemId={index}/>
                })
            }
        </div>

        <div>
          <Button/>
        </div>
      </div>
    </nav>
  );
}