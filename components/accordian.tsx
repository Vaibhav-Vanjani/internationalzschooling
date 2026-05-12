export default function() {
  const faqs = [
    {
      q: "What is International Schooling?",
      a: "International Schooling offers the American curriculum globally, accredited by Cognia and WASC, serving KG–12 students with 600+ teachers."
    },
    {
      q: "Is International Schooling an 'ACCREDITED' school?",
      a: "Yes, it is accredited by Cognia (formerly AdvancED), one of the most respected accreditation bodies in the USA."
    },
    {
      q: "Does my child need advanced technology skills to study with you?",
      a: "No, basic computer and internet skills are enough to study with us."
    },
    {
      q: "What is SAT?",
      a: "SAT is a standardized test for college admissions assessing reading, writing, and math skills."
    },
    {
      q: "What is AP?",
      a: "AP courses are college-level high school courses designed to prepare students for higher education."
    },
    {
      q: "How will my child choose a course?",
      a: "Students can choose courses based on eligibility and career goals, with guidance available."
    },
    {
      q: "What programs and courses can my child choose from?",
      a: "One-to-One, Group Learning, and Self-Learning programs are available."
    },
    {
      q: "Can my child change subjects/courses after enrollment?",
      a: "Course changes are limited and may require additional fees."
    },
    {
      q: "How will the classes be conducted?",
      a: "All classes, assignments, and materials are accessible through our LMS."
    },
    {
      q: "How are exams conducted?",
      a: "Exams and quizzes are conducted online and must be completed sequentially."
    },
    {
      q: "Will my child receive a certificate/diploma?",
      a: "Yes, upon completion of the program, an official certificate/diploma is awarded."
    },
    {
      q: "What is the fee structure?",
      a: "Fees vary by grade and course; full details are shared during enrollment."
    },
    {
      q: "How can I enroll my child?",
      a: "Use the Register Now option on our website or contact support for help."
    }
  ];

  return (
    <div className="my-12">
      <div className="flex flex-col justify-center items-center r-w">
        <h5 className="text-center bg-linear-to-r from-[#007EFF] to-[#1F00E1] bg-clip-text text-transparent text-xl font-bold">
          You Got Questions?
        </h5>

        <h3 className="text-center md:text-3xl text-2xl my-1 font-black mb-10 text-[#027FFF]">
          We Got Answers!
        </h3>
      </div>

      <div className="r-w">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="flex border-t border-[#BEBEBE] py-1 px-3 gap-3"
          >
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-3 flex-shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>

            {/* Accordion */}
            <div className="collapse-arrow w-full">
              <input type="checkbox" />

              <div className="collapse-title font-bold">
                {item.q}
              </div>

              <div className="collapse-content text-sm">
                {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}