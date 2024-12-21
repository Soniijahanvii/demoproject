import React from "react";
import profileImage from "../Images/Jahanvi2.jpg";

const About = () => {
  return (
    <div
      className="flex flex-wrap bg-[#a7b3df] text-white rounded-tl-[180px] shadow-lg w-full mx-auto mt-8 p-6 md:p-10"
      id="about"
    >
      {/* Profile Image Section */}
      <div className="w-full md:w-1/3 flex justify-center  md:justify-start mb-6 md:mb-0">
        <img
          src={profileImage}
          alt="Profile of Jahanvi Soni"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border shadow-xl ml-20"
        />
      </div>

      {/* About Text Section */}
      <div className="w-full md:w-2/3 flex flex-col justify-center px-4 md:px-10">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-4 border-b-2 border-white pb-2">
          About Me !!
        </h1>
        <p className="text-lg md:text-xl mb-4">
          I am Jahanvi Soni, a passionate Frontend Developer with a strong
          background in creating responsive and user-friendly web interfaces.
          Skilled in ReactJS, Tailwind CSS, JavaScript, and modern web
          development tools, I have a knack for problem-solving and design.
        </p>

        <p className="text-lg md:text-xl">
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
