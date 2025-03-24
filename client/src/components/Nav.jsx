import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
const Nav = () => {
  const location = useLocation();

  return (
    <nav className="container absolute right-0 sm:right-16 top-10 selection:bg-cyan-500 selection:text-black">
      <div className="flex justify-center w-full space-x-6 sm:justify-end sm:mx-auto">
        {/* <Link
          to="/"
          className={`text-white uppercase duration-200 border-b-2 hover:border-cyan-500 ${
            location.pathname === "/" ? "border-cyan-500" : "border-transparent"
          }`}
        >
          Home
        </Link>
        <Link
          to="/blog"
          className={`text-white uppercase duration-200 border-b-2 hover:border-cyan-500 ${
            location.pathname === "/blog"
              ? "border-cyan-500"
              : "border-transparent"
          }`}
        >
          blog
        </Link> */}

        <div className="ps-2">
          {/* <FaSun className="text-2xl text-white cursor-pointer" /> */}
          {/* <FaMoon className="text-2xl text-white cursor-pointer" /> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
