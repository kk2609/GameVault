// import { FaMoon, FaSun } from "react-icons/fa";
// import { useTheme } from "../../Context/themecontext/ThemeContext";

// const ThemeButton = () => {
//     const { darkMode, toggleTheme } = useTheme();

//     return (
//         <button
//             onClick={toggleTheme}
//             className="
//       flex
//       items-center
//       justify-center

//       h-10
//       w-10

//       rounded-full

//       bg-slate-100
//       dark:bg-slate-900
//       "
//         >
//             {darkMode ? (
//                 <FaSun className="text-yellow-400" />
//             ) : (
//                 <FaMoon className="text-violet-600" />
//             )}
//         </button>
//     );
// };

// export default ThemeButton;

import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/themecontext/ThemeContext";
import { useState, useEffect } from "react";

const ThemeButton = () => {
  // Try to get context
  let themeContext;
  try {
    themeContext = useTheme();
  } catch (e) {
    themeContext = null;
  }

  // If context is not available, manage theme locally
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    if (!themeContext) {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode, themeContext]);

  // If context exists, use it
  if (themeContext) {
    const { darkMode: ctxDark, toggleTheme } = themeContext;
    return (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-brand-primary/10 transition-colors duration-300"
        aria-label="Toggle theme"
      >
        <motion.div
          animate={{ rotate: ctxDark ? 360 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl"
        >
          {ctxDark ? <FaSun /> : <FaMoon />}
        </motion.div>
      </button>
    );
  }

  // Fallback: local theme management
  const toggleLocalTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleLocalTheme}
      className="p-2 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-brand-primary/10 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ rotate: darkMode ? 360 : 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg sm:text-xl"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </motion.div>
    </button>
  );
};

export default ThemeButton;