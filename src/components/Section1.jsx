import React from "react";
import SideImage from "../assets/images/wordpressimage4.jpg";

const Section1 = () => {
  return (
    <div className="mt-5 ml-4">
      <h1 className="text-2xl text-start font-serif font-semibold">
        How it works
      </h1>
      <div className="flex ml-4">
        <div>
          <div className="flex mt-20 gap-20">
            <div className="mt-10">
              <h5 className="text-xl font-serif">Listen</h5>
              <p className="text-lg mt-5 font-serif">
                To clients and staff with one question or multi question
                surveys.
              </p>
            </div>
            <div className="mt-10">
              <h5 className="text-xl font-serif">Learn</h5>
              <p className="text-lg mt-5 font-serif">
                How they feel about your service linked to professional and
                division.
              </p>
            </div>
          </div>
          <div className="flex gap-20 mt-20">
            <div className="mt-10">
              <h5 className="text-xl font-serif">Respond</h5>
              <p className="text-lg mt-5 font-serif">
                Our platform supports survey follow-up to thank and learn more.
              </p>
            </div>
            <div className="mt-10">
              <h5 className="text-xl font-serif">Grow</h5>
              <p className="text-lg mt-5 font-serif">
                Encourage referrals and leverage social proof of your service
                excellence.
              </p>
            </div>
          </div>
          <div className="mt-48 text-xl font-serif text-blue-400">
            <a href="" className="hover:text-blue-500">
              <h1 className="">Learn More</h1>
            </a>
          </div>
        </div>
        <div className="flex justify-center ">
          <img src={SideImage} alt="side" className="h-auto w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
