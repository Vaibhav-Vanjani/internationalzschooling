import Image from "next/image";

const reasonsList = [
  {
    title: "Accredited & University-Ready",
    problem:
      "Parents want a credible U.S. high school qualification that is accepted for higher education.",
    solution:
      "With International Schooling, your child earns recognized, valid transcripts and a U.S. High School Diploma from a fully accredited school.",
  },
  {
    title: "Schedules That Fit UAE Life",
    problem:
      "Busy routines, travel, and activities make fixed school timings difficult.",
    solution:
      "We offer Live one-to-one Classes or Live Group Classes designed for maximum flexibility.",
  },
  {
    title: "Built for Multilingual Learners",
    problem:
      "Students may speak multiple languages at home and need strong academic English support.",
    solution:
      "Our teachers, from 50+ countries and speaking 40+ languages, guide learners with patient instruction and confidence-building communication.",
  },
  {
    title: "Great for Families Who Travel",
    problem:
      "Relocation often interrupts learning in traditional school systems.",
    solution:
      "With International Schooling, your child can continue the same program seamlessly, even if you move across cities or countries.",
  },
  {
    title: "Comfortable & Safe Learning Environment",
    problem:
      "Commute time and daily logistics reduce family time and create unnecessary stress.",
    solution:
      "With International Schooling, students learn from home with a consistent, stress-free routine — leaving more time for sports, hobbies, and family.",
  },
  {
    title: "Parent Visibility",
    problem:
      "Parents want clear insight into their child's progress and learning plan.",
    solution:
      "We provide live performance tracking, regular updates, and structured communication.",
  },
];

export default function WhyFamiliesChoose() {
  return (
    <>
      <section className="r-w px-4 py-14 lg:py-16">
        
        <div className="flex justify-center md:flex-row gap-6 mb-10">
          
          <div className="w-1/2 flex flex-col items-center md:flex-row justify-center">
          <div className="max-w-3xl space-y-4 text-center md:text-start">
            
            <h2 className="text-centertext-2xl md:text-3xl font-bold text-center text-emerald-700 md:text-start">
              Why UAE Families Choose an International Online School in UAE.
            </h2>

            <div className="pt-2 flex justify-center md:justify-start">
              <a
                className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-600 transition"
                href="#book-call"
              >
                Speak to Academic Expert
              </a>
            </div>
          </div>

          <div>
            <Image
              alt="UAE map"
              width={260}
              height={260}
              quality={60}
              src="/AE-Map.webp"
              className="mix-blend-multiply"
            />
          </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {reasonsList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-5 flex flex-col gap-3 text-center"
            >
              
              <h3 className="text-sm font-semibold text-slate-600">
                {item.title}
              </h3>

              <div className="mx-auto w-max px-2 py-1 text-xs border rounded-full border-red-500 text-red-500">
                Problem
              </div>

              <p className="text-xs md:text-sm text-slate-600">
                {item.problem}
              </p>

              <div className="rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-4 relative mt-4">
                
                <div className="mx-auto w-max px-2 py-1 text-xs rounded-full bg-emerald-600 text-white absolute -top-4 left-0 right-0">
                  Solution
                </div>

                <p className="text-xs md:text-sm text-emerald-900">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}