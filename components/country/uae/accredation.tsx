import CollegeSlider from "@/components/ui/collegeSlider";
import { accreditationList } from "@/components/constants/collegeList";

export default function(){
    return <><div>
        <div className="my-2 mx-4 gap-3 flex flex-col items-center">
            <p className="text-center md:text-3xl font-semibold text-emerald-900">Fully Accredited | Globally Recognized</p>
            <div className="md:w-max md:mx-auto flex flex-wrap items-center md:justify-start justify-center gap-2 text-xs md:text-sm text-slate-700"><span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200"><span className="font-semibold">11+ Years</span> of trust</span><span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200"><span className="font-semibold">15,000+</span> students</span><span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200"><span className="font-semibold">600+</span> teachers</span><span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200"><span className="font-semibold">40+</span> languages</span><span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200"><span className="font-semibold">190+</span> countries</span></div>
            <p className="text-center">Join an accredited online school in UAE that blends quality online education with flexibility. Students benefit from expert guidance, interactive classes, and globally accepted qualifications. Our programs follow internationally accepted academic standards and are backed by trusted accreditation, ensuring your child's education is recognized worldwide. Students can seamlessly transition to universities or schools across the globe.</p>
        </div>
        <CollegeSlider collegeList={accreditationList} background={undefined}/>
    </div></>
}