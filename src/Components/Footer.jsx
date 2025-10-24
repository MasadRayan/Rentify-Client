import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router";
import "remixicon/fonts/remixicon.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const colRefs = useRef([]);

  

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white rounded-4xl mx-4 pt-10 pb-6 mt-16"
    >
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand + Description */}
        <div ref={(el) => (colRefs.current[0] = el)}>
          <h1 className="text-2xl lg:text-[2rem] font-medium tracking-wide text-white flex items-center gap-2">
            <i className="ri-car-line text-[#fe5d3d]"></i>Rentify
          </h1>
          <p className="mt-4 text-white leading-relaxed">
            We bring you reliable, fast, and affordable car rentals & driver
            services designed to open doors to exciting new journeys.
          </p>
          {/* Socials */}
          <div className="flex gap-4 mt-4 text-white text-xl">
            <a
              href="https://www.facebook.com/masad.rayan.2024/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-facebook-line social-icon cursor-pointer transition" />
            </a>
            <a
              href="https://x.com/Masad_Rayan"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-twitter-line social-icon cursor-pointer transition" />
            </a>
            <a
              href="https://www.instagram.com/masad_rayan/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-instagram-line social-icon cursor-pointer transition" />
            </a>
            <a
              href="https://github.com/MasadRayan"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-github-line social-icon cursor-pointer transition" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div ref={(el) => (colRefs.current[1] = el)}>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-3">
            <li>
              <NavLink
                to={"/"}
                className="text-[1.1rem] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-[#fe5d3d] hover:after:w-full after:transition-all after:duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/allCars"}
                className="text-[1.1rem] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-[#fe5d3d] hover:after:w-full after:transition-all after:duration-300"
              >
                All Cars
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/carOwners"}
                className="text-[1.1rem] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-[#fe5d3d] hover:after:w-full after:transition-all after:duration-300"
              >
                List Your Cars
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/beADriver"}
                className="text-[1.1rem] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-[#fe5d3d] hover:after:w-full after:transition-all after:duration-300"
              >
                Be A Driver
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard"}
                className="text-[1.1rem] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-[#fe5d3d] hover:after:w-full after:transition-all after:duration-300"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div ref={(el) => (colRefs.current[2] = el)}>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-white">
            <li className="flex items-center gap-2">
              <i className="ri-phone-line text-[#fe5d3d]"></i>
              <span>+880 1709341256</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-mail-line text-[#fe5d3d]"></i>
              <span>masadrayan2002@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-map-pin-line text-[#fe5d3d]"></i>
              <span>Chandgaon R/A, Chattogram, Bangladesh.</span>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div ref={(el) => (colRefs.current[3] = el)}>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-white mb-3">
            Enter your email to register for our newsletter
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none w-1/2 md:w-3/4"
            />
            <button className="bg-[#fe5d3d] text-white px-6 rounded-r-full hover:bg-[#fa2a00] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-white text-sm">
        Copyright © {new Date().getFullYear()} Rentify | Developed by{" "}
        <span className="font-semibold text-[#fe5d3d]">Masad Rayan</span>. All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
