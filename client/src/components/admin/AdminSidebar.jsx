import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "/logo.png";
import { MdDashboard } from "react-icons/md";
import { FaPen, FaUser, FaSignOutAlt, FaHeadphones, FaLock } from "react-icons/fa";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeUser } from "../../app/features/authSlice";
import { useLogoutMutation } from "../../app/services/authApi";
import {
  removeToast,
  toastError,
  toastSuccess,
} from "../../app/features/toastSlice";

const AdminSidebar = ({ handleSideBarOpen, isSideBarOpen }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout, { error }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      dispatch(removeToast());
      await logout().unwrap();
      dispatch(toastSuccess("Successfully Logged Out"));
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      dispatch(toastError('Something Went Wrong'))
    }
  };

  return (
    <div
      className={`fixed top-0 w-64  px-0 pt-10  pb-0 bg-lightblue transition-all duration-300 flex flex-col gap-4 h-screen scrollbar-hide z-10 
      ease-in-out ${isSideBarOpen ? "start-0" : "-start-64"}`}
    >
      <Link to="/" className="flex items-center justify-center">
        <img src={Logo} alt="logo" className="w-24 h-auto rounded" />
      </Link>

      <RiBarChartHorizontalFill
        className={`absolute text-5xl text-white p-2 rounded cursor-pointer z-0 duration-200 top-5 -end-16`}
        onClick={handleSideBarOpen}
      />

      <ul className="flex flex-col flex-grow mt-12">
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
        <li>
          <Link
            to="/admin/login-details"
            className={`flex items-center justify-start gap-4 py-4 font-medium duration-200 text-md ps-8 text-slate-300 hover:bg-darkblue lg:text-lg ${
              pathname == "/admin/login-details" ? "bg-darkblue" : ""
            }`}
          >
            <FaLock className="text-xl duration-200 lg:text-2xl" />
            Login Details
          </Link>
        </li>
        <li>
          <Link
            to="/admin/contact-attempts"
            className={`flex items-center justify-start gap-4 py-4 font-medium duration-200 text-md ps-8 text-slate-300 hover:bg-darkblue lg:text-lg ${
              pathname == "/admin/contact-attempts" ? "bg-darkblue" : ""
            }`}
          >
            <FaHeadphones className="text-xl duration-200 lg:text-2xl" />
            Contact Attempts
          </Link>
        </li>
      </ul>

      <div
        className="flex items-center justify-start gap-4 py-4 font-medium duration-200 border-0 border-t-2 cursor-pointer text-md ps-8 text-slate-300 hover:bg-darkblue lg:text-lg"
        onClick={handleLogout}
      >
        <FaSignOutAlt className="text-xl duration-200 lg:text-2xl" />
        Logout
      </div>
    </div>
  );
};

export default AdminSidebar;
