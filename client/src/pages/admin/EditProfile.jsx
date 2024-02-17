import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import SidebarHeader from "../../components/SidebarHeader";
import useWindowSize from "../../hooks/useWindowSize";
import Logo from "/logo.png";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { windowSize } = useWindowSize();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted')
  }
  return (
    <div className="relative flex flex-col w-full gap-4 overflow-hidden bg-darkblue selection:bg-cyan-500 selection:text-black">
      <AdminSidebar isOpens={isOpen} />
      <div
        className={`transition-all duration-300 ease-in-out  ${
          isOpen && windowSize.innerWidth > 992 ? "ps-72" : "ps-0 lg:ps-8"
        }`}
      >
        <SidebarHeader setIsOpen={setIsOpen} isOpen={isOpen} />

        <div className="w-full px-10 pb-20">
          <div className="w-full px-5 py-8 mt-24 shadow md:p-8 bg-lightblue">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <input type="text" className="w-full px-4 py-2 text-white rounded-md bg-darkblue focus:outline-none" placeholder="Full Name"  />
              <input type="text" className="w-full px-4 py-2 text-white rounded-md bg-darkblue focus:outline-none" placeholder="Username"  />
              <input type="text" className="w-full px-4 py-2 text-white rounded-md bg-darkblue focus:outline-none" placeholder="Email"  />
              <input type="text" className="w-full px-4 py-2 text-white rounded-md bg-darkblue focus:outline-none" placeholder="Phone"  />
              <input type="submit" value="Save" className="w-full px-4 py-2 text-white duration-200 border-4 rounded-md bg-darkblue hover:bg-lightblue border-darkblue focus:outline-none" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
