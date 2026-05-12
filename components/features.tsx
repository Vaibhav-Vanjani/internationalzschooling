// "use client";

// import { motion } from "framer-motion";
// import {
//   Globe,
//   BookOpen,
//   GraduationCap,
//   Clock3,
//   Laptop,
//   Users,
// } from "lucide-react";

// const features = [
//   {
//     icon: Globe,
//     title: "Global Learning",
//     description:
//       "Access world-class education from anywhere in the world.",
//   },
//   {
//     icon: Clock3,
//     title: "Flexible Schedule",
//     description:
//       "Learn at your own pace with complete flexibility.",
//   },
//   {
//     icon: Laptop,
//     title: "Modern Platform",
//     description:
//       "Interactive learning tools and engaging virtual classrooms.",
//   },
//   {
//     icon: GraduationCap,
//     title: "University Ready",
//     description:
//       "Curriculum designed for global university admissions.",
//   },
//   {
//     icon: BookOpen,
//     title: "Personalized Courses",
//     description:
//       "Tailored education pathways for every student.",
//   },
//   {
//     icon: Users,
//     title: "Expert Mentors",
//     description:
//       "Guidance from experienced educators and mentors.",
//   },
// ];

// export default function Features() {
//   return (
//     <section className="py-28 px-6 relative overflow-hidden">
//       {/* background glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[180px]" />

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <p className="text-cyan-400 font-semibold uppercase tracking-[4px]">
//             Why Choose Us
//           </p>

//           <h2 className="text-4xl md:text-6xl font-black text-white mt-4">
//             Education Built For The Future
//           </h2>

//           <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
//             Our innovative learning system empowers students with
//             flexibility, global accessibility, and future-ready skills.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;

//             return (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="
//                   group
//                   relative
//                   bg-white/5
//                   border border-white/10
//                   rounded-[32px]
//                   p-10
//                   backdrop-blur-xl
//                   overflow-hidden
//                   hover:-translate-y-2
//                   transition-all duration-300
//                 "
//               >
//                 {/* hover glow */}
//                 <div
//                   className="
//                     absolute inset-0
//                     bg-gradient-to-br
//                     from-cyan-500/0
//                     to-cyan-500/10
//                     opacity-0
//                     group-hover:opacity-100
//                     transition
//                   "
//                 />

//                 <div
//                   className="
//                     relative
//                     w-16 h-16
//                     rounded-2xl
//                     bg-cyan-500/10
//                     border border-cyan-400/20
//                     flex items-center justify-center
//                   "
//                 >
//                   <Icon className="w-8 h-8 text-cyan-400" />
//                 </div>

//                 <h3 className="relative text-2xl font-bold text-white mt-8">
//                   {feature.title}
//                 </h3>

//                 <p className="relative text-gray-400 mt-4 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }