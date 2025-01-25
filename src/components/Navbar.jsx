import React, { useState } from "react";
import logo from "../assets/images/image.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between text-black px-8 py-4 md:px-20 mt-2 ">
      <div className="flex items-center space-x-2 mt-5">
        <img src={logo} alt="Logo" className="h-14 w-14" />
      </div>

      <button
        className="block md:hidden text-xl focus:outline-none"
        onClick={toggleMenu}
      >
        <span className="material-icons">{isOpen ? "close" : "menu"}</span>
      </button>

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } w-full md:w-auto md:flex flex-col md:flex-row items-center gap-8 md:gap-28 mt-4 md:mt-0 text-xl font-normal`}
      >
        <div className="flex space-x-28 mr-60">
          <a href="#about" className="hover:text-blue-500">
            <li className="transition-all duration-300">Who we are</li>
          </a>
          <a href="#projects" className="hover:text-blue-500">
            <li className="transition-all duration-300">What we do</li>
          </a>
          <a href="#experience" className="hover:text-blue-500">
            <li className="transition-all duration-300">Why us</li>
          </a>
          <a href="#contact" className="hover:text-blue-500">
            <li className="transition-all duration-300">Insights</li>
          </a>
        </div>
        <div className="flex  space-x-14">
          <a href="#experience" className="hover:text-blue-500">
            <li className="transition-all duration-300">Contact us</li>
          </a>
          <a href="#contact" className="hover:text-blue-500">
            <li className="transition-all duration-300">Login</li>
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
