"use client";

import { memo, useCallback, useState } from "react";

interface NavItem {
  title: string;
  hoverList: string[];
}

interface NavDropdownProps {
  item: NavItem;
  itemId: number;
}

function Navdropdown({
  item,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div
      className="relative flex text-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* TRIGGER */}
      <div
        className="
          group
          flex
          cursor-pointer
          items-center
          gap-1
          text-[#0B1B35]
          transition-colors
          duration-200
          hover:text-[#0084FF]
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
          className={`
            w-4
            transition-transform
            duration-300
            will-change-transform
            ${open ? "rotate-180" : ""}
          `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {/* DROPDOWN */}
      <div
        className={`
          absolute
          left-0
          top-full
          mt-4
          min-w-[220px]
          rounded-lg
          border
          border-gray-200
          bg-white
          p-2
          shadow-lg
          transition-all
          duration-200
          will-change-transform
          z-50
          ${
            open
              ? "visible opacity-100 translate-y-0"
              : "invisible opacity-0 translate-y-2"
          }
        `}
      >
        {item.hoverList.map((obj) => (
          <div
            key={obj}
            className="
              rounded-md
              px-3
              py-2
              text-sm
              text-[#0B1B35]
              transition-colors
              duration-150
              hover:bg-blue-50
              hover:text-[#0084FF]
            "
          >
            {obj}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Navdropdown);