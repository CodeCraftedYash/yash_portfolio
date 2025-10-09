import React, { useState, useEffect } from "react";
import { MdSunny } from "react-icons/md";
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
    <div className="w-10 overflow-hidden aspect-square cursor-pointer flex items-center">
      {darkMode ? (
        <MdOutlineNightlight
          className="text-blue-600 hover:cursor-pointer hover:scale-110" style={{fontSize:"var(--icon-size)"}}
          onClick={handleToggle}
        />
      ) : (
        <MdSunny
          className="text-yellow-500 hover:cursor-pointer hover:scale-110" style={{fontSize:"var(--icon-size)"}}
          onClick={handleToggle}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
