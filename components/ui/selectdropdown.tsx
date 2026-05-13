"use client";

import { useState } from "react";

export default function() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Asia/Kolkata");

  const timezones = [
    "Asia/Kolkata",
    "Asia/Dubai",
    "Europe/London",
    "America/New_York",
    "America/Toronto",
    "Australia/Sydney",
  ];

  return (
    <div className="relative w-full text-xs">
      
      <div
        onClick={() => setOpen(!open)}
        className="react-select__control css-13cymwt-control border rounded-lg bg-white min-h-[42px] px-3 flex items-center justify-between cursor-pointer"
      >
        
        <div className="react-select__value-container flex-1">
          
          <div className="react-select__single-value text-sm">
            {selected}
          </div>
        </div>

        <div className="react-select__indicators">
          
          <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            className={`transition duration-200 ${
              open ? "rotate-180" : ""
            }`}
          >
            <path
              fill="currentColor"
              d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
            />
          </svg>
        </div>
      </div>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-xl border bg-white shadow-lg">
          
          {timezones.map((timezone, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(timezone);
                setOpen(false);
              }}
              className={`px-4 py-3 cursor-pointer transition hover:bg-blue-50 ${
                selected === timezone
                  ? "bg-blue-100 font-semibold text-blue-700"
                  : ""
              }`}
            >
              {timezone}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}