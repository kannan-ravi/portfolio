import { Link, useLocation } from "react-router-dom";
import Logo from "/logo.png";
import { MdDashboard } from "react-icons/md";
import { FaPen, FaUser, FaSignOutAlt } from "react-icons/fa";

const AdminSidebar = ({ isOpens }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`fixed top-0 w-64  px-0 pt-10  pb-0 bg-lightblue transition-all duration-300 flex flex-col gap-4 h-screen overflow-y-scroll scrollbar-hide z-1 
      ease-in-out ${isOpens ? "left-0" : "-left-full"}`}
    >
      <Link to="/" className="flex items-center justify-center">
        <img src={Logo} alt="logo" className="w-24 h-auto rounded" />
      </Link>

      <ul className="flex flex-col flex-grow gap-2 mt-12">
        <li>
          <Link
            to="/admin"
            className={`flex items-center justify-start gap-4 py-4 font-medium duration-200 text-md ps-8 text-slate-300 hover:bg-darkblue lg:text-lg ${
              pathname == "/admin" ? "bg-darkblue" : ""
            }`}
          >
            <MdDashboard className="text-xl duration-200 lg:text-2xl" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/admin/posts"
            className={`flex items-center justify-start gap-4 py-4 font-medium duration-200 text-md ps-8 text-slate-300 hover:bg-darkblue lg:text-lg ${
              pathname == "/admin/posts" ? "bg-darkblue" : ""
            }`}
          >
            <FaPen className="text-xl duration-200 lg:text-2xl" />
            Post
          </Link>
        </li>
        <li>
          <Link
            to="/admin/profile"
            className={`flex items-center justify-start gap-4 py-4 font-medium duration-200 text-md ps-8 text-slate-300 hover:bg-darkblue lg:text-lg ${
              pathname == "/admin/profile" ? "bg-darkblue" : ""
            }`}
          >
            <FaUser className="text-xl duration-200 lg:text-2xl" />
            Profile
          </Link>
        </li>
      </ul>

      <div className="flex items-center justify-start gap-4 py-4 font-medium duration-200 border-0 border-t-2 text-md ps-8 text-slate-300 hover:bg-darkblue lg:text-lg">
        <FaSignOutAlt className="text-xl duration-200 lg:text-2xl" />
        Logout
      </div>
    </div>
  );
};

export default AdminSidebar;
