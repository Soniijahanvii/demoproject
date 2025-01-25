import React from "react";
import Blog1 from "../assets/images/wordpress5.jpg";
import Blog2 from "../assets/images/wordpress6.jpg";
import Blog3 from "../assets/images/wordpress7.jpg";
import MainImage from "../assets/images/wordpressimage3.jpg";

const Experience = () => {
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="ml-10 mt-20">
          <h1 className="text-2xl text-start font-serif font-semibold">
            The experience can be the difference
          </h1>
          <h6 className="text-xl font-serif mt-10 mr-5">
            What story do clients tell about your service? And will that story
            help you grow?
          </h6>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 px-5 sm:px-16 lg:px-0 ml-20">
          <div className="border shadow-xl">
            <div className="p-5">
              <img
                src={Blog1}
                alt="Left Illustration"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <p className="text-xl ml-2 text-blue-500 mt-4">
                  Delight your clients
                </p>
              </div>
              <div className="mt-2">
                <p className="text-lg mt-5 ml-2">
                  Don’t leave the experience to chance. Measure and track
                  loyalty and satisfaction and identify where improvements are
                  needed.
                </p>
              </div>
            </div>
          </div>

          <div className="border shadow-xl">
            <div className="p-5">
              <img
                src={Blog2}
                alt="Left Illustration"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <p className="text-xl ml-2 text-blue-500 mt-4">
                  Engage your people
                </p>
              </div>
              <div className="mt-2 ml-2">
                <p className="text-lg mt-5">
                  Motivate staff to deliver great client experiences. Reward
                  those that invest in the relationship.
                </p>
              </div>
            </div>
          </div>
          <div className="border shadow-xl">
            <div className="p-5">
              <img
                src={Blog3}
                alt="Left Illustration"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <p className="text-xl ml-2 text-blue-500 mt-4">
                  Grow your firm
                </p>
              </div>
              <div className="mt-2">
                <p className="text-lg mt-5 ml-2">
                  Use experience insights to take early action to retain clients
                  and grow referals by up to 35%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 ml-5 mr-5">
        <img src={MainImage} alt="Main" className="h-full w-full" />
      </div>
    </>
  );
};

export default Experience;
