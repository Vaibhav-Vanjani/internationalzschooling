import LearningCard from "@/components/ui/learingcard";

type BadgeType = string;

interface Course {
  title: string;
  href?: string;
  badges?: BadgeType[];
}

interface Section {
  category?: string;
  grade?: string;
  courses: Course[];
}

export default function({title,oneToOne,groupLearning}:{title:string,oneToOne:Section[],groupLearning:Section[]}) {
  return (
    <section className="r-w py-12">
      <div
        className="
          relative overflow-hidden rounded-[2rem]
          bg-gradient-to-r
          from-[#007EFF]
          to-[#1F00E1]
          mx-4 mb-4
        "
      >
        {/* Blur Background */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div
            className="
              absolute -top-24 -left-24
              h-72 w-72 rounded-full
              bg-white blur-3xl
            "
          />

          <div
            className="
              absolute -bottom-24 -right-24
              h-72 w-72 rounded-full
              bg-white blur-3xl
            "
          />
        </div>

        <div className="relative p-4 sm:p-6 lg:p-10">
          {/* Header */}
          <div className="mb-10 text-center">
            <h2
              className="
                text-2xl md:text-4xl
                font-bold tracking-tight
                text-white
              "
            >
              {title}
            </h2>
          </div>

          {/* Grid */}
          <div
            className="
              grid grid-cols-1
              xl:grid-cols-2
              gap-6
            "
          >
            <LearningCard
              key={"1"}
              title="One-to-One Learning"
              subtitle="Minimum Courses - 6 | Fixed Courses - 1 | Choice Based - 5"
              badge="1:1"
              sections={oneToOne}
            />

            <LearningCard
              key={"2"}
              title="Group Learning"
              subtitle="All 6 courses are fixed for each grade."
              badge="Group"
              sections={groupLearning}
            />
          </div>
        </div>
      </div>
    </section>
  );
}