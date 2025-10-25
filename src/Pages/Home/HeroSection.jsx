import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CarImage from "../../../public/HeroCar.png";
import { Link } from "react-router";

export const HeroSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { scale: 0.8 },
      { scale: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <main className=" h-screen w-full flex items-center justify-around flex-wrap-reverse md:flex-nowrap md:h-screen section-gap">
      <section
        ref={textRef}
        className="w-[96%] md:w-[34vw] text-center md:text-left px-5 md:p-10"
      >
        <h1 className="text-[2.2rem] md:text-[3rem] leading-[2.5rem] md:leading-[3rem] mb-3 md:mb-8 font-bold">
          Drive your&nbsp;
          <span className="bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
            Dream Car
          </span>{" "}
          Today
        </h1>

        <p className="text-gray-500 text-[0.9rem] md:text-[1rem]">
          Rent the perfect car for any trip with RentXpress. Enjoy flexible
          options, great prices, and a hassle-free experience. Get started in a
          few clicks!
        </p>
        <Link to="/allCars" className="btn mt-5 bg-gradient-to-r from-[#ff8971] to-[#fa2a00] text-white hover:scale-105 hover:shadow-lg transition-all">
          All Cars
        </Link>
        
      </section>

      <section className="relative w-full md:w-auto flex justify-center items-center">
        <div className="w-[80%] md:w-[50vw] h-[40vh] md:h-[80vh] mx-auto relative rounded-t-[40px] rounded-b-md z-[1] animate-[gradient-wave_8s_infinite_cubic-bezier(0.55,0.055,0.675,0.19)] bg-gradient-to-r from-[#ff9c78] via-[#ff7f50] via-[#ff4500] to-[#ff9c78] bg-[length:300%_300%]"></div>

        <img
          ref={imageRef}
          src={CarImage}
          alt="Car"
          className="absolute w-full md:w-[60vw] top-[30%] md:top-[50px] left-1/2 -translate-x-1/2 z-[2]"
        />
      </section>

      <style>
        {`
          @keyframes gradient-wave {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </main>
  );
};
