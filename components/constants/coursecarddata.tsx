// constants/coursecarddata.ts

export type BadgeType =
  | "Regular"
  | "Honors"
  | "Fixed"
  | "Advance"
  | "1:1";

export interface Course {
  title: string;
  href?: string;
  badges?: BadgeType[];
}

export interface Section {
  heading: string;
  courses: Course[];
}

export interface SchoolData {
  title: string;
  description?: string;
  oneToOne: Section[];
  groupLearning: Section[];
}

export const middleSchoolData: SchoolData = {
  title: "Grade 6 to Grade 8",

  description: "Online Middle School",

  oneToOne: [
    {
      heading: "English",

      courses: [
        {
          title: "Language Arts I",
          href: "/course-catalog/language-arts-600",
          badges: ["Regular", "Advance"],
        },

        {
          title: "Language Arts II",
          href: "/course-catalog/language-arts-700",
          badges: ["Regular", "Advance"],
        },
      ],
    },

    {
      heading: "Mathematics",

      courses: [
        {
          title: "Mathematics Grade 6",
          href: "/course-catalog/mathematics600",
          badges: ["Regular", "Advance"],
        },
      ],
    },
  ],

  groupLearning: [
    {
      heading: "Grade 6",

      courses: [
        {
          title: "English Language Arts I",
          href: "/course-catalog/language-arts-600",
          badges: ["Fixed"],
        },
      ],
    },
  ],
};

export const highSchoolData: SchoolData = {
  title: "Grade 9 to Grade 12",

  oneToOne: [
    {
      heading: "English",

      courses: [
        {
          title: "English I",
          href: "/course-catalog/english-1",
          badges: ["Regular", "Honors"],
        },
      ],
    },
  ],

  groupLearning: [
    {
      heading: "Grade 9",

      courses: [
        {
          title: "Physics I",
          href: "/course-catalog/physics",
          badges: ["Fixed"],
        },
      ],
    },
  ],
};

export const elementarySchoolData: SchoolData = {
  title: "Grade KG to Grade 5",

  oneToOne: [
    {
      heading: "Grade KG",

      courses: [
        {
          title: "English",
          badges: ["1:1"],
        },
      ],
    },
  ],

  groupLearning: [
    {
      heading: "Grade KG",

      courses: [
        {
          title: "English",
          badges: ["Fixed"],
        },
      ],
    },
  ],
};