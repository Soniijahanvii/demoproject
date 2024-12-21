import React from "react";
import image from "../Images/Jahanvi.jpg";
// import Resume from "../public/Resume/JahanvisoniResume.pdf";

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/Resume/JahanvisoniResume.pdf";
  link.download = "JahanvisoniResume.pdf";
  link.click();
};

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start p-5 space-y-8 md:space-y-0  md:p-20">
      <div className="w-full md:w-2/4 text-center md:text-left">
        <h6 className="text-lg md:text-xl font-bold leading-normal tracking-tighter">
          Hello It's Me
        </h6>
        <h2 className="text-2xl md:text-4xl lg:text-6xl text-blue-300 font-bold leading-tight tracking-tighter">
          {" "}
          Jahanvi Soni
        </h2>
        <h6 className="text-lg md:text-xl font-bold leading-normal tracking-tighter mt-4">
          And I'M a
        </h6>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-300 font-bold leading-tight tracking-tighter">
          Frontend Web Developer and Web Designer
        </h2>
        <button
          className=" mt-8 rounded-full bg-[#6878b4] hover:bg-blue-400 active:bg-blue-500 font-bold focus:outline-none focus:ring focus:ring-blue-300 py-2 px-5 text-sm md:text-lg"
          onClick={handleDownloadCV}
        >
          Download Resume{" "}
        </button>
      </div>
      <div className="w-full md:w-2/4 flex justify-center md:justify-end">
        <img
          className="w-3/4 md:w-auto h-auto md:h-[500px] rounded-lg object-cover border shadow-lg"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
