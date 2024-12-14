import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faSun,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  return (
    <div className="p-8 bg-[#a7b3df] text-white rounded-sm shadow-lg w-full rounded-br-[175px] mx-auto mt-8">
      <h1 className="text-3xl font-extrabold mb-6 border-b-2 border-white pb-2">
        Projects
      </h1>
      <div className="mb-6 p-2 mt-2 bg-[#6878b4] rounded-br-[100px]  flex-1 border shadow-md shadow-white">
        <h2 className="text-2xl font-bold mb-2 text-white">
          <FontAwesomeIcon icon={faProjectDiagram} size="2x" className="mr-2" />
          SMART SWITCH
        </h2>
        <p className="text-sm mb-3 ml-16 text-white">March 2022 - July 2023</p>
        <p className="text-xl text-white ml-16">
          An IoT-based project using Arduino and sensors to help farmers,
          elders, and handicapped individuals control appliances remotely. This
          project focuses on versatility and low-cost solutions.
        </p>
      </div>

      {/* Solar-Based Lamp Detector Project */}
      <div className="mb-6 p-2 mt-2 bg-[#6878b4] rounded-br-[100px] border shadow-md shadow-white flex-1">
        <h2 className="text-2xl font-bold mb-2 text-white">
          <FontAwesomeIcon icon={faSun} size="2x" className="mr-2" />
          SOLAR-BASED LAMP DETECTOR
        </h2>
        <p className="text-sm mb-3 ml-16 text-white">November 2022</p>
        <p className="text-xl text-white ml-16">
          Developed an IoT-based system using Raspberry Pi to detect affected
          animals and reduce the spread of viruses. The project involved image
          detection and disease identification.
        </p>
      </div>

      {/* Tic-Tac-Toe Game Project */}
      <div className="mb-6 p-2 mt-2 bg-[#6878b4] rounded-br-[100px] border shadow-md shadow-white flex-1">
        <h2 className="text-2xl font-bold mb-2 text-white">
          <FontAwesomeIcon icon={faGamepad} size="2x" className="mr-2" />
          TIC-TAC-TOE GAME
        </h2>
        <p className="text-sm mb-3 ml-16 text-white">
          Personal Project - ReactJS
        </p>
        <p className="text-xl text-white ml-16">
          Built a fully interactive Tic Tac Toe game using ReactJS. The game
          features a simple and responsive design with state management for
          player turns, win detection, and game reset functionality.
        </p>
      </div>
    </div>
  );
};

export default Project;
