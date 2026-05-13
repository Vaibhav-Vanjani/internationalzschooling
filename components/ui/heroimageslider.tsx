"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = ["/1.webp", "/2.webp", "/3.webp"];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
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
        src={slides[current]}
        alt="slider-image"
        fill
        priority={current === 0}
        fetchPriority={current === 0 ? "high" : "auto"}
        loading={current === 0 ? "eager" : "lazy"}
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}