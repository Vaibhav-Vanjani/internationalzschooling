import LearningCard from "@/components/ui/learingcard";

type BadgeType = "Regular" | "Honors" | "Fixed";

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

interface LearningSectionProps {
  title: string;
  oneToOne: Section[];
  groupLearning: Section[];
}

export default function LearningSection({
  title,
  oneToOne,
  groupLearning,
}: LearningSectionProps) {
  return (
    <section className="r-w py-12">
      <div
        className="
          relative
          mx-4
          mb-4
          overflow-hidden
          rounded-[2rem]
          bg-gradient-to-r
          from-[#007EFF]
          to-[#1F00E1]
        "
      >
        {/* BACKGROUND GLOW */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-10
          "
        >
          <div
            className="
              absolute
              -left-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-white
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -right-24
              h-72
              w-72
              rounded-full
              bg-white
              blur-3xl
            "
          />
        </div>

        {/* CONTENT */}
        <div className="relative p-4 sm:p-6 lg:p-10">
          {/* HEADER */}
          <div className="mb-10 text-center">
            <h2
              className="
                text-2xl
                font-bold
                tracking-tight
                text-white
                md:text-4xl
              "
            >
              {title}
            </h2>
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              grid-cols-1
              gap-6
              xl:grid-cols-2
            "
          >
            <LearningCard
              title="One-to-One Learning"
              subtitle="Minimum Courses - 6 | Fixed Courses - 1 | Choice Based - 5"
              badge="1:1"
              sections={oneToOne}
            />

            <LearningCard
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