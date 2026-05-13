const feeStructureData = {
  title: "Fee Structure",
  subtitle: "Accessible | Premium Quality Schooling",

  oneToOne: {
    title: "One-to-One Learning",
    description: "Personalized 1:1 mentorship & support",

    tags: [
      "Dedicated mentor",
      "Custom learning plan",
      "Flexible schedule",
    ],

    fees: [
      {
        grade: "Elementary",
        duration: "Per year",
        aed: "AED 8,998",
        usd: "$2,450 USD",
      },

      {
        grade: "Middle School",
        duration: "Per year",
        aed: "AED 10,650",
        usd: "$2,900 USD",
      },

      {
        grade: "High School",
        duration: "Per year",
        aed: "AED 15,057",
        usd: "$4,100 USD",
      },
    ],

    note:
      "Final fees may vary based on student requirements and enrollment plan.",
  },

  groupLearning: {
    title: "Group Learning",
    description: "Collaborative classes with guided support",

    tags: [
      "Small groups",
      "Structured sessions",
      "Peer learning",
    ],

    fees: [
      {
        grade: "Elementary",
        duration: "Per year",
        aed: "AED 6,978",
        usd: "$1,900 USD",
      },

      {
        grade: "Middle School",
        duration: "Per year",
        aed: "AED 8,263",
        usd: "$2,250 USD",
      },

      {
        grade: "High School",
        duration: "Per year",
        aed: "AED 12,119",
        usd: "$3,300 USD",
      },
    ],

    note:
      "Final fees may vary based on student requirements and enrollment plan.",
  },
};

type FeeItem = {
  grade: string;
  duration: string;
  aed: string;
  usd: string;
};

type FeeSection = {
  title: string;
  description: string;
  tags: string[];
  fees: FeeItem[];
  note: string;
};

function FeeCard({
  data,
}: {
  data: FeeSection;
}) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-linear-to-b from-blue-50 to-white p-6 shadow-sm">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-slate-900">
          {data.title}
        </h3>

        <p className="text-sm text-slate-600">
          {data.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-blue-200 bg-white">
        <div className="grid grid-cols-12 border-b border-blue-200 bg-blue-50 px-4 py-3 text-xs font-semibold text-blue-700">
          <div className="col-span-5">
            Grade
          </div>

          <div className="col-span-7 text-right">
            Approx. Annual Fee
          </div>
        </div>

        <ul className="divide-y divide-blue-100">
          {data.fees.map((fee) => (
            <li
              key={fee.grade}
              className="grid grid-cols-12 items-center px-4 py-4"
            >
              <div className="col-span-5">
                <p className="text-sm font-semibold text-slate-900">
                  {fee.grade}
                </p>

                <p className="text-xs text-slate-500">
                  {fee.duration}
                </p>
              </div>

              <div className="col-span-7 text-right">
                <div className="space-y-1">
                  <p className="text-sm font-extrabold text-slate-900">
                    {fee.aed}
                  </p>

                  <p className="text-xs text-slate-500">
                    {fee.usd}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        {data.note}
      </p>
    </div>
  );
}

export default function() {
  return (
    <section className="bg-white border-b border-blue-100">
      <div className="r-w px-4 py-14 lg:py-16 space-y-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900">
            {feeStructureData.title}
          </h2>

          <p className="text-sm md:text-base text-blue-700">
            {feeStructureData.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <FeeCard data={feeStructureData.oneToOne} />

          <FeeCard
            data={feeStructureData.groupLearning}
          />
        </div>
      </div>
    </section>
  );
}