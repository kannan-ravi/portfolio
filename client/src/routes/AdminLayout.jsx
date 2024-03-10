import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import SidebarHeader from "../components/SidebarHeader";
import Footer from "../components/Footer";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSideBarOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full bg-darkblue">
      <AdminSidebar
        handleSideBarOpen={handleSideBarOpen}
        isSideBarOpen={isOpen}
      />
      <div
        className={`transition-all duration-300 ease-in-out min-h-screen ${
          isOpen ? "lg:ps-64" : "lg:ps-0"
        }`}
      >
        <SidebarHeader />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
