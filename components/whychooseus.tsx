import Image from "next/image";

const testimonialSections = [
  {
    heading:
      "15,000+ Students Globally Love Learning With Us",

    cards: [
      {
        image: "/testimonials-student-1.webp",
        title: "Grade 6, Croatia",
      },
      {
        image: "/testimonials-student-2.webp",
        title: "Grade 10, Philippines",
      },
      {
        image: "/testimonials-student-3.webp",
        title: "Grade 10, Mexico",
      },
    ],
  },

  {
    heading:
      "2,500+ Student Athletes Choose Us to Balance Sports & Schooling",

    cards: [
      {
        image: "/athlete-video1.webp",
        title: "Grade 9, Spain",
      },
      {
        image: "/athlete-video-2.webp",
        title: "Grade 12, Oman",
      },
      {
        image: "/athlete-video-3.webp",
        title: "Grade 11, Australia",
      },
    ],
  },

  {
    heading:
      "Trusted & Recommended by Parents in 190+ Countries",

    cards: [
      {
        image: "/testimonials-parent-1.webp",
        title: "Parents From Kuwait",
      },
      {
        image: "/testimonials-parent-2.webp",
        title: "Parents From USA",
      },
      {
        image: "/testimonials-parent-3.webp",
        title: "Parents From UAE",
      },
    ],
  },
];

export default function() {
  return (
    <section className="mb-16">
      <div className="r-w mx-4">
        {testimonialSections.map((section, index) => {
          return (
            <div
              key={index}
              className="relative md:my-14 my-10"
            >
              <h3
                className="
                  text-xl
                  md:text-3xl
                  text-center
                  font-bold
                  text-[#027FFF]
                  mb-8
                "
              >
                {section.heading}
              </h3>

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-3
                  gap-6
                "
              >
                {section.cards.map((card, idx) => {
                  return (
                    <div
                      key={idx}
                      className="
                        group
                        rounded-2xl
                        overflow-hidden
                      "
                    >
                      <button
                        className="w-full cursor-pointer"
                        aria-label="Play video"
                      >
                        <div
                          className="
                            relative
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24" fill="#027FFF" 
                            stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" 
                            className="absolute duration-150 animate-pulse group-hover:animate-none group-hover:scale-105">
                              <polygon points="6 3 20 12 6 21 6 3"></polygon>
                            </svg>
                          {/* <Play
                            size={70}
                            fill="#027FFF"
                            color="white"
                            strokeWidth={1.5}
                            className="
                              absolute
                              z-10
                              animate-pulse
                              duration-200
                              group-hover:scale-110
                              group-hover:animate-none
                            "
                          /> */}

                          <Image
                            src={card.image}
                            alt={card.title}
                            width={500}
                            height={300}
                            className="
                              w-full
                              h-auto
                              rounded-2xl
                              border-2
                              border-[#027FFF]
                            "
                          />
                        </div>
                      </button>

                      <p
                        className="
                          text-center
                          bg-[#027FFF]
                          text-white
                          rounded-xl
                          py-2
                          px-4
                          w-max
                          mx-auto
                          mt-4
                          text-sm
                          font-medium
                        "
                      >
                        {card.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}