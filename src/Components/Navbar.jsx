import "remixicon/fonts/remixicon.css";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router";

export const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const drawerRef = useRef(null);
    const linksRef = useRef([]);
    const links = [
        {
            text: "Home",
            icon: "ri-home-4-line",
            link: "/",
        },
        {
            text: "All Cars",
            icon: "ri-car-line",
            link: "/allCars",
        },
        {
            text: "Be A Rider",
            icon: "ri-user-line",
            link: "/beARider",
        },
        {
            text: "Dashboard",
            icon: "ri-dashboard-line",
            link: "/dashboard",
        },
    ]

    const toggleNavbar = () => {
        if (mobileDrawerOpen) {
            gsap.to(drawerRef.current, {
                y: "-100%",
                opacity: 1,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => setMobileDrawerOpen(false),
            });
        } else {
            setMobileDrawerOpen(true);
        }
    };

    useGSAP(
        () => {
            if (mobileDrawerOpen) {
                const tl = gsap.timeline();

                tl.fromTo(
                    drawerRef.current,
                    { y: "-100%", opacity: 0 },
                    { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
                );

                tl.fromTo(
                    linksRef.current,
                    { y: -20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.3,
                        stagger: 0.1,
                        ease: "power2.out",
                    },
                    "-=0.2"
                );
            }
        },
        { dependencies: [mobileDrawerOpen] }
    );

    return (
        <nav className="sticky top-0 z-[999] md:px-10 py-2 backdrop-blur-md">
            <div className="container mx-auto px-4 flex flex-col">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl lg:text-[2rem] font-medium tracking-wide text-black">
                        <i className="ri-car-line"></i>Rentify
                    </h1>

                    <ul className="hidden lg:flex ml-14 space-x-12">
                        <li>
                            <NavLink
                                to={'/'}
                                className="text-[1.1rem] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-[#fe5d3d] hover:after:w-full after:transition-all after:duration-300"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/allCars'}
                                className="text-[1.1rem] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-[#fe5d3d] hover:after:w-full after:transition-all after:duration-300"
                            >
                                All Cars
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/beARider'}
                                className="text-[1.1rem] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-[#fe5d3d] hover:after:w-full after:transition-all after:duration-300"
                            >
                                Be A Rider
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/dashboard'}
                                className="text-[1.1rem] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-[#fe5d3d] hover:after:w-full after:transition-all after:duration-300"
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden lg:flex items-center gap-5">
                        <NavLink
                            to={"/login"}
                            className="px-3 py-1.5 border border-[#111] rounded text-sm font-medium"
                        >
                            Sign In
                        </NavLink>
                        <NavLink
                            to={'/register'}
                            className="px-3 py-1.5 rounded text-sm font-medium bg-[#474fa0] text-white"
                        >
                            Create Account
                        </NavLink>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex flex-col justify-end z-20">
                        <button onClick={toggleNavbar} className="text-xl font-bold">
                            {mobileDrawerOpen ? (
                                <p></p>
                            ) : (
                                <i className="ri-menu-3-fill"></i>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {mobileDrawerOpen && (
                    <div
                        ref={drawerRef}
                        className="fixed top-0 right-0 w-full bg-[#d8dbe0] flex flex-col items-center p-12 z-30"
                    >
                        <button
                            onClick={toggleNavbar}
                            className="absolute top-4 right-4 text-3xl font-bold"
                        >
                            <i className="ri-close-large-fill"></i>
                        </button>
                        <ul className="flex flex-col items-center">
                            {links.map((item, index) => (
                                <li
                                    key={item.text}
                                    ref={(el) => (linksRef.current[index] = el)}
                                    className="mb-7"
                                >
                                    <NavLink
                                        to={item.link}
                                        className="text-[1.6rem] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-[#fe5d3d] hover:after:w-full after:transition-all after:duration-300"
                                    >
                                        <i className={`${item.icon} mr-2`}></i> {item.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-5 mt-8">
                            <NavLink
                                to={"/login"}
                                className="px-3 py-1.5 border border-[#111] rounded text-sm font-medium"
                            >
                                Sign In
                            </NavLink>
                            <NavLink
                                to={"/register"}
                                className="px-3 py-1.5 rounded text-sm font-medium bg-[#474fa0] text-white"
                            >
                                Create Account
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
