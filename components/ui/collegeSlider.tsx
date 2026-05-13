import Image from "next/image";

export default function CollegeSlider({collegeList,background}:{collegeList:{imageName:string,countryIn:string}[],background:string | undefined}) {
  let finalCollegeList:{imageName:string,countryIn:string}[] = [];

  for (let i = 0; i < 30; i++) {
    finalCollegeList = [
      ...finalCollegeList,
      ...collegeList,
    ];
  }

  return (
    <div className="overflow-hidden w-full bg-white py-8">
      <div className={`${background ? background : ""} flex items-center gap-16 animate-slide-left w-max`}>
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