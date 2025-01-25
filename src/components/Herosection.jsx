import React from "react";
import HeroImage from "../assets/images/wordpressimage1.jpg";
import SideImage from "../assets/images/wordpressimage2.jpg";

const Herosection = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="ml-20 mt-5">
          <h1 className="text-4xl font-serif font-semibold">
            Experience management for professionals
          </h1>
          <h6 className="text-xl font-serif mt-10 mr-5">
            We help you easily track feedback from clients and staff to deliver
            actionable insights to drive growth.
          </h6>
          <div className="flex flex-col space-y-2 w-full mt-10">
            <div className="relative">
              <select className="appearance-none w-full bg-transparent  font-serif border-black text-black text-lg py-2 focus:outline-none">
                <option value="" disabled selected>
                  Select your industry
                </option>
                <option value="tech">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
              </select>

              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.064a.75.75 0 111.08 1.04l-4.25 4.657a.75.75 0 01-1.08 0l-4.25-4.657a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full border-2 border-black"></div>
          </div>
          <button className="bg-blue-500 text-white  text-xl font-bold py-2 px-6 mt-20 w-full h-16 hover:bg-blue-600">
            REQUEST DEMO
          </button>
        </div>
        <div className="ml-10">
          <img src={HeroImage} alt="Hero" className="h-full w-full" />
        </div>
      </div>
      <div className="flex justify-end items-end text-end  mt-2">
        <img src={SideImage} alt="side" className="h-full w-auto" />
      </div>
    </>
  );
};

export default Herosection;
