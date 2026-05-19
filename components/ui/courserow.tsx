import Link from "next/link";
import { memo } from "react";

type BadgeType = "Regular" | "Honors" | "Fixed";

interface Course {
  title: string;
  href?: string;
  badges?: BadgeType[];
}

interface BadgeProps {
  type: BadgeType;
}

const badgeStyles: Record<BadgeType, string> = {
  Regular: "bg-purple-700/90",
  Honors: "bg-pink-700/90",
  Fixed: "bg-blue-700/90",
};

const Badge = memo(function Badge({ type }: BadgeProps) {
  return (
    <span
      className={`
        px-2
        py-1
        rounded-full
        text-xs
        text-white
        whitespace-nowrap
        ${badgeStyles[type]}
      `}
    >
      {type}
    </span>
  );
});

interface CourseRowProps extends Course {}

const CourseRow = memo(function CourseRow({
  title,
  href = "/",
  badges = [],
}: CourseRowProps) {
  return (
    <Link
      href={href}
      aria-label={`Open course: ${title}`}
      prefetch={false}
      className="
        flex
        items-center
        justify-between
        gap-3
        py-3
        border-b
        border-slate-200
        transition-colors
        duration-200
        hover:text-blue-600
      "
    >
      <h3 className="font-medium text-sm sm:text-base">
        {title}
      </h3>

      {badges.length > 0 && (
        <div className="flex flex-wrap justify-end gap-1">
          {badges.map((badge) => (
            <Badge key={badge} type={badge} />
          ))}
        </div>
      )}
    </Link>
  );
});

export { CourseRow, Badge, badgeStyles };