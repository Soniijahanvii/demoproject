import React from "react";
import image from "../Images/Jahanvi.jpg";

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/JahanvisoniResume.pdf";
  link.download = "JahanvisoniResume.pdf";
  link.click();
};

const Home = () => {
  return (
    <div className="text-white flex  w-full justify-between items-start p-10  md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h6 className="text-xl md:text-xl font-bold flex leading-normal tracking-tighter">
          Hello It's Me
        </h6>
        <h2 className="text-3xl  text-blue-300 md:text-6xl font-bold flex leading-normal tracking-tighter ">
          {" "}
          Jahanvi Soni
        </h2>
        <h6 className="text-xl md:text-xl font-bold flex leading-normal tracking-tighter">
          And I'M a
        </h6>
        <h2 className="text-3xl text-blue-300 md:text-3xl font-bold flex leading-normal tracking-tighter ">
          Frontend Web Developer and Web Designer
        </h2>
        <button
          className=" rounded-full bg-[#6878b4] hover:bg-blue-400 font-bold active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 mt-10 md:md-10 py02  px-3 text-sm md:text-lg md:py-2"
          onClick={handleDownloadCV}
        >
          Download Resume{" "}
        </button>
      </div>
      <div className="flex justify-end">
        <img
          className="w-full ml-25 mr-20 h-[500px] rounded-lg  object-cover shadow-lg shadow-blue-200  border-separate hover  "
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
