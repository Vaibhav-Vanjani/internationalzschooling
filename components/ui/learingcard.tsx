"use client";

import { memo } from "react";
import { CourseRow } from "./courserow";

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

interface LearningCardProps {
  title: string;
  subtitle: string;
  badge: string;
  sections: Section[];
}

interface AccordionProps {
  title: string;
  courses: Course[];
}

export const Accordion = memo(function Accordion({
  title,
  courses,
}: AccordionProps) {
  return (
    <div
      className="
        rounded-2xl overflow-hidden
        bg-blue-900
        ring-1 ring-white/10
      "
    >
      <details className="group">
        <summary
          className="
            flex items-center justify-between
            cursor-pointer list-none
            px-5 py-4
          "
        >
          <h3 className="text-white font-bold text-lg">
            {title}
          </h3>

          <span
            className="
              text-white transition-transform
              group-open:rotate-180
            "
          >
            ▼
          </span>
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


export default function LearningCard({
  title,
  subtitle,
  badge,
  sections,
}: LearningCardProps) {
  return (
    <div
      className="
        rounded-3xl bg-white/95
        shadow-xl overflow-hidden
        backdrop-blur
      "
    >
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
              shrink-0 rounded-full
              bg-blue-600/10
              px-3 py-1
              text-xs font-semibold text-blue-700
            "
          >
            {badge}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {sections.map((section,index) => (
          <Accordion
            key={index + (section.category || section.grade || "")}
            title={
              section.category || section.grade || ""
            }
            courses={section.courses}
          />
        ))}
      </div>
    </div>
  );
}