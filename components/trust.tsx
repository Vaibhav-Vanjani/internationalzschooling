export default function ComparisonTable() {
  const rows = [
    {
      feature: "Curriculum",
      best: "100% International Curriculum",
      online: "Old traditional methods",
      traditional: "100-year-old system",
    },
    {
      feature: "Teachers",
      best: "600+ certified international teachers",
      online: "Limited & unverified",
      traditional: "Local only, no global exposure",
    },
    {
      feature: "Learning approach",
      best: "Personalized for every child",
      online: "One-size-fits-all",
      traditional: "Rigid, no flexibility",
    },
    {
      feature: "Class format",
      best: "Live + interactive, real-time",
      online: "Pre-recorded videos only",
      traditional: "One-way lecture style",
    },
    {
      feature: "Assessments",
      best: "Continuous & ongoing",
      online: "No structured assessments",
      traditional: "Single year-end exam only",
    },
    {
      feature: "Environment",
      best: "Safe, comfortable, from home",
      online: "Unmonitored online spaces",
      traditional: "Crowded classrooms, peer pressure",
    },
    {
      feature: "Skills",
      best: "Future-ready: AI, global, digital",
      online: "Outdated skill sets",
      traditional: "No focus on future skills",
    },
    {
      feature: "Schedule",
      best: "Fully flexible, learn anytime",
      online: "Fixed rigid timings",
      traditional: "Strict fixed hours, no choice",
    },
    {
      feature: "Community",
      best: "Global student network",
      online: "No community support",
      traditional: "Limited to local classmates only",
    },
  ];

  return (
    <div className="bg-[#F7FBFF]/95">
      <h3 className="font-black md:text-3xl text-xl text-center mb-5 py-6 px-4 text-[#027FFF]">
        Why 15,000+ Families Trusted International Schooling
      </h3>

      {/* Desktop */}
      <div className="overflow-hidden flex justify-center">
  <div className="h-fit scale-x-75 origin-top sm:scale-x-80 md:scale-x-90 lg:scale-x-100">
    <table className="mx-2 table-auto border-separate border-spacing-0">
         <thead>
              <tr className="text-center">
                <th className="rounded-tl-2xl w-[24%] bg-blue-600 px-6 py-6 text-left text-white font-black">
                  What your child needs
                </th>
                <th className="w-[30%] bg-gradient-to-b from-[#2f7ee8] to-[#2561c6] text-white px-6 py-4">
                  International Schooling
                </th>
                <th className="w-[23%] bg-gray-200 px-6 py-4">
                  Other Online Schools
                </th>
                <th className="rounded-tr-2xl w-[23%] bg-gray-200 px-6 py-4">
                  Traditional Schools
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  
                  <th className={`${(i+1)===rows.length ? "rounded-bl-2xl" : ""} bg-[#213a5c] text-white text-left mx-2 px-6 py-4 border-b border-[#44556e]`}>
                    {row.feature}
                  </th>

                  <td className="bg-[#0d274a] text-[#24b463] text-center mx-2 px-4 py-4 border-x-[2px] border-[#2f7ee8]">
                    {row.best}
                  </td>

                  <td className="bg-gray-200 text-red-600 text-center px-4 py-4">
                    {row.online}
                  </td>

                  <td className={`${(i+1)===rows.length ? "rounded-br-2xl" : ""} bg-gray-200 text-red-600 text-center px-4 py-4`}>
                    {row.traditional}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}