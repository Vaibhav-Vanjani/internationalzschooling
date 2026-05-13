import Image from "next/image";

export default function() {
  return (
    <>
      <section className="relative py-16 lg:py-20 overflow-hidden">
        
        {/* BACKGROUND EFFECTS */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-emerald-50/40 to-white"></div>

        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl"></div>

        <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl"></div>

        <div className="relative r-w px-4">
          
          {/* HEADING */}
          <div className="text-center space-y-6">
            
            <h1 className="text-xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Most Trusted and Recommended
              <br />

              <span className="text-2xl md:text-5xl text-emerald-700">
                Online School in UAE
              </span>
            </h1>

            <p className="text-justify md:text-center text-sm md:text-base text-slate-600 leading-relaxed">
              International Schooling, since 2014, is the most trusted and
              recommended International online school in Dubai & UAE, serving
              2500+ students. Offering the American Curriculum, International
              Schooling is the best online school in the UAE, and the only
              recognized online school accredited by the top largest and most
              reputed accreditors, NEASC, WASC, and Cognia. Approved by the
              College Board, USA, and NCAA, USA, supported by 600+
              internationally trained and certified teachers, International
              Schooling serves 15000+ students across 190+ countries.
            </p>
          </div>

          {/* IMAGE SECTION */}
          <div className="mt-12 relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            
            <Image
              src="/uae-family-2.webp"
              alt="Parents with kids in UAE"
              width={1200}
              height={650}
              quality={60}
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="h-[420px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/30 to-transparent"></div>

            <div className="absolute bottom-6 text-center left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white space-y-2">
              
              <h2 className="text-2xl md:text-3xl font-extrabold">
                200+ Nationalities living in UAE
              </h2>

              <p className="text-sm md:text-base text-white">
                International Schooling is the best online school trusted by
                families in Dubai and across the UAE.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          className="relative flex w-max items-center mx-auto justify-center rounded-xl bg-emerald-700 px-6 py-3 mt-8 text-sm font-semibold text-white hover:bg-emerald-600 transition"
          href="#book-call"
        >
          Book Free Demo
        </a>
      </section>
    </>
  );
}