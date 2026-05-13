import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Trust from "@/components/country/uae/trust";
import Parentreview from "@/components/country/uae/parentreview";
import Recommended from "@/components/country/uae/recommended";
import Accredation from "@/components/country/uae/accredation";
import Accredationcards from "@/components/country/uae/accredationcards";
import WhyFamiliesChoose from "@/components/country/uae/whychooseus";
import Learningplan from "@/components/learningplan";
import CurriculumSection from "@/components/country/uae/curicullam";
import Curicullamcards from "@/components/country/uae/curicullamcards";
import { elementarySchoolData,highSchoolData,middleSchoolData } from "@/components/constants/coursecarddata";
import { enrollmentSteps } from "@/components/constants/enrollmentstep";
import BenefitsSection from "@/components/country/uae/benifits";
import Feestructure from "@/components/country/uae/feestructure";
import EnrollmentSteps from "@/components/country/uae/enrollnow";
import BlogGrid from "@/components/country/uae/blog";
import FAQs from "@/components/country/uae/faq";
import EnrollCTA from "@/components/country/uae/enrollcta";

export default function() {
    const curicullamCardList = [elementarySchoolData,middleSchoolData,highSchoolData];
  return (
    <main className="bg-[#F7FBFF]">
      <Navbar />
      <Trust/>
      <Parentreview/>
      <Recommended/>
      <Accredation/>
      <Accredationcards/>
      <WhyFamiliesChoose/>
      <Learningplan/>
      <CurriculumSection/>
      {curicullamCardList.map((item,index)=>{
        return <Curicullamcards key={index} title={item.title} groupLearning={item.groupLearning} oneToOne={item.oneToOne}/>
      })}
      <BenefitsSection/>
      <Feestructure/>
      <EnrollmentSteps {...enrollmentSteps} />
      <BlogGrid/>
      <FAQs/>
      <EnrollCTA/>
      <Footer/>
    </main>
  );
}