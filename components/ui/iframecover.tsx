"use client";

import Image from "next/image";
import { useState } from "react";

export default function Video() {
  const [play, setPlay] = useState(false);

  return (
    <div className="flex justify-center relative w-full aspect-video overflow-hidden md:w-1/2 rounded-xl ">
      {!play ? (
        <button
          onClick={() => setPlay(true)}
          className="group relative w-full h-full"
        >
          <div>
          <Image
            src="/thumbnail-ceremony.webp"
            alt="video thumbnail"
            fill
            className="object-cover"
          />
          </div>

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="65"
              viewBox="0 0 24 24"
              fill="#027FFF"
              stroke="#fff"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="
                lucide
                lucide-play
                duration-150
                animate-pulse
                group-hover:animate-none
                group-hover:scale-105
              "
            >
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
          </div>
        </button>
      ) : (
        <iframe
          className="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/mRtaizbaR44?autoplay=1&rel=0&modestbranding=1"
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
}