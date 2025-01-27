import React, { useState, useEffect } from "react";
import Moon from "../assets/moon.svg";
import Sun from "../assets/sun.svg";

const AppearanceButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Add transition to smooth the theme switch
    document.documentElement.classList.add("duration-300"); // 0.3s

    // Check saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "black");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "cupcake");
      }
    } else {
      // Fallback to system preference if no theme is saved
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemPrefersDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "black");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "cupcake");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;

      if (newMode) {
        // Enable dark mode
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "black");
        localStorage.setItem("theme", "dark");
      } else {
        // Enable light mode
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "cupcake");
        localStorage.setItem("theme", "light");
      }

      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition "
      aria-label="Toggle Dark Mode"
    >
      <img
        className={`w-6 h-6 ${isDarkMode ? "" : "invert"}`}
        src={isDarkMode ? Moon : Sun}
        alt={isDarkMode ? "Moon icon for dark mode" : "Sun icon for light mode"}
      />
    </button>
  );
};

export default AppearanceButton;
