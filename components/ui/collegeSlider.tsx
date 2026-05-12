"use client";

import Image from "next/image";

const collegeList = [
  {
    imageName: "caltech.webp",
    countryIn: "USA",
  },
  {
    imageName:
      "Seal_of_Colegio_de_San_Juan_de_Letran.webp",
    countryIn: "Philippines",
  },
  {
    imageName:
      "University_of_Pretoria_Coat_of_Arms.webp",
    countryIn: "South Africa",
  },
  {
    imageName: "harvard.webp",
    countryIn: "USA",
  },
  {
    imageName: "University_of_Sharjah.webp",
    countryIn: "UAE",
  },
];

export default function CollegeSlider() {
  let finalCollegeList:{imageName:string,countryIn:string}[] = [];

  for (let i = 0; i < 30; i++) {
    finalCollegeList = [
      ...finalCollegeList,
      ...collegeList,
    ];
  }

  return (
    <div className="overflow-hidden w-full bg-white py-8">
      <div className="flex items-center gap-16 animate-slide-left w-max">
        {finalCollegeList.map((item, index) => {
          return (
            <div
              key={index}
              className="
                min-w-fit
                flex
                flex-col
                items-center
                justify-center
              "
            >
              <Image
                src={`/${item.imageName}`}
                alt="college-logo"
                width={100}
                height={100}
                className="object-contain"
              />

              <span
                className="
                  mt-3
                  text-sm
                  font-medium
                  text-[#0B1B35]
                "
              >
                {item.countryIn}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}