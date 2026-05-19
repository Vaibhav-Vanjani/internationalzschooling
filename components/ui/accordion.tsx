"use client";

import { memo, useCallback, useState } from "react";

interface AccordionProps {
  title: string;
  para: string[];
  questionMark?: boolean;
}

function Accordion({
  title,
  para,
  questionMark = false,
}: AccordionProps) {
  const [open, setOpen] = useState(false);

  const toggleAccordion = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className="bg-white mx-5 my-4 overflow-hidden rounded-md">
      {/* HEADER */}
      <button
        type="button"
        onClick={toggleAccordion}
        className="
          w-full
          flex
          items-center
          justify-between
          px-4
          py-3
          text-left
        "
      >
        <div className="flex items-center gap-2 font-bold text-lg sm:text-xl">
          {questionMark && (
            <span className="shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </span>
          )}

          <span>{title}</span>
        </div>

        {/* ARROW */}
        <svg
          className={`
            w-4
            h-4
            shrink-0
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* CONTENT */}
      <div
        className={`
          grid
          transition-all
          duration-300
          ease-in-out
          ${
            open
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div
            className={`
              pb-4
              px-4
              text-[#5D5D5D]
              space-y-2
              ${questionMark ? "ml-8" : ""}
            `}
          >
            {para.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>

      {questionMark && <hr className="border-gray-200" />}
    </div>
  );
}

export default memo(Accordion);