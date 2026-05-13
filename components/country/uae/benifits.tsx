const benefits = [
  {
    title: "Fully Accredited U.S. Schooling",
    description:
      "Receive a globally recognized U.S. High School Diploma accepted by universities worldwide.",
  },
  {
    title: "NCAA & College Board Approved",
    description:
      "Ideal for students aiming for international universities, AP courses, or scholarships.",
  },
  {
    title: "Inclusive for All Learning Styles",
    description:
      "Ideal for advanced learners, struggling students, or children needing personalized pacing.",
  },
  {
    title: "Strong Academic Foundation",
    description:
      "U.S. curriculum focused on critical thinking, creativity, and practical skills.",
  },
  {
    title: "Multilingual Teacher Support",
    description:
      "Teachers from 50+ countries speaking 40+ languages support diverse learners.",
  },
  {
    title: "Lower Fees Than Traditional Schools",
    description:
      "Premium American education at the most affordable cost in the UAE.",
  },
  {
    title: "Support for Multicultural Families",
    description:
      "Designed for families from 200+ nationalities living in the UAE.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="r-w px-4 py-14 lg:py-16 space-y-8 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-900">
        Benefits of Online School for UAE Families
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-emerald-100 p-5 space-y-2 text-center sm:text-left"
          >
            <h3 className="text-sm md:text-base font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="text-xs md:text-sm text-slate-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-6 flex justify-center">
        <a
          href="#book-call"
          className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-emerald-600 transition"
        >
          Book Free Demo
        </a>
      </div>
    </section>
  );
}