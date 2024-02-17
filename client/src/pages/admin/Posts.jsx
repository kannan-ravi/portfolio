import { useState } from "react";
import SidebarHeader from "../../components/SidebarHeader";
import AdminSidebar from "../../components/AdminSidebar";

import useWindowSize from "../../hooks/useWindowSize";

const Posts = () => {
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

export default Posts;
