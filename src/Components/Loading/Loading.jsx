import { useEffect, useRef } from "react";
import anime from "animejs";

const Loading = () => {
  const carRef = useRef(null);
  const wheelFront = useRef(null);
  const wheelBack = useRef(null);

  useEffect(() => {
    // Car movement (left to right loop)
    anime({
      targets: carRef.current,
      translateX: ["-120%", "120%"],
      easing: "easeInOutSine",
      duration: 3000,
      loop: true,
    });

    // Wheel rotation
    anime({
      targets: [wheelFront.current, wheelBack.current],
      rotate: 360,
      easing: "linear",
      duration: 800,
      loop: true,
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999] overflow-hidden">
      <div className="relative w-32 h-16" ref={carRef}>
        {/* Car Body */}
        <div className="absolute top-4 left-0 w-32 h-8 rounded-md bg-gradient-to-r from-[#ff8971] to-[#fa2a00] shadow-lg"></div>

        {/* Car Roof */}
        <div className="absolute top-0 left-8 w-16 h-5 bg-gradient-to-r from-[#ff8971] to-[#fa2a00] rounded-t-md"></div>

        {/* Wheels */}
        <div
          ref={wheelFront}
          className="absolute bottom-0 left-4 w-5 h-5 bg-black rounded-full border-[3px] border-gray-500"
        ></div>
        <div
          ref={wheelBack}
          className="absolute bottom-0 right-4 w-5 h-5 bg-black rounded-full border-[3px] border-gray-500"
        ></div>
      </div>

      <p className="mt-8 text-lg font-semibold bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
        Starting Rentify...
      </p>
    </div>
  );
};

export default Loading;
