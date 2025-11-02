import React from 'react'
import { useState, useEffect } from 'react'
import './Theme.css'

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 border rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
    </>
  )
}

export default ThemeToggle
