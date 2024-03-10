import { useState } from "react";
import AdminSidebar from "../../../components/AdminSidebar";
import SidebarHeader from "../../../components/SidebarHeader";

import Logo from "/logo.png";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSideBarOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="w-full px-10 pb-20">
      <div className="w-full px-5 py-8 mt-24 shadow md:p-8 bg-lightblue">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <input
            type="text"
            className="w-full px-4 py-2 text-white rounded-md bg-darkblue focus:outline-none"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="w-full px-4 py-2 text-white rounded-md bg-darkblue focus:outline-none"
            placeholder="Email"
          />
          <input
            type="text"
            className="w-full px-4 py-2 text-white rounded-md bg-darkblue focus:outline-none"
            placeholder="Phone"
          />
        </div>

        <input
          type="submit"
          value="Save"
          className="w-full px-4 py-2 mt-6 text-white duration-200 border-4 rounded-md bg-darkblue hover:bg-lightblue border-darkblue focus:outline-none"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default EditProfile;
