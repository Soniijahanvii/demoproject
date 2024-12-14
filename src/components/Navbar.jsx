import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className=" flex  flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 ">
      <span className="flex text-4xl font-semibold tracking-wide">
        Portfolio
      </span>
      <ul className="flex justify-center  gap-56 mr-6 ml-56 text-xl font-semibold">
        <a href="#about">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Experience
          </li>
        </a>
        <a href="#contact">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
