import ImageSlider from "./ui/heroimageslider";

export default function(){
    return <>
        <section className="relative h-max w-full flex flex-col bg-blue-800">
            <div className="flex flex-col items-center justify-center gap-1 mt-4">
                <div className="text-white text-sm text-center md:text-2xl"><span className="font-bold">15,000+</span> Students | From <span className="font-bold">190+</span> Countries | <span className="font-bold">600+</span> Teachers</div>
                <div className="md:font-semibold text-white md:text-xl md:mt-6 mt-2 mb-1 md:mb-3 text-center">The Most Trusted & Recommended</div>
                <div className="text-center text-white md:text-6xl text-3xl font-serif">International Online School</div>
                <div className="text-white bg-linear-to-t text-sm md:text-base text-center from-green-700 to-green-500 border border-white rounded-xl md:w-max md:mx-auto mx-2 px-3 py-1 mt-3">Fully Accredited by NEASC, WASC & Cognia, USA | College Board Approved | NCAA Recognized</div>
                <div className="text-center text-white mt-2 md:text-lg text-sm">Globally Recognized | KG-Grade 12 American Curriculum</div>
                <div className="px-2 w-max rounded md:text-xl font-bold md:z-10 left-0 right-0 md:mt-5 text-black bg-linear-to-l md:from-transparent from-white via-white md:to-transparent to-white md:w-1/2  mx-auto text-center"><p>Graduation Ceremony 2025 - Dubai</p></div>
            </div>
            <ImageSlider/>
            <div className="px-2 w-max rounded-b md:text-xl font-bold text-black bg-linear-to-l md:from-transparent from-white via-white md:to-transparent to-white md:w-1/2  mx-auto text-center"><p className="text-center text-black">Next Graduation Ceremony 2026</p></div>
            <p className="text-center text-white">Dubai | Spain | Colombia</p>
        </section>
    </>
}