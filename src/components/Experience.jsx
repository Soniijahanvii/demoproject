import React from "react";
import { RiCodeSSlashLine, RiComputerLine } from "@remixicon/react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="p-6 md:p-8 bg-[#a7b3df] text-white rounded-sm shadow-lg w-full max-w-5xl mx-auto mt-8"
    >
      <h1 className="text-2xl md:text-3xl font-extrabold mb-6 border-b-2 border-white pb-2 text-center md:text-left">
        Experience
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-6 p-4">
        {/* Frontend Development Intern */}
        <div className="bg-[#6878b4] p-10 rounded-br-[100px] shadow-md shadow-white flex-1">
          <div className="place-items-center text-center mb-4">
            <RiCodeSSlashLine size={40} className="text-white mx-auto" />
            <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
              Frontend Development Intern
            </h2>
            <p className="italic text-sm md:text-base text-white mb-3">
              Codensious - Indore, India
            </p>
          </div>
          <ul className="list-disc ml-5 text-lg md:text-xl text-white space-y-2">
            <li>
              <p>
                Developed and maintained responsive user interfaces using
                ReactJS and Tailwind CSS.
              </p>
            </li>
            <li>
              <p>
                Collaborated with the design team to implement pixel-perfect UI
                components.
              </p>
            </li>
          </ul>
        </div>

        {/* WordPress Development Intern */}
        <div className="bg-[#6878b4] p-10 rounded-br-[100px] shadow-md shadow-white flex-1">
          <div className="place-items-center text-center mb-4">
            <RiComputerLine size={40} className="text-white mx-auto" />
            <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
              WordPress Development Intern
            </h2>
            <p className="italic text-sm md:text-base text-white mb-3">
              Musk Owl - Udaipur, India
            </p>
          </div>
          <ul className="list-disc ml-5 text-lg md:text-xl text-white space-y-2">
            <li>
              <p>
                Designed and customized WordPress themes to meet client
                requirements.
              </p>
            </li>
            <li>
              <p>
                Integrated plugins to enhance website functionality and improve
                user experience.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
