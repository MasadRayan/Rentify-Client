import { useEffect, useState } from "react";

import car1 from "../../../public/images/Car1.png";
import car2 from "../../../public/images/Car2.png";
import car3 from "../../../public/images/Car3.png";
import car4 from "../../../public/images/Car4.png";
import car5 from "../../../public/images/Car5.png";
import car6 from "../../../public/images/Car6.png";

const Services = () => {
  const carImages = [car1, car2, car3, car4, car5, car6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [carImages.length]);

  return (
    <section className="w-[70vw] mx-auto md:mt-30 mt-10 " >
      {/* Header */}
      <div className="text-center my-15">
        <h4 className="uppercase text-gray-500 md:text-lg tracking-wide">
          Our Services
        </h4>
        <h3 className="text-2xl md:text-4xl font-semibold mt-2">
          We Ensure the Best{" "}
          <span className="bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
            Customer Experience
          </span>
        </h3>
      </div>

      {/* Features + Image */}
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-6 mt-10">
        {/* Left Column */}
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="text-center transition-transform duration-300 hover:-translate-y-1">
            <div className="bg-[#eeeff1] w-max mx-auto p-3 md:p-4 border-4 border-white rounded-lg shadow-md hover:shadow-xl transition-all">
              <i className="ri-money-dollar-circle-fill text-2xl md:text-3xl text-[#fe5d3d]"></i>
            </div>
            <h4 className="text-base md:text-lg font-medium mt-3">
              Competitive Pricing
            </h4>
          </div>

          <div className="text-center transition-transform duration-300 hover:-translate-y-1">
            <div className="bg-[#eeeff1] w-max mx-auto p-3 md:p-4 border-4 border-white rounded-lg shadow-md hover:shadow-xl transition-all">
              <i className="ri-wallet-3-fill text-2xl md:text-3xl text-[#fe5d3d]"></i>
            </div>
            <h4 className="text-base md:text-lg font-medium mt-3">
              Easier Rent On Your Budget
            </h4>
          </div>

          <div className="text-center transition-transform duration-300 hover:-translate-y-1">
            <div className="bg-[#eeeff1] w-max mx-auto p-3 md:p-4 border-4 border-white rounded-lg shadow-md hover:shadow-xl transition-all">
              <i className="ri-bank-card-fill text-2xl md:text-3xl text-[#fe5d3d]"></i>
            </div>
            <h4 className="text-base md:text-lg font-medium mt-3">
              Most Flexible Payment Plans
            </h4>
          </div>
        </div>

        {/* Image */}
        <div className="my-8 md:my-0">
          <img
            src={carImages[currentImageIndex]}
            alt="Car"
            className="max-w-[100vw] md:max-w-[44vw] object-contain mx-auto transform md:-rotate-90"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="text-center transition-transform duration-300 hover:-translate-y-1">
            <div className="bg-[#eeeff1] w-max mx-auto p-3 md:p-4 border-4 border-white rounded-lg shadow-md hover:shadow-xl transition-all">
              <i className="ri-medal-fill text-2xl md:text-3xl text-[#fe5d3d]"></i>
            </div>
            <h4 className="text-base md:text-lg font-medium mt-3">
              Best Extended Auto Warranties
            </h4>
          </div>

          <div className="text-center transition-transform duration-300 hover:-translate-y-1">
            <div className="bg-[#eeeff1] w-max mx-auto p-3 md:p-4 border-4 border-white rounded-lg shadow-md hover:shadow-xl transition-all">
              <i className="ri-user-star-fill text-2xl md:text-3xl text-[#fe5d3d]"></i>
            </div>
            <h4 className="text-base md:text-lg font-medium mt-3">
              Roadside Assistance 24/7
            </h4>
          </div>

          <div className="text-center transition-transform duration-300 hover:-translate-y-1">
            <div className="bg-[#eeeff1] w-max mx-auto p-3 md:p-4 border-4 border-white rounded-lg shadow-md hover:shadow-xl transition-all">
              <i className="ri-taxi-wifi-fill text-2xl md:text-3xl text-[#fe5d3d]"></i>
            </div>
            <h4 className="text-base md:text-lg font-medium mt-3">
              Your Choice Of Mechanic
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;