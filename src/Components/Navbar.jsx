import "remixicon/fonts/remixicon.css";
import { useState, useRef, use } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router";
import useAuth from "../Hooks/useAuth";

export const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const drawerRef = useRef(null);
    const linksRef = useRef([]);
    const { user } = useAuth();
    const { logOut } = useAuth();
    console.log(user);

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
            text: "List Your Cars",
            icon: "ri-user-line",
            link: "/carOwner",
        },
        {
            text: "Be A Driver",
            icon: "ri-user-line",
            link: "/beADriver",
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

    const handleLogOut = async () => {
        try {
            await logOut();
        }
        catch (error) {
            console.log(error);
        }
    }

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

    const handleNavClick = () => {
        gsap.to(drawerRef.current, {
            y: "-100%",
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => setMobileDrawerOpen(false),
        });
    };


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
                                to={'/carOwners'}
                                className="text-[1.1rem] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-[#fe5d3d] hover:after:w-full after:transition-all after:duration-300"
                            >
                                List Your Cars
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/beADriver'}
                                className="text-[1.1rem] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-[#fe5d3d] hover:after:w-full after:transition-all after:duration-300"
                            >
                                Be A Driver
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
                    {
                        user ? (<>
                            <div className=" justify-end items-center gap-4 hidden lg:flex">
                                <img src={user.photoURL} alt={user.displayName} referrerPolicy="no-referrer" className="w-10 h-10 rounded-full " />


                                <button onClick={handleLogOut} className="btn bg-gradient-to-r from-[#ff8971] to-[#fa2a00] text-white ">Log Out</button>
                            </div>
                        </>) : (
                            <div className="hidden lg:flex items-center gap-5">
                                <NavLink
                                    to={"/login"}
                                    className="btn btn-outline border border-gradient-to-r from-[#ff8971] to-[#fa2a00] text-[#fa2a00]"
                                >
                                    Sign In
                                </NavLink>
                                <NavLink
                                    to={'/register'}
                                    className="btn bg-gradient-to-r from-[#ff8971] to-[#fa2a00] text-white"
                                >
                                    Create Account
                                </NavLink>
                            </div>
                        )
                    }

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
                                        onClick={handleNavClick} 
                                        className="text-[1.6rem] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-[#fe5d3d] hover:after:w-full after:transition-all after:duration-300"
                                    >
                                        <i className={`${item.icon} mr-2`}></i> {item.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {
                            user ? (<>
                                <div className="flex flex-col justify-center items-center gap-7  mt-8">
                                    <div className="flex justify-center items-center gap-4">
                                        <img src={user.photoURL} alt={user.displayName} referrerPolicy="no-referrer" className="w-15 h-15 rounded-full " />
                                        <div><p className=" font-medium text-2xl">{user.displayName}</p></div>
                                    </div>

                                    <button onClick = {() => {handleLogOut(); handleNavClick();}}
                                    className="btn bg-gradient-to-r from-[#ff8971] to-[#fa2a00] text-white ">Log Out</button>
                                </div>
                            </>) : (
                                <div className="items-center gap-5 flex flex-col mt-8">
                                    <NavLink
                                        to={"/login"}
                                        onClick={handleNavClick} 
                                        className="btn btn-outline border border-gradient-to-r from-[#ff8971] to-[#fa2a00] text-[#fa2a00]"
                                    >
                                        Sign In
                                    </NavLink>
                                    <NavLink
                                        to={'/register'}
                                        onClick={handleNavClick} 
                                        className="btn bg-gradient-to-r from-[#ff8971] to-[#fa2a00] text-white"
                                    >
                                        Create Account
                                    </NavLink>
                                </div>
                            )
                        }
                    </div>
                )}
            </div>
        </nav>
    );
};
