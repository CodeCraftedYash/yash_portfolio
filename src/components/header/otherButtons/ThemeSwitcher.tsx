import React, { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";

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
    <div className="w-10 overflow-hidden aspect-square cursor-pointer">
      {darkMode ? (
        <MdOutlineNightlight
          className="text-4xl text-blue-600 hover:cursor-pointer hover:scale-110"
          onClick={handleToggle}
        />
      ) : (
        <CiLight
          className="text-4xl text-yellow-400 hover:cursor-pointer hover:scale-110"
          onClick={handleToggle}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
