import React from "react";
import Blog1 from "../assets/images/wordpress8.jpg";
import Blog2 from "../assets/images/wordpress9.jpg";
import Blog3 from "../assets/images/wordpress10.jpg";

const Section2 = () => {
  return (
    <div className="mt-20 ml-10 mr-10 ">
      <h1 className="text-2xl font-serif text-black ml-3 font-bold">
        Insights
      </h1>
      <div className="flex mt-10 gap-20">
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
                The upside to gaining clients via referrals
              </p>
            </div>
            <div className="mt-2">
              <p className="text-lg mt-5 ml-2">
                It has long been thought that clients typically make
                like-for-like referrals – a high net worth client referring
                another high net worth client for example – and this has been
                shown in some recent research published in the Journal of
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
                Five Key Business Development Tips for Professionals
              </p>
            </div>
            <div className="mt-2">
              <p className="text-lg mt-5 ml-2">
                When time really is money, and every hour you spend away from
                your regular service provision is costing you – focusing on
                business development seems like an impossible dream. But, by not
                investing in this area as you should
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
                The link between staff engagement and client satisfaction
              </p>
            </div>
            <div className="mt-2">
              <p className="text-lg mt-5 ml-2">
                It’s a constant. New rules, legislation, case law. It never
                stops. Combine the need to stay current with the relentless rush
                of practice and sometimes it’s easy to forget the client point
                of view. You can’t see knowledge. What the client
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
