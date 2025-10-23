import React, { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";

const ThemeSwitcher: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="p-2 overflow-hidden aspect-square cursor-pointer flex items-center">
      {darkMode ? (
        <BsFillMoonStarsFill
          className="text-cyan-700 hover:cursor-pointer hover:scale-120 transition-all duration-150 ease-in-out" style={{fontSize:"var(--font-size-icon )"}}
          onClick={handleToggle}
        />
      ) : (
        <FaSun
          className="text-amber-500 hover:cursor-pointer hover:scale-120 transition-all duration-150 ease-in-out" style={{fontSize:"var(--font-size-icon )"}}
          onClick={handleToggle}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
