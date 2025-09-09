import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Benz from "../../../public/CarBrands/Benz.png";
import Bmw from "../../../public/CarBrands/BMW.png";
import Jaguar from "../../../public/CarBrands/Jaguar.png";
import Audi from "../../../public/CarBrands/Audi.png";
import Tata from "../../../public/CarBrands/Tata.png";
import Mahindra from "../../../public/CarBrands/Mahindra.png";

gsap.registerPlugin(ScrollTrigger);

export const CarBrands = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const logos = Array.from(containerRef.current.querySelectorAll("img"));

    const animateLogos = () => {
      gsap.fromTo(
        logos.slice(0, 3),
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
        }
      );

      gsap.fromTo(
        logos.slice(3),
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
        }
      );
    };

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 70%",
      onEnter: animateLogos,
      onLeaveBack: () => ScrollTrigger.refresh(),
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-[80%] mx-auto"
    >
      <div className="text-center mb-5">
        <h4 className="uppercase text-gray-500 text-xl md:text-2xl">
          Our Partners
        </h4>
      </div>

      <div className="grid grid-cols-3 gap-[40px] justify-items-center md:grid-cols-6 md:gap-[15px]">
        <img
          src={Benz}
          alt="Benz"
          className="w-[120px] h-auto object-contain cursor-pointer md:w-[140px] md:my-[10px]"
        />
        <img
          src={Bmw}
          alt="BMW"
          className="w-[40px] h-auto object-contain cursor-pointer md:w-[60px] md:my-[10px] md:pt-1"
        />
        <img
          src={Jaguar}
          alt="Jaguar"
          className="w-[120px] h-auto object-contain cursor-pointer md:w-[140px] md:my-[10px]"
        />
        <img
          src={Tata}
          alt="Tata"
          className="w-[120px] h-auto object-contain cursor-pointer md:w-[140px] md:my-[10px]"
        />
        <img
          src={Mahindra}
          alt="Mahindra"
          className="w-[120px] h-auto object-contain cursor-pointer md:w-[140px] md:my-[10px]"
        />
        <img
          src={Audi}
          alt="Audi"
          className="w-[120px] h-auto object-contain cursor-pointer md:w-[140px] md:my-[10px]"
        />
      </div>
    </section>
  );
};
