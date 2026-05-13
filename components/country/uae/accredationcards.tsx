import Image from "next/image";

const accreditationList = [
  {
    image: "/neasc-flat.webp",
    alt: "NEASC logo",
    description:
      "NEASC (New England Association of Schools and Colleges) stands as one of the oldest and most respected accreditation organizations, with a distinguished history spanning over 140 years of promoting educational excellence.",
    href: "/neasc",
  },
  {
    image: "/wasc.webp",
    alt: "WASC logo",
    description:
      "WASC is one of the most respected and challenging accreditation authorities worldwide. It evaluates schools through rigorous self-study, peer reviews, and continuous improvement plans over several years.",
    href: "/wasc",
  },
  {
    image: "/cognia-flat.webp",
    alt: "Cognia logo",
    description:
      "Cognia is the world's largest and most established school accreditation organization. With over 40,000 institutions, it ensures quality education through trusted global standards.",
    href: "/cognia",
  },
  {
    image: "/ncaa-flat.png",
    alt: "NCAA logo",
    description:
      "Our NCAA-aligned curriculum supports international student-athletes in meeting eligibility requirements while keeping pathways open for university opportunities in the U.S. and beyond.",
    href: "/ncaa",
  },
  {
    image: "/college-board-flat.webp",
    alt: "College Board logo",
    description:
      "College Board recognition reflects strong academics, structured guidance, and globally aligned benchmarks that help students succeed in competitive admissions worldwide.",
    href: "/college-board",
  },
];

export default function() {
  return (
    <>
      <section className="space-y-8 bg-white pb-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          
          {accreditationList.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-blue-100 bg-blue-50 flex flex-col"
            >
              
              <img
                alt={item.alt}
                loading="lazy"
                width={200}
                height={200}
                src={item.image}
                className="min-w-50 mx-auto h-auto object-contain mb-4 mix-blend-multiply"
              />

              <p className="text-gray-700 leading-relaxed transition text-center">
                {item.description}
              </p>

              <div className="flex-1" />

              <a
                className="mx-auto w-max rounded-full text-white bg-blue-800 hover:bg-blue-600 mt-4 px-5 py-2 transition"
                href={item.href}
              >
                Read More
              </a>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4 mt-8">
          
          {accreditationList.slice(3).map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-blue-100 bg-blue-50 flex flex-col"
            >
              
              <Image
                alt={item.alt}
                width={200}
                height={200}
                src={item.image}
                className="min-w-50 mx-auto h-auto object-contain mb-4 mix-blend-multiply"
              />

              <p className="text-gray-700 leading-relaxed transition text-center">
                {item.description}
              </p>

              <div className="flex-1" />

              <div
                className="mx-auto w-max rounded-full text-white bg-blue-800 hover:bg-blue-600 mt-4 px-5 py-2 transition"
              >
                Read More
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}