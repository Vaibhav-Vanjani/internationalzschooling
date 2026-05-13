import Image from "next/image";

export default function() {
  const reviews = [
    {
      image: "/testimonials-parent-3.webp",
      title: "Parent From Colombia, Living in UAE",
    },
    {
      image: "/pr_3.webp",
      title: "Parent From Malaysia, Living in UAE",
    },
    {
      image: "/sr3.webp",
      title: "Parent From UAE",
    },
  ];

  return (
    <>
      <section className="py-12 border-y border-emerald-200">
        
        <div className="mx-4 r-w">
          
          <h3 className="text-xl md:text-3xl text-[#5D5D5D] text-center font-bold mb-4">
            Satisfied and Happy Parents Review From UAE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {reviews.map((review, index) => (
              <div key={index} className="font-sm">
                
                <button
                  className="w-full cursor-pointer"
                  aria-label="Play video"
                >
                  
                  <div className="relative flex items-center justify-center group">
                    
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
                      className="absolute duration-150 animate-pulse group-hover:animate-none group-hover:scale-105 z-10"
                    >
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>

                    <Image
                      alt="Video thumbnail"
                      width={1280}
                      height={720}
                      src={review.image}
                      className="rounded-xl border-2 w-full h-auto"
                    />
                  </div>
                </button>

                <div className="md:font-semibold text-center px-2 py-1 bg-blue-200 rounded w-max mx-auto mt-2">
                  {review.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}