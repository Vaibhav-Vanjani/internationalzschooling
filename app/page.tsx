import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Trust from "@/components/trust";
// import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
// import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Graduation from "@/components/graduation";
import Learningplan from "@/components/learningplan";
import Whychooseus from "@/components/whychooseus";
import Ratings from "@/components/ratings";
import Paymentsupport from "@/components/paymentsupport";
import Accredition from "@/components/accredition";
import Accordian from "@/components/accordian";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-[#46dd6b] text-white"><Hero/></div>
      <Stats/>
      <Graduation/>
      <Trust/>
      <Learningplan/>
      <Whychooseus/>
      <Testimonials/>
      <Ratings/>
      <Paymentsupport/>
      <Accredition/>
      <Accordian/>
      <Footer/>
    </main>
  );
}