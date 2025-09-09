import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const HowItWorks = () => {
    const sectionRef = useRef(null);
    const stepRefs = useRef([]);
    const lineRefs = useRef([]);

    useGSAP(() => {
        stepRefs.current.forEach((step) => {
            gsap.fromTo(
                step,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: step,
                        start: "top 70%",
                        end: "top 20%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        lineRefs.current.forEach((line, index) => {
            gsap.fromTo(
                line,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: stepRefs.current[index],
                        start: "top 70%",
                        end: "top 20%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <section ref={sectionRef} className="mt-20 w-[90%] mx-auto max-w-6xl ">
            <div className="text-center mb-12">
                <h4 className="uppercase text-gray-500 text-lg">How It Works</h4>
                <h3 className="text-2xl mt-2 md:text-4xl font-semibold">
                    Simple Steps to your{" "}
                    <span className="bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
                        Perfect Ride
                    </span>
                </h3>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-6 ">
                {/* Step 1 */}
                <div
                    ref={(el) => (stepRefs.current[0] = el)}
                    className="flex-1 text-center"
                >
                    <div className="bg-[#eeeff1] w-max mx-auto p-5 border-4 border-white rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition-all">
                        <i className="ri-map-pin-fill text-[1.8rem] text-[#fe5d3d]"></i>
                    </div>
                    <h5 className="mt-6 text-lg font-semibold">Choose a Location</h5>
                    <p className="text-gray-600 text-sm mt-2">
                        Easily select the perfect location for your car rental.
                    </p>
                </div>

                {/* Line 1 */}
                <div
                    ref={(el) => (lineRefs.current[0] = el)}
                    className="
                                mx-auto my-3 md:my-0
                                w-[2px] h-[100px] md:w-[180px] md:h-[2px] 
                                bg-[repeating-linear-gradient(to_bottom,orange,rgb(255,133,33)_5px,transparent_5px,transparent_10px)] 
                                md:bg-[repeating-linear-gradient(to_right,orange,rgb(255,133,33)_5px,transparent_5px,transparent_10px)]
                            "
                ></div>


                {/* Step 2 */}
                <div
                    ref={(el) => (stepRefs.current[1] = el)}
                    className="flex-1 text-center"
                >
                    <div className="bg-gradient-to-b from-[#ff4502] to-[#ffb325] w-max mx-auto p-5 border-2 border-white rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition-all">
                        <i className="ri-calendar-schedule-fill text-[1.8rem] text-white"></i>
                    </div>
                    <h5 className="mt-6 text-lg font-semibold">Pick-Up Date</h5>
                    <p className="text-gray-600 text-sm mt-2">
                        Pick a convenient date to start your journey.
                    </p>
                </div>

                {/* Line 2 */}
                <div
                    ref={(el) => (lineRefs.current[1] = el)}
                    className="
                            mx-auto my-3 md:my-0
                            w-[2px] h-[100px] md:w-[180px] md:h-[2px] 
                            bg-[repeating-linear-gradient(to_bottom,orange,rgb(255,133,33)_5px,transparent_5px,transparent_10px)] 
                            md:bg-[repeating-linear-gradient(to_right,orange,rgb(255,133,33)_5px,transparent_5px,transparent_10px)]
                        "
                ></div>

                {/* Step 3 */}
                <div
                    ref={(el) => (stepRefs.current[2] = el)}
                    className="flex-1 text-center"
                >
                    <div className="bg-[#eeeff1] w-max mx-auto p-5 border-4 border-white rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition-all">
                        <i className="ri-bookmark-3-fill text-[1.8rem] text-[#fe5d3d]"></i>
                    </div>
                    <h5 className="mt-6 text-lg font-semibold">Book your Car</h5>
                    <p className="text-gray-600 text-sm mt-2">
                        Reserve your ideal car in just a few clicks.
                    </p>
                </div>
            </div>
        </section>
    );
};
