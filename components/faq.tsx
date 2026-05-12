// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const faqs = [
//   {
//     question: "Is the school accredited?",
//     answer:
//       "Yes, the school is internationally accredited and accepted globally.",
//   },
//   {
//     question: "Can students learn at their own pace?",
//     answer:
//       "Yes, students can study flexibly according to their schedules.",
//   },
//   {
//     question: "Do universities accept online schooling?",
//     answer:
//       "Yes, many top universities accept accredited online schooling.",
//   },
// ];

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(100);

//   function toggleAccordion(index:number) {
//     setOpenIndex(openIndex === index ? 100 : index);
//   }

//   return (
//     <section className="py-24 px-6">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-5xl font-black text-center mb-12 text-white">
//           Frequently Asked Questions
//         </h2>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => {
//             const isOpen = openIndex === index;

//             return (
//               <div
//                 key={index}
//                 className="
//                   border border-white/10
//                   bg-white/5
//                   backdrop-blur-xl
//                   rounded-2xl
//                   overflow-hidden
//                 "
//               >
//                 <button
//                   onClick={() => toggleAccordion(index)}
//                   className="
//                     w-full
//                     flex
//                     items-center
//                     justify-between
//                     px-6
//                     py-5
//                     text-left
//                     text-lg
//                     font-semibold
//                     text-white
//                   "
//                 >
//                   {faq.question}

//                   <ChevronDown
//                     className={`
//                       transition-transform duration-300
//                       ${isOpen ? "rotate-180" : ""}
//                     `}
//                   />
//                 </button>

//                 <div
//                   className={`
//                     grid
//                     transition-all
//                     duration-300
//                     ease-in-out
//                     ${
//                       isOpen
//                         ? "grid-rows-[1fr] opacity-100"
//                         : "grid-rows-[0fr] opacity-0"
//                     }
//                   `}
//                 >
//                   <div className="overflow-hidden">
//                     <p className="px-6 pb-5 text-gray-300">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }