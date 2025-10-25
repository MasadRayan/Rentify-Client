import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import footerImage from "/FooterCar.png";

gsap.registerPlugin(ScrollTrigger);

export const BeADriver = () => {
    useEffect(() => {
        const carImage = document.querySelector(".car-img");

        gsap.fromTo(
            carImage,
            { x: "100%" },
            {
                x: "0%",
                scrollTrigger: {
                    trigger: carImage,
                    start: "bottom bottom",
                    end: "top top",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <section
            className="w-[80vw] mx-auto my-24  flex flex-col md:flex-row items-center justify-between rounded-[26px] px-5 py-8 md:py-20 
      bg-gradient-to-br from-[#fe5d3d] to-[#ffae17] overflow-hidden "
        >
            {/* Left Text */}
            <div className="text-white md:ml-20 text-center md:text-left">
                <div className="md:w-[70%] mx-auto md:mx-0">
                    <h2 className="font-medium text-2xl md:text-4xl  mb-2">
                        Become a Rentify Driver Today!
                    </h2>
                    <p className="font-light text-sm md:text-base">
                        Join our community of trusted drivers and start earning with every ride.
                        Enjoy flexible hours, competitive payouts, and the freedom to drive on your own schedule.
                    </p>
                    <button className="mt-4 bg-gradient-to-r from-[#ff8971] to-[#fa2a00] px-3 py-1.5 border-orange-300 rounded text-sm hover:scale-110 hover:shadow-md font-mediumn transition-all">
                        Apply Now
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="overflow-hidden mt-6 md:mt-0">
                <img
                    src={footerImage}
                    alt="Car"
                    className="car-img relative md:left-[20%] w-full md:w-[50vw]"
                />
            </div>
        </section>
    );
};
