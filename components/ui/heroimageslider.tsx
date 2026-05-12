"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageSlider() {
  const [imageSlide, setImageSlide] = useState(1);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      // fade out
      setFade(false);

      setTimeout(() => {
        setImageSlide((prev) => {
          if (prev === 3) {
            return 1;
          }

          return prev + 1;
        });

        // fade in
        setFade(true);
      }, 50);
    }, 1500);

    return () => clearInterval(id);
  }, []);

  return (
   <div
  className={`
    relative
    w-full
    h-[53vh]
    transition-opacity
    duration-500
    ${fade ? "opacity-100" : "opacity-10"}
  `}
>
  <Image
    src={`/${imageSlide}.webp`}
    alt="slider-image"
    fill
    priority
    className="object-cover"
  />
</div>
  );
}