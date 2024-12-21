import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faSun,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  return (
    <div className="p-6 md:p-8 bg-[#a7b3df] text-white rounded-sm shadow-lg w-full rounded-br-[175px] mx-auto mt-8">
      <h1 className="text-2xl md:text-3xl font-extrabold mb-6 border-b-2 border-white pb-2 text-center md:text-left">
        Projects
      </h1>

      {/* Smart Switch Project */}
      <div className="mb-6 p-4 bg-[#6878b4] rounded-br-[100px] border shadow-md shadow-white">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-white flex items-center">
          <FontAwesomeIcon icon={faProjectDiagram} size="lg" className="mr-2" />
          SMART SWITCH
        </h2>
        <p className="text-sm md:text-base mb-3 text-white">
          March 2022 - July 2023
        </p>
        <p className="text-lg md:text-xl text-white">
          An IoT-based project using Arduino and sensors to help farmers,
          elders, and handicapped individuals control appliances remotely. This
          project focuses on versatility and low-cost solutions.
        </p>
      </div>

      {/* Solar-Based Lamp Detector Project */}
      <div className="mb-6 p-4 bg-[#6878b4] rounded-br-[100px] border shadow-md shadow-white">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-white flex items-center">
          <FontAwesomeIcon icon={faSun} size="lg" className="mr-2" />
          SOLAR-BASED LAMP DETECTOR
        </h2>
        <p className="text-lg md:text-base mb-3 text-white">November 2022</p>
        <p className="text-lg md:text-xl text-white">
          Developed an IoT-based system using Raspberry Pi to detect affected
          animals and reduce the spread of viruses.The project involved image
          detection and disease identification.
        </p>
      </div>

      {/* Tic-Tac-Toe Game Project */}
      <div className="mb-6 p-4 bg-[#6878b4] rounded-br-[100px] border shadow-md shadow-white">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-white flex items-center">
          <FontAwesomeIcon icon={faGamepad} size="lg" className="mr-2" />
          TIC-TAC-TOE GAME
        </h2>
        <p className="text-sm md:text-base mb-3 text-white">
          Personal Project - ReactJS
        </p>
        <p className="text-lg md:text-xl text-white">
          Built a fully interactive Tic Tac Toe game using ReactJS. The game
          features a simple and responsive design with state management for
          player turns, win detection, and game reset functionality.
        </p>
      </div>
    </div>
  );
};

export default Project;
