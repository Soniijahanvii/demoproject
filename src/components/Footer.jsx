import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 bg-slate-200 p-10">
      <div className="flex gap-56 ml-20 mr-10">
        <div>
          <ul>
            <a href="#about" className="hover:text-blue-500">
              <li className="transition-all duration-300 text-black font-serif font-bold">
                Resource
              </li>
            </a>
            <a href="#about" className="hover:text-blue-500">
              <li className="transition-all duration-300 mt-5">Blog</li>
            </a>

            <a href="#about" className="hover:text-blue-500">
              <li className="transition-all duration-300 mt-5">NPS</li>
            </a>
            <a href="#about" className="hover:text-blue-500">
              <li className="transition-all duration-300 mt-5">Contact Us</li>
            </a>
          </ul>
        </div>
        <div>
          <ul>
            <a href="#about" className="hover:text-blue-500">
              <li className="transition-all duration-300 text-black font-serif font-bold">
                Legal
              </li>
            </a>
            <a href="#about" className="hover:text-blue-500">
              <li className="transition-all duration-300 mt-5">Terms</li>
            </a>
            <a href="#about" className="hover:text-blue-500">
              <li className="transition-all duration-300 mt-5">Privacy</li>
            </a>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-serif text-black  font-bold">
            About us – voice of client and staff
          </h1>
          <p className="text-lg font-sans text-black mt-5">
            Sirican provides a technology platform, support, and advice to help
            professionals of all types better understand the experience of
            clients and staff to strengthen relationships and sustain and grow
            their practices.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-md text-black font-serif mt-10 ml-20">
          Copyright 2025 Sirican Solutions Pvt. Ltd.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
