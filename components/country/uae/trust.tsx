import Selectdropdown from "@/components/ui/selectdropdown";
import Image from "next/image";

export default function Trust() {
  return (
    <>
      <div className="mx-4 relative z-10 r-w py-12 lg:py-16 flex justify-center gap-10 flex-wrap">

        <div className="w-2/3 flex flex-col items-center text-center lg:text-left space-y-5">
          
          <div className="inline-flex justify-center items-center gap-2 rounded-full bg-white/90 backdrop-blur px-4 py-1.5 text-xs md:text-sm font-semibold border border-slate-200 text-slate-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-ping"></span>
            Trusted by families in the UAE since 2014
          </div>

          <p className="text-center text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Are you a parent in the UAE?
            <br />
            <span className="text-base md:text-3xl text-emerald-700">
              Looking for an International Online School?
            </span>
          </p>

          <p className="text-center text-sm md:text-base text-blue-700 mt-1">
            Over{" "}
            <span className="font-bold">
              2,000+ UAE families across the UAE
            </span>{" "}
            trust International Schooling for{" "}
            <span className="font-semibold">premium-quality</span>,{" "}
            <span className="font-semibold">affordable fee</span>, and{" "}
            <span className="font-semibold">fully accredited</span> American
            Online Schooling.
          </p>

          {/* CARD */}
          <div className="rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur p-4 md:p-5 shadow-sm max-w-2xl mx-auto lg:mx-0">
            
            <p className="text-2xl text-emerald-600 font-semibold flex gap-2 items-center justify-center">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-hand origin-bottom"
              >
                <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path>
                <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path>
                <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path>
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
              </svg>

              Say Goodbye!
            </p>

            <p className="text-sm md:text-base text-slate-600 text-center">
              <span className="font-medium text-emerald-500 text-lg">
                To early morning school rush and high school fee.
              </span>
              <br />
              Give your child a premium international education at a trusted
              online school chosen by families around the world.
            </p>
          </div>

         <div className="pt-4 grid grid-cols-2 md:grid-cols-3 gap-4 md:w-max">
  
  <div className="group rounded-2xl border border-slate-200 bg-white/85 backdrop-blur p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md col-span-2 md:col-span-1">
    
    <h3 className="text-3xl lg:text-4xl font-extrabold text-emerald-700">
      2500+
    </h3>

    <p className="mt-2 text-sm font-semibold text-slate-700">
      Students from UAE
    </p>
  </div>

  <div className="group rounded-2xl border border-slate-200 bg-white/85 backdrop-blur p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    
    <h3 className="text-3xl lg:text-4xl font-extrabold text-emerald-700">
      600+
    </h3>

    <p className="mt-2 text-sm font-semibold text-slate-700">
      Certified Teachers
    </p>
  </div>

  <div className="group rounded-2xl border border-slate-200 bg-white/85 backdrop-blur p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    
    <h3 className="text-3xl lg:text-4xl font-extrabold text-emerald-700">
      500+
    </h3>

    <p className="mt-2 text-sm font-semibold text-slate-700">
      Course Options
    </p>
  </div>
</div>
        </div>

        {/* RIGHT FORM */}
        <div
          id="book-call"
          className="rounded-3xl border border-slate-200 bg-white/85 backdrop-blur p-4 shadow-sm"
        >
          <div className="text-center">
            <h2 className="text-xl font-semibold text-blue-900">
              Book Free School Demo
            </h2>

            <p className="text-xs md:text-sm text-slate-600 mb-2">
              Our academic expert will guide you.
            </p>
          </div>
          
<form id="calendar-form" className="text-start">
  <div>
    
    <div className="flex items-center justify-between gap-2">
      
      <h2 className="font-semibold text-xs w-max">
        Country : India
      </h2>

      <div className="font-semibold text-xs">
        Time Zone
      </div>

      <div className="flex items-center gap-2 font-semibold text-xs">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-video"
        >
          <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
          <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>

        <Image
          alt="icon"
          width={50}
          height={15}
          quality={60}
          src="/zoom-logo-s.webp"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clock"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>

        30 m
      </div>
    </div>

    <div className="mt-2">
      
      <div className="text-xs w-full css-b62m3t-container">
        
        <span
          id="react-select-timezone-select-live-region"
          className="css-7pg0cj-a11yText"
        />

        <span
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions text"
          role="log"
          className="css-7pg0cj-a11yText"
        />

       <Selectdropdown/>
      </div>
    </div>

    <div className="font-semibold my-4 text-xs flex flex-wrap items-center justify-center gap-2 text-blue-800">
      <p className="text-center text-sm">
        Choose a Day &amp; Time that works for you
      </p>
    </div>

    <div className="grid grid-cols-4 gap-2 mb-4">
      
      {[
        { day: "13", month: "May", week: "Wed" },
        { day: "14", month: "May", week: "Thu" },
        { day: "15", month: "May", week: "Fri" },
        { day: "16", month: "May", week: "Sat" },
        { day: "18", month: "May", week: "Mon" },
        { day: "19", month: "May", week: "Tue" },
        { day: "20", month: "May", week: "Wed" },
        { day: "21", month: "May", week: "Thu" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 border px-1 py-2 rounded-xl text-center cursor-pointer hover:bg-blue-50 transition"
        >
          <h3 className="text-lg leading-none">{item.day}</h3>
          <h4 className="text-sm font-semibold">{item.month}</h4>
          <h4 className="text-xs">{item.week}</h4>
        </div>
      ))}
    </div>
  </div>
</form>

          <div className="mt-4 space-y-2">
            <h2 className="text-sm md:text-base text-center font-medium text-blue-700">
              Fully Accredited By NEASC, WASC & Cognia, USA
            </h2>

            <Image
              alt="cognia-wasc"
              width={400}
              height={83}
              quality={60}
              className="mx-auto"
              src="/new-strip.webp"
            />
          </div>
        </div>
      </div>
    </>
  );
}