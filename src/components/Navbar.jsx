import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between text-white px-8 py-4 md:px-20  shadow-lg">
      {/* Logo Section */}
      <span className="text-2xl md:text-4xl font-semibold tracking-wide">
        Portfolio
      </span>

      {/* Hamburger Menu Icon */}
      <button
        className="block md:hidden text-xl focus:outline-none"
        onClick={toggleMenu}
      >
        <span className="material-icons">{isOpen ? "close" : "menu"}</span>
      </button>

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } w-full md:w-auto md:flex flex-col md:flex-row items-center gap-8 md:gap-28 mt-4 md:mt-0 text-xl font-semibold`}
      >
        <a href="#about" className="hover:text-blue-400">
          <li className="transition-all duration-300">About</li>
        </a>
        <a href="#projects" className="hover:text-blue-400">
          <li className="transition-all duration-300">Projects</li>
        </a>
        <a href="#experience" className="hover:text-blue-400">
          <li className="transition-all duration-300">Experience</li>
        </a>
        <a href="#contact" className="hover:text-blue-400">
          <li className="transition-all duration-300">Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
