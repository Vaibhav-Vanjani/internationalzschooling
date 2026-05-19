"use client";

import Image from "next/image";
import { memo, useEffect, useState } from "react";

const slides = ["/1.webp", "/2.webp", "/3.webp"];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        relative
        w-full
        h-[53vh]
        overflow-hidden
      "
    >
      {slides.map((slide, index) => (
        <Image
          key={slide}
          src={slide}
          alt={`slider-image-${index + 1}`}
          fill
          sizes="100vw"
          priority={index === 0}
          quality={75}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          className={`
            object-cover
            absolute
            inset-0
            transition-opacity
            duration-700
            will-change-opacity
            ${
              current === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }
          `}
        />
      ))}
    </div>
  );
}

export default memo(ImageSlider);