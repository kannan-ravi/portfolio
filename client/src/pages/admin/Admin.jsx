import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import useWindowSize from "../../hooks/useWindowSize";
import SidebarHeader from "../../components/SidebarHeader";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { windowSize } = useWindowSize();

  return (
    <div className="relative flex gap-4 overflow-hidden bg-darkblue">
      <AdminSidebar isOpens={isOpen} />
      <div
        className={`transition-all duration-300 ease-in-out  ${
          isOpen && windowSize.innerWidth > 992 ? "ps-72" : "ps-8"
        }`}
      >
        <SidebarHeader setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Admin;
