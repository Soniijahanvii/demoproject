import React from "react";
import { RiCodeSSlashLine, RiComputerLine } from "@remixicon/react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="p-8 bg-[#a7b3df] text-white rounded-sm shadow-lg w-full max-w-3xl  mx-auto mt-8"
    >
      <h1 className="text-3xl font-extrabold mb-6 border-b-2 border-white pb-2">
        Experience
      </h1>

      <div className="flex justify-center gap-10 p-6 ">
        <div className=" flex items-center">
          <div className="bg-[#6878b4] p-5 rounded-br-[100px]  shadow-md shadow-white">
            <div className="place-items-center text-center">
              <RiCodeSSlashLine size={40} className="text-white" />
              <h2 className="text-2xl font-bold text-white">
                Frontend Development Intern
              </h2>
              <p className="italic text-sm text-white mb-3">
                Codensious - Indore, India
              </p>
            </div>
            <ul className="list-disc ml-5 text-lg text-white mb-2">
              <li>
                <p className="text-lg text-white mb-2">
                  Developed and maintained responsive user interfaces using
                  ReactJS and Tailwind CSS.
                </p>
              </li>
            </ul>

            <ul className="list-disc ml-5 text-lg text-white mb-2">
              <li>
                <p className="text-lg text-white mb-2">
                  Collaborated with the design team to implement pixel-perfect
                  UI components.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className=" bg-[#6878b4] p-5 rounded-br-[100px]  shadow-md shadow-white">
            <div className="place-items-center text-center">
              <RiComputerLine size={40} className="text-white" />
              <h2 className="text-2xl font-bold text-white">
                WordPress Development Intern
              </h2>
              <p className="italic text-sm text-white mb-3">
                Musk Owl - Udaipur, India
              </p>
            </div>
            <ul className="list-disc ml-5 text-lg text-white mb-2">
              <li>
                <p className="text-lg text-white mb-2">
                  Designed and customized WordPress themes to meet client
                  requirements.
                </p>
              </li>
            </ul>
            <ul className="list-disc ml-5 text-lg text-white mb-2">
              <li>
                <p className="text-lg text-white mb-2">
                  Integrated plugins to enhance website functionality and
                  improve user experience.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
