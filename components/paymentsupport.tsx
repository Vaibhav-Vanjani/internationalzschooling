import CollegeSlider from "./ui/collegeSlider";
import { payments } from "./constants/collegeList";

export default function() {

  return (
    <CollegeSlider collegeList={payments} background={"bg-[#ECF6FF]"}/>
  );
}