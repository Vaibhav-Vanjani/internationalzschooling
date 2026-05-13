"use client";

import { memo } from "react";

type BadgeType = string;

interface Course {
  title: string;
  href?: string;
  badges?: BadgeType[];
}

interface CourseRowProps extends Course {}

interface BadgeProps {
  children: React.ReactNode;
}

export const badgeStyles: Record<BadgeType, string> = {
  Regular: "bg-purple-700/90",
  Honors: "bg-pink-700/90",
  Fixed: "bg-blue-700/90",
};

export const Badge = memo(function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className={`
        px-2 py-1 rounded-full text-xs text-white whitespace-nowrap
      `}
    >
      {children}
    </span>
  );
});

export const CourseRow = memo(function CourseRow({
  title,
  href,
  badges = [],
}: CourseRowProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center justify-between gap-3
        py-3 border-b border-slate-200
        hover:text-blue-600 transition-colors
      "
    >
      <h3 className="font-medium text-sm sm:text-base">
        {title}
      </h3>

      <div className="flex gap-1 flex-wrap justify-end">
        {badges.map((badge) => (
          <span
            key={badge}
            className={`
              px-2 py-1 rounded-full text-xs text-white whitespace-nowrap
              ${badgeStyles[badge]}
            `}
          >
            {badge}
          </span>
        ))}
      </div>
    </a>
  );
});