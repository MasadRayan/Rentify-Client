import React, { useEffect } from "react";
import { Outlet, Link } from "react-router";
import { FaBars, FaHome, FaUser, FaCog } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const DashboardLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      {/* Drawer toggle for small screens */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main content area */}
      <div className="drawer-content flex flex-col">
        {/* Navbar for small screens */}
        <div className="flex items-center justify-between bg-base-100 p-4 shadow-md lg:hidden">
          <h1 className="text-xl font-semibold text-primary">Dashboard</h1>
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-ghost drawer-button"
          >
            <FaBars className="text-2xl" />
          </label>
        </div>

        {/* Page outlet area */}
        <div data-aos="fade-up" className="flex-1 p-6 lg:p-10 overflow-y-auto">
          <Outlet />
        </div>
      </div>

      {/* Sidebar Drawer */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside className="w-64 bg-base-100 text-base-content min-h-full shadow-lg">
          {/* Logo or title */}
          <div className="p-4 border-b border-base-300">
            <h2 className="text-2xl font-bold text-primary">My Dashboard</h2>
          </div>

          {/* Sidebar Menu */}
          <ul className="menu p-4 text-base space-y-2">
            <li>
              <Link to="/dashboard/home" className="flex items-center gap-3">
                <FaHome className="text-lg" /> Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="flex items-center gap-3">
                <FaUser className="text-lg" /> Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/settings" className="flex items-center gap-3">
                <FaCog className="text-lg" /> Settings
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
