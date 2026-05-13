import Iframecover from "./ui/iframecover";

export default function(){
    return <div className="bg-linear-to-r from-[#007EFF] to-[#0449CE] py-2">
                <div className="mx-4 r-w space-y-2">
                    <h2 className="text-xl md:text-3xl text-center text-white font-black">Graduation Ceremony 2025 - Dubai</h2>
                    <p className="text-white text-center text-sm md:w-3xl md:mx-auto">International Schooling hosted its first 
                        Graduation Ceremony in 2025 at Atlantis, The Palm, Dubai, reflecting our global community and commitment 
                        to a premium schooling experience beyond the classroom.
                    </p>
                    <div className="flex justify-center">
                        <Iframecover/>
                    </div>
                </div>
            <div className="r-w grid md:grid-cols-2 gap-10"></div>
        </div>
}