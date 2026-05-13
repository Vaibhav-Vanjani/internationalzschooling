import { collegeList } from "./constants/collegeList";
import CollegeSlider from "./ui/collegeSlider";

const statsList = [
  {
    percentage: "3.8",
    title: "Average GPA",
  },
  {
    percentage: "100%",
    title: "Universities Acceptance",
  },
  {
    percentage: "7%",
    title: "Acceptance in Ivy League Colleges",
  },
  {
    percentage: "75%",
    title: "International Scholarships",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-10">
      <h3
        className="
          text-[#027FFF]
          font-black
          md:text-[26px]
          text-xl
          mb-10
          text-center
          px-2
        "
      >
        Your Path to Top Universities Starts Here
      </h3>

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          md:grid-cols-4
          grid-cols-2
          md:gap-10
          gap-6
          text-center
          text-blue-900
        "
      >
        {statsList.map((item, index) => {
          return (
            <div key={index}>
              <p
                className="
                  font-black
                  md:text-4xl
                  text-2xl
                "
              >
                {item.percentage}
              </p>

              <p
                className="
                  font-medium
                  text-sm
                  md:text-[15px]
                  mt-3
                  leading-relaxed
                "
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <CollegeSlider collegeList={collegeList}/>
      <div className="flex flex-col md:flex-row justify-center items-center pb-10 r-w mt-10!">
        <div className="flex flex-col w-7/8">
          <h3 className="md:text-2xl text-center md:mx-0 md:p-1 mb-2 font-black text-[#027FFF] md:uppercase">
            The Most Trusted &amp; Recommended <span className="md:text-2xl md:mx-0 md:p-1 mb-2 font-black text-[#027FFF] md:uppercase">AMERICAN ONLINE SCHOOL</span>
          </h3>
          <p className=" text-justify text-sm text-black ">International Schooling is the best American online school 
            serving 15000+ students and is the most trusted &amp; recommended American online school by parents across 
            190+ countries. International Schooling, fully accredited by NEASC, WASC &amp; Cognia, USA, approved by 
            College Board, USA  and National Collegiate Athletics Association (NCAA, USA) offers the American curriculum 
            for Grades KG-12, supported by 600+ internationally trained and certified teachers speaking 40+ languages. As 
            a proud member of United Nations, International Schooling is <i>"<b>Changing Lives for the Best</b> 
            <span className="text-xs"><sup>TM</sup></span> "</i> by spreading smiles across the world with premium quality 
            school education.
          </p>
        </div>
      </div>
    </section>
  );
}