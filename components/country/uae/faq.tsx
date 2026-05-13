const faqs = [
  {
    question: "Is your diploma accepted in the UAE and internationally?",
    answer: "Yes. Our accreditation supports recognition of transcripts and diploma for admissions and transfers.",
  },
  {
    question: "Are class timings suitable for UAE time zones?",
    answer: "Yes. Group schedules are GST-friendly, and one-to-one classes are fully flexible.",
  },
  {
    question: "Is it suitable for expat families?",
    answer: "Yes. It works well for families who relocate or travel often.",
  },
  {
    question: "What grades do you offer?",
    answer: "We offer a full KG-12 American curriculum.",
  },
  {
    question: "How do students socialize?",
    answer: "Through live classes, group projects, clubs, and online activities.",
  },
  {
    question: "Is online school accepted in the UAE?",
    answer: "Yes, online schooling is a popular option for expat families seeking flexible and internationally recognized education.",
  },
  {
    question: "Can students in UAE study a US curriculum online?",
    answer: "Absolutely, we provide a US-based curriculum accessible from anywhere.",
  },
  {
    question: "How do exams and assessments work?",
    answer: "Assessments are conducted online through assignments, quizzes, and exams.",
  },
  {
    question: "Is online schooling better than traditional schooling?",
    answer: "Online schooling offers flexible, personalized learning from home. It also eliminates commutes, reduces costs, and allows students to learn at their own pace.",
  },
];

export default function FAQs() {

  return (
    <section className="bg-emerald-50 border-t border-emerald-100 pt-6">
      <div className="max-w-4xl mx-auto px-4 pb-8 space-y-8">
        {/* Header */}
        <div className="space-y-3 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-900">
            FAQs
          </h2>
          <p className="text-sm md:text-base text-emerald-600">
            Here are the answers to the most common questions parents ask us from Dubai.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-emerald-100 rounded-2xl overflow-hidden"
            >
              <button className="w-full text-left px-4 md:px-5 py-4 md:py-5 flex items-center justify-between hover:bg-emerald-50 transition-colors"
              >
                <h3 className="text-sm md:text-base font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${'max-h-40 opacity-100'
                }`}
              >
                <p className="px-4 md:px-5 pb-4 md:pb-5 text-xs md:text-sm text-slate-900">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}