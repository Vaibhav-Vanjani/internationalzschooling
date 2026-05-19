"use client";

import Image from "next/image";
import { memo, useCallback, useState } from "react";

function Video() {
  const [play, setPlay] = useState(false);

  const handlePlay = useCallback(() => {
    setPlay(true);
  }, []);

  return (
    <div
      className="
        relative
        flex
        justify-center
        w-full
        md:w-1/2
        aspect-video
        overflow-hidden
        rounded-xl
        bg-black
      "
    >
      {!play ? (
        <button
          type="button"
          aria-label="Play video"
          onClick={handlePlay}
          className="
            group
            relative
            w-full
            h-full
          "
        >
          {/* THUMBNAIL */}
          <Image
            src="/thumbnail-ceremony.webp"
            alt="Graduation ceremony video thumbnail"
            fill
            priority={false}
            loading="lazy"
            quality={60}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="
              object-cover
              transition-transform
              duration-300
              group-hover:scale-[1.02]
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/25" />

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
                flex
                items-center
                justify-center
                w-16
                h-16
                rounded-full
                bg-[#027FFF]
                transition-transform
                duration-200
                will-change-transform
                group-hover:scale-105
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="#fff"
                stroke="#fff"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          className="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/mRtaizbaR44?autoplay=1&rel=0&modestbranding=1"
          title="Graduation Ceremony Video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default memo(Video);