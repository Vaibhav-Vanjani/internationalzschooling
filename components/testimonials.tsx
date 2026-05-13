import Image from "next/image";
import Link from "next/link";

const successStories = [
  {
    id: 1,
    image: "/1 (1).webp",
    alt: "Student athlete balancing football and studies",
    title:
      "He Almost Quit Football—Here’s What Stopped Him",
    description:
      "What happens when your child is trying to build a future in sport… but school doesn’t support it?",
  },

  {
    id: 2,
    image: "/img1.webp",
    alt: "Student experiencing flexible learning",
    title:
      "She didn't Think Twice before choosing International Schooling",
    description:
      "When Emily said this to her mother, her doubts slowly turned into confidence.",
  },

  {
    id: 3,
    image: "/img1 (1).webp",
    alt: "Student excited to learn",
    title:
      "I Don't Feel Like Skipping School Anymore. I Feel Excited to Learn.",
    description:
      "Every child deserves a safe learning environment. Right?",
  },
];

export default function SuccessStories() {
  return (
    <section
      className="
        w-full
        border-y
        border-blue-200
        bg-blue-50
        py-8
        md:py-12
      "
    >
      <div className="r-w mx-4">
        {/* heading */}
        <div className="space-y-3 text-center">
          <h2
            className="
              text-3xl
              font-bold
              text-blue-800
            "
          >
            Success Stories
          </h2>

          <p
            className="
              mx-auto
              max-w-3xl
              text-base
              text-slate-600
              md:text-lg
            "
          >
            Real journeys from students and families
            balancing ambition, academics, and support.
          </p>
        </div>

        {/* cards */}
        <div
          className="
            mt-10
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {successStories.map((story) => {
            return (
              <Link
                key={story.id}
                href={`/success-stories/${story.id}`}
                className="flex"
              >
                <article
                  className="
                    flex
                    w-full
                    flex-col
                    overflow-hidden
                    rounded-[24px]
                    bg-white
                    shadow-md
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <Image
                    src={story.image}
                    alt={story.alt}
                    width={1920}
                    height={1081}
                    className="
                      h-[240px]
                      w-full
                      object-cover
                    "
                  />

                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      p-5
                    "
                  >
                    <h3
                      className="
                        mb-3
                        text-lg
                        font-semibold
                        leading-snug
                        text-slate-800
                      "
                    >
                      {story.title}
                    </h3>

                    <p
                      className="
                        mb-5
                        text-sm
                        leading-6
                        text-slate-600
                        md:text-base
                      "
                    >
                      {story.description}
                    </p>

                    <span
                      className="
                        mt-auto
                        inline-flex
                        w-max
                        rounded-full
                        border
                        border-[#5d5d5d]
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-[#5d5d5d]
                        transition-all
                        duration-200
                        hover:border-[#027FFF]
                        hover:text-[#027FFF]
                      "
                    >
                      Read Story
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/success-stories"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-blue-600
              px-8
              py-3
              text-base
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:bg-blue-700
              hover:shadow-md
            "
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}