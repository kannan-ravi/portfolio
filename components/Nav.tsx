"use client";
import React, { useEffect, useRef, useState } from "react";
import ThemeButton from "./ui/ThemeButton";
import Link from "next/link";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { GiWhiteBook } from "react-icons/gi";

const Nav = () => {
  const [hoveredItem, setHoveredItem] = useState<null | string>(null);
  const hoverRef = useRef<HTMLUListElement>(null);
  const [hoverStyle, setHoverStyle] = useState({});

  useEffect(() => {
    if (hoveredItem && hoverRef.current) {
      const itemElement = hoverRef.current.querySelector(
        `#${hoveredItem}`
      ) as HTMLElement;
      if (itemElement) {
        setHoverStyle({
          width: itemElement.offsetWidth,
          left: itemElement.offsetLeft,
          opacity: 1,
        });
      }
    } else {
      setHoverStyle({ opacity: 0 });
    }
  }, [hoveredItem]);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 shadow rounded-full overflow-hidden dark:border-amber-50 bg-white dark:bg-black dark:shadow-red-50">
      <ul
        ref={hoverRef}
        className="flex items-center justify-between relative"
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div
          className="absolute top-0 h-full bg-gray-200 dark:bg-slate-800 transition-all duration-500 ease-in-out -z-10"
          style={hoverStyle}
        ></div>

        <li
          className="min-h-16 flex items-center dark:text-white relative z-10 ps-8 pe-6"
          id="home"
          onMouseEnter={() => setHoveredItem("home")}
        >
          <Link href="/" className="tracking-wide text-background">
            <AiFillHome className="text-2xl" />
          </Link>
        </li>
        <li
          className="min-h-12 flex items-center dark:text-white relative z-10 px-6"
          id="blogs"
          onMouseEnter={() => setHoveredItem("blogs")}
        >
          <Link href="/blogs" className="tracking-wide">
            <GiWhiteBook className="text-2xl" />
          </Link>
        </li>
        <li
          className="min-h-12 flex items-center dark:text-white relative z-10 px-6"
          id="contact"
          onMouseEnter={() => setHoveredItem("contact")}
        >
          <Link href="" className="tracking-wide h-full">
            <AiFillPhone className="text-2xl" />
          </Link>
        </li>
        <li
          className="min-h-12 flex items-center cursor-pointer dark:text-white relative z-10 pe-8 ps-6"
          id="theme"
          onMouseEnter={() => setHoveredItem("theme")}
        >
          <ThemeButton className="text-2xl cursor-pointer" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
