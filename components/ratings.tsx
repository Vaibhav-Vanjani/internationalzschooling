import Image from "next/image";

const reviews = [
  {
    name: "Rachel Rouquet",
    role: "Parent from USA",
    text: "This is our first year with International Schooling. The website and platform are easy to use. We receive weekly progress updates, and the teachers are very nice and accommodating. We are impressed with the subject selection...",
  },
  {
    name: "Nahed Salem",
    role: "Parent from UAE",
    text: "I have my 4 boys attending this school. Their website is easy to use and they are able to get around it easily. The administration is very helpful and would do anything to solve issues ASAP...",
  },
  {
    name: "Alexander V Mosiol",
    role: "Parent from Brazil",
    text: "I have my 2 daughters attending online International Schooling. It's their first time in online school. The classes are easy to follow and teachers interact very well...",
  },
];

export default function() {
  return (
    <section className="py-10 bg-[#001B47]">
      <div className="r-w">
        <h3 className="text-xl md:text-3xl text-center text-white font-black mb-6">
          TOP RATED INTERNATIONAL ONLINE SCHOOL
        </h3>

        {/* google badge */}
        <div className="flex justify-center my-10">
          <Image
            src="/google-reviews-new.webp"
            alt="Google Reviews"
            quality={60}
            width={300}
            height={100}
            className="w-28 md:w-32 h-auto"
          />
        </div>

        {/* reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((item, index) => {
            return (
              <div key={index} className="p-2">
                <div
                  className="
                    text-[#5D5D5D]
                    bg-white
                    rounded-2xl
                    p-4
                    h-80
                    overflow-y-auto
                  "
                >
                  <p className="text-sm italic text-justify mb-4">
                    {item.text}
                  </p>

                  <div className="text-center">
                    <h5 className="font-bold">{item.name}</h5>
                    <p className="text-xs italic font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}