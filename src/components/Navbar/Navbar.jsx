import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.png'; 
import {
  FiSearch,
  FiBell,
  FiMessageCircle,
  FiSun,
  FiMoon,
  FiX,
} from 'react-icons/fi';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="Navbar w-full px-4 sm:px-8 py-3 flex items-center justify-between bg-[var(--main-color)] text-[var(--text-color)] dark:bg-[var(--main-color)] dark:text-[var(--text-color)] shadow-md transition-colors duration-300 z-50 relative">

      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-20" />
      </div>

      {/* Icons & Search */}
      <div className="flex items-center gap-3 sm:gap-4 relative">

        {/* Mobile Search Toggle */}
        <div className="sm:hidden relative">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="iconsNav text-[var(--text-color)] hover:text-[var(--background-color)] text-2xl transition duration-150 relative z-50"
          >
            {showSearch ? <FiX /> : <FiSearch />}
          </button>

          {/* Mobile Search Box */}
          {showSearch && (
            <div className="mobileSearchBox">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  autoFocus
                  ref={searchRef}
                  className="searchInput"
                />
                <FiSearch className="searchIcon" />
              </div>
            </div>
          )}
        </div>

        {/* Desktop Search */}
        <div className="containSearch hidden sm:block relative">
          <input type="text" placeholder="Search..." className="searchInput" />
          <FiSearch className="searchIcon" />
        </div>

        {/* Notifications */}
        <div className="relative">
          <button className="iconsNav text-2xl relative">
            <FiBell />
            <span className="absolute -bottom-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">
              0
            </span>
          </button>
        </div>

        {/* Messages */}
        <div className="relative">
          <button className="iconsNav text-2xl relative">
            <FiMessageCircle />
            <span className="absolute -bottom-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">
              0
            </span>
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="iconsNav text-2xl"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
