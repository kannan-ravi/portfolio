"use client";

import { useState, useEffect } from "react"; // Import useState and useEffect
import useDarkMode from "@/hooks/useDarkMode";

import { MdLightMode, MdNightlightRound } from "react-icons/md";

type props = {
  className?: string;
};

const ThemeButton = ({ className }: props) => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Dark and Light Mode Button"
      className={className}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <MdNightlightRound /> : <MdLightMode />}
    </button>
  );
};

export default ThemeButton;
