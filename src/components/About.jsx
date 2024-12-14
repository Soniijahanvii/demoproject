import React from "react";
import profileImage from "../Images/Jahanvi2.jpg"; // Update with the correct path to your image

const About = () => {
  return (
    <div
      className=" flex bg-[#a7b3df] text-white rounded-tl-[180px] shadow-lg w-full  mx-auto mt-8 p-6"
      id="about"
    >
      <div className="w-full md:w-1/3 ml-5 mt-2 mb-2">
        <img
          src={profileImage}
          alt="Profile of Jahanvi Soni"
          className="w-full h-full object-cover rounded-full border shadow-xl shadow-white"
        />
      </div>

      <div className="ml-20 mt-20 mb-2">
        <h1 className="text-3xl font-extrabold mb-6 border-b-2 border-white pb-2">
          About Me !!
        </h1>
        <p className="text-xl mb-6">
          I am Jahanvi Soni, a passionate Frontend Developer with a strong
          background in creating responsive and user-friendly web interfaces.
          Skilled in ReactJS, Tailwind CSS, JavaScript, and modern web
          development tools, I have a knack for problem-solving and design.
        </p>

        <p className="text-xl mb-6">
          I am currently pursuing a B.Tech in Computer Science from Geetanjali
          Institute of Technical Studies, Udaipur, Rajasthan. My goal is to
          contribute to challenging projects that push the boundaries of
          frontend development.
        </p>
      </div>
    </div>
  );
};

export default About;
