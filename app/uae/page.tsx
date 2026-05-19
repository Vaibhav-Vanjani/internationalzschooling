import dynamic from "next/dynamic";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import Trust from "@/components/country/uae/trust";
import Recommended from "@/components/country/uae/recommended";
import Accredation from "@/components/country/uae/accredation";
import Accredationcards from "@/components/country/uae/accredationcards";
import WhyFamiliesChoose from "@/components/country/uae/whychooseus";
import Learningplan from "@/components/learningplan";
import CurriculumSection from "@/components/country/uae/curicullam";
import Curicullamcards from "@/components/country/uae/curicullamcards";
import BenefitsSection from "@/components/country/uae/benifits";
import Feestructure from "@/components/country/uae/feestructure";
import EnrollmentSteps from "@/components/country/uae/enrollnow";
import EnrollCTA from "@/components/country/uae/enrollcta";

import {
  elementarySchoolData,
  highSchoolData,
  middleSchoolData,
} from "@/components/constants/coursecarddata";

import { enrollmentSteps } from "@/components/constants/enrollmentstep";

/* LAZY LOAD BELOW-THE-FOLD COMPONENTS */
const Parentreview = dynamic(
  () => import("@/components/country/uae/parentreview")
);

const BlogGrid = dynamic(
  () => import("@/components/country/uae/blog")
);

const FAQs = dynamic(
  () => import("@/components/country/uae/faq")
);

export default function UAEPage() {
  const curriculumCardList = [
    elementarySchoolData,
    middleSchoolData,
    highSchoolData,
  ];

  return (
    <main className="bg-[#F7FBFF]">
      {/* ABOVE THE FOLD */}
      <Navbar />
      <Trust />

      {/* IMPORTANT CONTENT */}
      <Recommended />
      <Accredation />
      <Accredationcards />
      <WhyFamiliesChoose />
      <Learningplan />
      <CurriculumSection />

      {/* CURRICULUM CARDS */}
      {curriculumCardList.map((item) => (
        <Curicullamcards
          key={item.title}
          title={item.title}
          groupLearning={item.groupLearning}
          oneToOne={item.oneToOne}
        />
      ))}

      {/* LOWER PRIORITY */}
      <BenefitsSection />
      <Feestructure />
      <EnrollmentSteps {...enrollmentSteps} />

      {/* BELOW THE FOLD */}
      <Parentreview />
      <BlogGrid />
      <FAQs />

      {/* CTA */}
      <EnrollCTA />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}