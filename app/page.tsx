import dynamic from "next/dynamic";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Graduation from "@/components/graduation";

const Trust = dynamic(() => import("@/components/trust"));
const Learningplan = dynamic(() => import("@/components/learningplan"));
const Whychooseus = dynamic(() => import("@/components/whychooseus"));
const Testimonials = dynamic(() => import("@/components/testimonials"));
const Ratings = dynamic(() => import("@/components/ratings"));
const Paymentsupport = dynamic(() => import("@/components/paymentsupport"));
const Accredition = dynamic(() => import("@/components/accredition"));
const Accordian = dynamic(() => import("@/components/accordian"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="bg-[#46dd6b] text-white">
        <Hero />
      </div>

      <Stats />
      <Graduation />

       <Trust />
      <Learningplan />
      <Whychooseus />
      <Testimonials />
      <Ratings />
      <Paymentsupport />
      <Accredition />
      <Accordian />
      <Footer />
    </main>
  );
}