import React, { useState, useEffect } from "react";
import Moon from "../assets/moon.svg";
import Sun from "../assets/sun.svg";

const AppearanceButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // add transition
    document.documentElement.classList.add("duration-300"); // 0.3s

    const savedTheme = localStorage.getItem("theme");
    // try to get saved theme
    if (savedTheme) {
      if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "black");
        setIsDarkMode(true);
      } else {
        document.documentElement.setAttribute("data-theme", "cupcake");
      }
    }
    // if not, get system theme
    else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemPrefersDark) {
        document.documentElement.setAttribute("data-theme", "black");
        setIsDarkMode(true);
      } else {
        document.documentElement.setAttribute("data-theme", "cupcake");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.setAttribute("data-theme", "black");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "cupcake");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <button onClick={toggleDarkMode}>
      <img
        id="modeImg"
        className={`size-8 ${isDarkMode ? "" : "invert"}`}
        src={isDarkMode ? Moon : Sun}
        alt="Toggle Theme"
      />
    </button>
  );
};

export default AppearanceButton;
