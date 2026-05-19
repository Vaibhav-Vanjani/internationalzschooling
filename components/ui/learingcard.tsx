import { memo } from "react";
import { CourseRow } from "./courserow";
import type { Section, Course } from "@/components/constants/coursecarddata.tsx";

export interface LearningCardProps {
  title: string;
  subtitle: string;
  badge: string;
  sections: Section[];
}

interface AccordionProps {
  title: string;
  courses: Course[];
}

const Accordion = memo(function Accordion({
  title,
  courses,
}: AccordionProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        bg-blue-900
        ring-1
        ring-white/10
      "
    >
      <details className="group">
        <summary
          className="
            flex
            cursor-pointer
            list-none
            items-center
            justify-between
            px-5
            py-4
          "
        >
          <h3 className="text-lg font-bold text-white">
            {title}
          </h3>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="
              transition-transform
              duration-300
              group-open:rotate-180
            "
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </summary>

        <div className="bg-white px-4 pb-3">
          {courses.map((course) => (
            <CourseRow
              key={course.title}
              {...course}
            />
          ))}
        </div>
      </details>
    </div>
  );
});

const LearningCard = memo(function LearningCard({
  title,
  subtitle,
  badge,
  sections,
}: LearningCardProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-xl
      "
    >
      {/* HEADER */}
      <div className="border-b border-slate-200 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              {title}
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              {subtitle}
            </p>
          </div>

          <div
            className="
              shrink-0
              rounded-full
              bg-blue-600/10
              px-3
              py-1
              text-xs
              font-semibold
              text-blue-700
              whitespace-nowrap
            "
          >
            {badge}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="space-y-4 p-4">
        {sections.map((section) => {
          const sectionTitle =
            "Section";

          return (
            <Accordion
              key={sectionTitle}
              title={sectionTitle}
              courses={section.courses}
            />
          );
        })}
      </div>
    </div>
  );
});

export default LearningCard;