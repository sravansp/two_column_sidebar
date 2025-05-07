import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Main Layout Component
const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size changes
  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //     // if (window.innerWidth < 768) {
  //     //   setSidebarOpen(false);
  //     // } else {
  //     //   setSidebarOpen(true);
  //     // }
  //   };

  //   checkScreenSize();
  //   window.addEventListener("resize", checkScreenSize);
  //   return () => window.removeEventListener("resize", checkScreenSize);
  // }, []);

  return (
    <div className="flex h-screen">
      {/* Overlay for mobile */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-gray-800 bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        isMobile={isMobile}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content Area */}
      <div className={`${sidebarOpen ? "ml-60" : ""} transition-[margin] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative flex flex-col flex-1 overflow-hidden`}>
        {/* Top Navbar */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className={`flex-1 overflow-y-auto bg-[#edf2f6]`}>
          {/* <Outlet /> */}
          <div className="p-4">Main Content</div>
        </main>

        {/* Footer  */}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
