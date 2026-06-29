// import { NavLink } from "react-router-dom";
// import {
//   FaHeart,
//   FaShoppingCart,
//   FaSearch,
// } from "react-icons/fa";

// import ThemeButton from "../themebutton/ThemeButton";
// import AnimationWrapper from "../animationwrapper/AnimationWrapper";

// // ✅ Correct import path – assets is at root (three levels up)
// import logo from "../../../assets/logos/logo.png";

// const Header = () => {
//   const navLinkClass = ({ isActive }) =>
//     `relative text-sm font-medium transition-colors duration-300 ${
//       isActive
//         ? "text-brand-primary"
//         : "text-[var(--text-secondary)] hover:text-brand-primary"
//     }`;

//   return (
//     <AnimationWrapper animationType="fadeDown" delay={0} duration={0.5}>
//       <header
//         className="
//           sticky
//           top-0
//           z-50
//           bg-[var(--bg-header)]
//           backdrop-blur-xl
//           border-b
//           border-[var(--border-color)]
//           transition-colors
//           duration-300
//         "
//       >
//         <div
//           className="
//             mx-auto
//             max-w-7xl
//             px-6
//             py-4
//             flex
//             items-center
//             justify-between
//             gap-8
//           "
//         >
//           {/* Logo */}
//           <NavLink to="/" className="flex items-center gap-3">
//             <img
//               src={logo}
//               alt="GameVault"
//               className="h-10 w-auto object-contain"
//             />
//             <h1
//               className="
//                 text-3xl
//                 font-bold
//                 text-[var(--text-primary)]
//                 font-[var(--font-primary-font)]
//               "
//             >
//               GameVault
//             </h1>
//           </NavLink>

//           {/* Navigation */}
//           <nav className="hidden lg:flex items-center gap-8">
//             <NavLink to="/" className={navLinkClass}>
//               Home
//             </NavLink>
//             <NavLink to="/games" className={navLinkClass}>
//               Games
//             </NavLink>
//             <NavLink to="/consoles" className={navLinkClass}>
//               Consoles
//             </NavLink>
//             <NavLink to="/accessories" className={navLinkClass}>
//               Accessories
//             </NavLink>
//           </nav>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">
//             {/* Search */}
//             <div
//               className="
//                 hidden
//                 md:flex
//                 items-center
//                 gap-3
//                 px-4
//                 py-3
//                 rounded-xl
//                 bg-[var(--bg-secondary)]
//                 w-[260px]
//                 border
//                 border-[var(--border-color)]
//                 focus-within:border-brand-primary
//                 transition-colors
//                 duration-300
//               "
//             >
//               <FaSearch className="text-[var(--text-secondary)]" />
//               <input
//                 type="text"
//                 placeholder="Search for games, consoles..."
//                 className="
//                   w-full
//                   bg-transparent
//                   outline-none
//                   text-sm
//                   text-[var(--text-primary)]
//                   placeholder:text-[var(--text-secondary)]
//                   font-[var(--font-secondary-font)]
//                 "
//               />
//             </div>

//             {/* Wishlist */}
//             <button
//               className="
//                 text-xl
//                 text-[var(--text-secondary)]
//                 hover:text-brand-primary
//                 transition-colors
//                 duration-300
//               "
//             >
//               <FaHeart />
//             </button>

//             {/* Cart */}
//             <button
//               className="
//                 relative
//                 text-xl
//                 text-[var(--text-secondary)]
//                 hover:text-brand-primary
//                 transition-colors
//                 duration-300
//               "
//             >
//               <FaShoppingCart />
//               <span
//                 className="
//                   absolute
//                   -top-2
//                   -right-2
//                   h-5
//                   w-5
//                   rounded-full
//                   bg-brand-primary
//                   text-[10px]
//                   text-white
//                   flex
//                   items-center
//                   justify-center
//                   font-[var(--font-primary-font)]
//                 "
//               >
//                 2
//               </span>
//             </button>

//             {/* Theme Toggle */}
//             <ThemeButton />

//             {/* Profile */}
//             <img
//               src="https://i.pravatar.cc/100"
//               alt="Profile"
//               className="
//                 h-10
//                 w-10
//                 rounded-full
//                 border-2
//                 border-brand-primary
//               "
//             />
//           </div>
//         </div>
//       </header>
//     </AnimationWrapper>
//   );
// };

// export default Header;

// import { NavLink } from "react-router-dom";
// import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

// import ThemeButton from "../themebutton/ThemeButton";
// import AnimationWrapper from "../animationwrapper/AnimationWrapper";

// // ✅ No import needed – use public folder path
// // const logo = "/logo.png";

// const Header = () => {
//   const navLinkClass = ({ isActive }) =>
//     `relative text-sm font-medium transition-colors duration-300 ${
//       isActive
//         ? "text-brand-primary"
//         : "text-[var(--text-secondary)] hover:text-brand-primary"
//     }`;

//   return (
//     <AnimationWrapper animationType="fadeDown" delay={0} duration={0.5}>
//       <header
//         className="
//           sticky
//           top-0
//           z-50
//           bg-[var(--bg-header)]
//           backdrop-blur-xl
//           border-b
//           border-[var(--border-color)]
//           transition-colors
//           duration-300
//         "
//       >
//         <div
//           className="
//             mx-auto
//             max-w-7xl
//             px-6
//             py-4
//             flex
//             items-center
//             justify-between
//             gap-8
//           "
//         >
//           {/* Logo - from public folder */}
//           <NavLink to="/" className="flex items-center gap-3">
//             <img
//               src="/logo.png"
//               alt="GameVault"
//               className="h-10 w-auto object-contain"
//             />
//             <h1
//               className="
//                 text-3xl
//                 font-bold
//                 text-[var(--text-primary)]
//                 font-[var(--font-primary-font)]
//               "
//             >
//               GameVault
//             </h1>
//           </NavLink>

//           {/* Navigation */}
//           <nav className="hidden lg:flex items-center gap-8">
//             <NavLink to="/" className={navLinkClass}>
//               Home
//             </NavLink>
//             <NavLink to="/games" className={navLinkClass}>
//               Games
//             </NavLink>
//             <NavLink to="/consoles" className={navLinkClass}>
//               Consoles
//             </NavLink>
//             <NavLink to="/accessories" className={navLinkClass}>
//               Accessories
//             </NavLink>
//           </nav>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">
//             {/* Search */}
//             <div
//               className="
//                 hidden
//                 md:flex
//                 items-center
//                 gap-3
//                 px-4
//                 py-3
//                 rounded-xl
//                 bg-[var(--bg-secondary)]
//                 w-[260px]
//                 border
//                 border-[var(--border-color)]
//                 focus-within:border-brand-primary
//                 transition-colors
//                 duration-300
//               "
//             >
//               <FaSearch className="text-[var(--text-secondary)]" />
//               <input
//                 type="text"
//                 placeholder="Search for games, consoles..."
//                 className="
//                   w-full
//                   bg-transparent
//                   outline-none
//                   text-sm
//                   text-[var(--text-primary)]
//                   placeholder:text-[var(--text-secondary)]
//                   font-[var(--font-secondary-font)]
//                 "
//               />
//             </div>

//             {/* Wishlist */}
//             <button
//               className="
//                 text-xl
//                 text-[var(--text-secondary)]
//                 hover:text-brand-primary
//                 transition-colors
//                 duration-300
//               "
//             >
//               <FaHeart />
//             </button>

//             {/* Cart */}
//             <button
//               className="
//                 relative
//                 text-xl
//                 text-[var(--text-secondary)]
//                 hover:text-brand-primary
//                 transition-colors
//                 duration-300
//               "
//             >
//               <FaShoppingCart />
//               <span
//                 className="
//                   absolute
//                   -top-2
//                   -right-2
//                   h-5
//                   w-5
//                   rounded-full
//                   bg-brand-primary
//                   text-[10px]
//                   text-white
//                   flex
//                   items-center
//                   justify-center
//                   font-[var(--font-primary-font)]
//                 "
//               >
//                 2
//               </span>
//             </button>

//             {/* Theme Toggle */}
//             <ThemeButton />

//             {/* Profile */}
//             <img
//               src="https://i.pravatar.cc/100"
//               alt="Profile"
//               className="
//                 h-10
//                 w-10
//                 rounded-full
//                 border-2
//                 border-brand-primary
//               "
//             />
//           </div>
//         </div>
//       </header>
//     </AnimationWrapper>
//   );
// };

// export default Header;

// import { NavLink } from "react-router-dom";
// import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
// import ThemeButton from "../themebutton/ThemeButton";
// import AnimationWrapper from "../animationwrapper/AnimationWrapper";

// const Header = () => {
//   const navLinkClass = ({ isActive }) =>
//     `relative text-sm font-medium transition-colors duration-300 ${
//       isActive
//         ? "text-brand-primary"
//         : "text-[var(--text-secondary)] hover:text-brand-primary"
//     }`;

//   return (
//     <AnimationWrapper
//       animationType="fadeDown"
//       delay={0}
//       duration={0.5}
//       className="sticky top-0 z-50"
//     >
//       <header className="bg-[var(--bg-header)] backdrop-blur-xl border-b border-[var(--border-color)] transition-colors duration-300">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4 sm:gap-8">
//           {/* Logo */}
//           <NavLink to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
//             <img
//               src="/logo.png"
//               alt="GameVault"
//               className="h-8 sm:h-10 w-auto object-contain"
//             />
//             <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//               GameVault
//             </h1>
//           </NavLink>

//           {/* Navigation */}
//           <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
//             <NavLink to="/" className={navLinkClass}>Home</NavLink>
//             <NavLink to="/games" className={navLinkClass}>Games</NavLink>
//             <NavLink to="/consoles" className={navLinkClass}>Consoles</NavLink>
//             <NavLink to="/accessories" className={navLinkClass}>Accessories</NavLink>
//           </nav>

//           {/* Right Section */}
//           <div className="flex items-center gap-2 sm:gap-4">
//             {/* Search */}
//             <div className="hidden md:flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-[var(--bg-secondary)] w-[140px] sm:w-[200px] lg:w-[260px] border border-[var(--border-color)] focus-within:border-brand-primary transition-colors duration-300">
//               <FaSearch className="text-[var(--text-secondary)] text-sm" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full bg-transparent outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] font-[var(--font-secondary-font)]"
//               />
//             </div>

//             {/* Wishlist */}
//             <button className="text-lg sm:text-xl text-[var(--text-secondary)] hover:text-brand-primary transition-colors duration-300">
//               <FaHeart />
//             </button>

//             {/* Cart */}
//             <button className="relative text-lg sm:text-xl text-[var(--text-secondary)] hover:text-brand-primary transition-colors duration-300">
//               <FaShoppingCart />
//               <span className="absolute -top-2 -right-2 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-brand-primary text-[8px] sm:text-[10px] text-white flex items-center justify-center font-[var(--font-primary-font)]">
//                 2
//               </span>
//             </button>

//             {/* Theme Toggle */}
//             <ThemeButton />

//             {/* Profile */}
//             <img
//               src="https://i.pravatar.cc/100"
//               alt="Profile"
//               className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-brand-primary"
//             />
//           </div>
//         </div>
//       </header>
//     </AnimationWrapper>
//   );
// };

// export default Header;

import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaSearch,
  FaBars,
  FaTimes,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import ThemeButton from "../themebutton/ThemeButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const searchInputRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const closeProfile = () => setIsProfileOpen(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/games", label: "Games" },
    { path: "/consoles", label: "Consoles" },
    { path: "/accessories", label: "Accessories" },
    { path: "/vr-gaming", label: "VR Gaming" },
    { path: "/faq", label: "FAQ's" }
  ];

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-brand-primary"
        : "text-[var(--text-secondary)] hover:text-brand-primary"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50"
    >
      <header
        className={`bg-[var(--bg-header)] backdrop-blur-xl border-b border-[var(--border-color)] transition-all duration-300 ${
          hasScrolled ? "shadow-lg shadow-black/10" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4 sm:gap-8">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
          >
            <motion.img
              src="/logo.png"
              alt="GameVault"
              className="h-8 sm:h-10 w-auto object-contain"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
            />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
              GameVault
            </h1>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Wishlist */}
            <NavLink
              to="/wishlist"
              className="text-lg sm:text-xl text-[var(--text-secondary)] hover:text-brand-primary transition-colors duration-300"
              aria-label="Wishlist"
            >
              <FaHeart />
            </NavLink>

            {/* Theme Toggle */}
            <ThemeButton />

            {/* Profile / Login */}
            {/* {isLoggedIn ? (
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="Profile"
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-brand-primary hidden sm:block cursor-pointer hover:scale-105 transition-transform"
                  onClick={toggleProfile}
                />
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-[var(--shadow-hover)] py-2 z-50"
                      onMouseLeave={closeProfile}
                    >
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-brand-primary/10 transition-colors duration-200 font-[var(--font-secondary-font)]"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-brand-primary/10 transition-colors duration-200 font-[var(--font-secondary-font)]"
                      >
                        My Orders
                      </Link>
                      <button
                        onClick={() => setIsLoggedIn(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 transition-colors duration-200 font-[var(--font-secondary-font)]"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link
                  to="/login"
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-brand-primary transition-colors duration-300 font-[var(--font-secondary-font)] flex items-center gap-1.5"
                >
                  <FaUser className="text-sm" />
                  Login
                </Link>
                <span className="text-[var(--border-color)]">|</span>
                <Link
                  to="/signup"
                  className="text-sm font-medium text-brand-primary hover:text-purple-600 transition-colors duration-300 font-[var(--font-secondary-font)] flex items-center gap-1.5"
                >
                  <FaUserPlus className="text-sm" />
                  Sign Up
                </Link>
              </div>
            )} */}

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-[var(--text-primary)] text-2xl"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-[var(--bg-header)] backdrop-blur-xl border-b border-[var(--border-color)] px-4 py-4 space-y-3 overflow-y-auto max-h-[80vh]"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block text-base font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-brand-primary"
                        : "text-[var(--text-secondary)] hover:text-brand-primary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] mt-2">
                <FaSearch className="text-[var(--text-secondary)] text-sm" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] font-[var(--font-secondary-font)]"
                />
              </div>

              {isLoggedIn ? (
                <div className="flex items-center gap-3 pt-2 border-t border-[var(--border-color)]">
                  <img
                    src="https://i.pravatar.cc/100"
                    alt="Profile"
                    className="h-8 w-8 rounded-full border-2 border-brand-primary"
                  />
                  <span className="text-sm text-[var(--text-primary)] font-[var(--font-secondary-font)]">
                    My Profile
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-2 pt-2 border-t border-[var(--border-color)]">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-brand-primary transition-colors duration-300 font-[var(--font-secondary-font)]"
                  >
                    <FaUser className="text-base" />
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeMenu}
                    className="flex items-center gap-2 text-sm font-medium text-brand-primary hover:text-purple-600 transition-colors duration-300 font-[var(--font-secondary-font)]"
                  >
                    <FaUserPlus className="text-base" />
                    Sign Up
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </motion.div>
  );
};

export default Header;