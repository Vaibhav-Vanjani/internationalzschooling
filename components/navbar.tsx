"use client";

import { useState, useCallback, memo } from "react";
import Image from "next/image";

import Navdropdown from "./ui/navdropdown";
import Button from "./ui/button";
import Accordion from "./ui/accordion";

import { navbuttons } from "@/components/constants/navbar";

const MobileMenu = memo(function MobileMenu({
  open,
}: {
  open: boolean;
}) {
  return (
    <div
      className={`
        fixed
        top-[90px]
        left-0
        h-[calc(100vh-90px)]
        w-full
        overflow-y-auto
        bg-[#F7FBFF]
        border-t
        border-[#E6EDF5]
        transition-transform
        duration-300
        ease-in-out
        will-change-transform
        z-50
        lg:hidden
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="py-4">
        {navbuttons.map((item) => (
          <Accordion
            key={item.title}
            title={item.title}
            para={item.hoverList}
            questionMark={undefined}
          />
        ))}
      </div>
    </div>
  );
});

export default function Navbar() {
  const [mobileDropDown, setMobileDropDown] = useState(false);

  const toggleMenu = useCallback(() => {
    setMobileDropDown((prev) => !prev);
  }, []);

  return (
    <>
      <nav
        className="
          sticky
          top-0
          z-[999]
          w-full
          bg-[#F7FBFF]
          border-b
          border-[#E6EDF5]
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            h-[90px]
            flex
            items-center
            justify-between
            gap-6
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-10">
            <Image
              src="/logo.webp"
              alt="International Z Schooling Logo"
              width={330}
              height={80}
              priority
              quality={60}
              className="
                object-contain
                w-[220px]
                sm:w-[260px]
                lg:w-[330px]
                h-auto
              "
            />
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navbuttons.map((item, index) => (
              <Navdropdown
                key={item.title}
                item={item}
                itemId={index}
              />
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center shrink-0 gap-3">
            <Button />

            {/* MOBILE MENU BUTTON */}
            <button
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="
                flex
                lg:hidden
                items-center
                justify-center
                w-10
                h-10
              "
            >
              {!mobileDropDown ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#027DFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#027DFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <MobileMenu open={mobileDropDown} />
    </>
  );
}