import React from "react";
import ThemeButton from "./ui/ThemeButton";
import Link from "next/link";

const Nav = () => {

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-1/2 border rounded-full overflow-hidden">
      <ul className="flex items-center px-8 gap-4 justify-between">
        <li className="min-h-12 flex items-center">
          <Link href="" className="tracking-wide">
            Profile
          </Link>
        </li>
        <li className="min-h-12 flex items-center">
          <Link href="/blogs" className="tracking-wide">
            Blogs
          </Link>
        </li>
        <li className="min-h-12 flex items-center">
          <Link href="" className="tracking-wide h-full">
            Contact
          </Link>
        </li>
        <li className="min-h-12 flex items-center">
          <ThemeButton className="text-xl" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
