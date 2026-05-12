import Learningplancards from "./ui/learningplancards"

export const learningPlans = [
  {
    id: "group-learning",
    title: "Group Learning",
    subtitle: "1 Teacher | 10-15 Students",
    description:
      "Group learning offers a dynamic classroom experience with fixed timings and collaborative projects. You'll join classmates for live sessions and follow a set schedule for assignments and assessments.",
    features: [
      "Group Live Classes",
      "Fixed Timings",
      "Each Class is 60 minutes",
      "Fixed Dates for Assessments and Assignments",
      "Compulsory Collaborative Assignments",
      "3 Student Counseling Sessions",
      "3 Career Counseling Sessions",
      "3 Parent Teacher Meetings",
      "Fixed Start Date for Enrollment",
      "Academic Year Duration is 42-45 Weeks",
      "Fixed Schedule for Holidays",
    ],
    imageId:"/gl.webp",
  },

  {
    id: "one-to-one",
    title: "One-To-One Learning",
    subtitle: "1 Teacher | 1 Student",
    description:
      "Our one-to-one learning offers personalized live classes designed to fit your schedule. You get flexible timings, individual attention, and the freedom to learn at your own pace.",
    features: [
      "One-to-One Live Classes",
      "Flexible Timings",
      "Each Class of 50 Minutes",
      "Flexible Dates for Assessments and Assignments",
      "Exemption from Collaborative Assignments",
      "6 Student Counseling Sessions",
      "6 Career Counseling Sessions",
      "6 Parent Teacher Meetings",
      "Flexible Start Date for enrollment",
      "Academic Year Duration is 42 weeks",
      "Flexible Schedule of Holidays",
    ],
    imageId:"/one.webp",
  },

  {
    id: "self-learning",
    title: "Self-Learning",
    subtitle: "Independent Study",
    description:
      "We offer over 500 self-paced courses, allowing independent study at your own speed. Unlike automated grading, our live teachers offer customized feedback, enhancing your learning experience and helping you earn valuable academic credits.",
    features: [
      "Self-paced Study",
      "Flexible timings",
      "No Live Classes",
      "Flexible dates for assessments and assignments",
      "Personalized learning material",
      "No deadlines for assignments",
      "24/7 support",
      "500+ courses",
      "Flexible start date for enrollment",
      "42-week academic year",
      "Make your own plans for holidays",
    ],
    imageId:"/sl.webp",
  },

  {
    id: "self-learning-plus",
    title: "Self-Learning Plus",
    subtitle: "Self-paced + Weekly Live Class",
    description:
      "We offer over 500 self-paced courses, along with one live class per week. These live sessions, along with doubt-clearing sessions, ensure a tailored learning journey. Earn academic credits for university admissions with support from our certified teachers.",
    features: [
      "Self-paced Study with doubt clearing classes",
      "Flexible timings",
      "Each class of 60 Minutes per week",
      "Flexible dates for assessments and assignments",
      "Personalized learning material",
      "No deadlines for assignments",
      "Monday to Friday support",
      "500+ courses",
      "Flexible start date for enrollment",
      "42-week academic year",
      "Make your own plans for holidays",
    ],
    imageId:"/slp.webp",
  },
];

export default function (){
  return <>
      <div className="py-10">
        <h2 className="font-black md:text-3xl text-center mb-10 px-2 text-[#027FFF]">
          Choose the Learning Plan That Fits Your Child
        </h2>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
        { learningPlans.map((item,index)=>{
          return <Learningplancards key={index} item={item}/>
        })
        }
        </div>
    </>
}
