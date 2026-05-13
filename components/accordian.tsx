import Accordion from "./ui/accordion";

export default function() {
const faqs = [
  {
    title: "What is International Schooling?",
    para: [
      "International Schooling offers the American curriculum globally, accredited by Cognia and WASC, serving KG–12 students with 600+ teachers.",
    ],
  },
  {
    title: "Is International Schooling an 'ACCREDITED' school?",
    para: [
      "Yes, it is accredited by Cognia (formerly AdvancED), one of the most respected accreditation bodies in the USA.",
    ],
  },
  {
    title: "Does my child need advanced technology skills to study with you?",
    para: [
      "No, basic computer and internet skills are enough to study with us.",
    ],
  },
  {
    title: "What is SAT?",
    para: [
      "SAT is a standardized test for college admissions assessing reading, writing, and math skills.",
    ],
  },
  {
    title: "What is AP?",
    para: [
      "AP courses are college-level high school courses designed to prepare students for higher education.",
    ],
  },
  {
    title: "How will my child choose a course?",
    para: [
      "Students can choose courses based on eligibility and career goals, with guidance available.",
    ],
  },
  {
    title: "What programs and courses can my child choose from?",
    para: [
      "One-to-One, Group Learning, and Self-Learning programs are available.",
    ],
  },
  {
    title: "Can my child change subjects/courses after enrollment?",
    para: [
      "Course changes are limited and may require additional fees.",
    ],
  },
  {
    title: "How will the classes be conducted?",
    para: [
      "All classes, assignments, and materials are accessible through our LMS.",
    ],
  },
  {
    title: "How are exams conducted?",
    para: [
      "Exams and quizzes are conducted online and must be completed sequentially.",
    ],
  },
  {
    title: "Will my child receive a certificate/diploma?",
    para: [
      "Yes, upon completion of the program, an official certificate/diploma is awarded.",
    ],
  },
  {
    title: "What is the fee structure?",
    para: [
      "Fees vary by grade and course; full details are shared during enrollment.",
    ],
  },
  {
    title: "How can I enroll my child?",
    para: [
      "Use the Register Now option on our website or contact support for help.",
    ],
  },
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
            <Accordion key={index} title={item.title} para={item.para} questionMark={true}/>
        ))}
      </div>
    </div>
  );
}