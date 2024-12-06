import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import SidebarHeader from "../components/admin/SidebarHeader";
import Footer from "../components/Footer";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const loadingBarRef = useRef();
  const { isLoaderStart, isLoaderComplete } = useSelector(
    (state) => state.loader
  );

  const handleSideBarOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isLoaderStart) {
      loadingBarRef.current.continuousStart();
    } else if (isLoaderComplete) {
      loadingBarRef.current.complete();
    }
  }, [isLoaderStart, isLoaderComplete]);
  return (
    <div className="w-full bg-darkblue">
      <LoadingBar color="#f11946" ref={loadingBarRef} />
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
