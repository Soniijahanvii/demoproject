import React from "react";

const Form = () => {
  return (
    <div className="mt-20 ml-10">
      <h1 className="text-3xl font-serif">See a short demonstration</h1>
      <p className="mt-5 text-xl font-serif">
        Fill in your details and we’ll come back to you shortly to arrange a
        time for a demonstration.
      </p>
      <form className="grid grid-cols-2 gap-8 w-auto max-w-4xl mx-auto mt-20 ml-52 ">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-serif text-black">Full name</label>
          <input
            type="text"
            className="border-none border-b border-black focus:outline-none focus:border-gray-500 bg-transparent text-sm py-2"
            placeholder="Enter your full name"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-serif text-black">Email</label>
          <input
            type="email"
            className="border-none border-b border-black focus:outline-none focus:border-gray-500 bg-transparent text-sm py-2"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-serif text-black">Firm</label>
          <input
            type="text"
            className="border-none border-b border-black focus:outline-none focus:border-gray-500 bg-transparent text-sm py-2"
            placeholder="Enter your firm name"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-serif text-black">Phone</label>
          <input
            type="tel"
            className="border-none border-b border-black focus:outline-none focus:border-gray-500 bg-transparent text-sm py-2"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="col-span-2 flex flex-col space-y-2">
          <label className="text-sm font-serif text-black">Industry</label>
          <select className="appearance-none border-none border-b border-black bg-transparent focus:outline-none text-sm py-2">
            <option value="" disabled selected>
              Select your industry
            </option>
            <option value="tech">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="education">Education</option>
          </select>
        </div>
      </form>
      <button className="bg-blue-500 text-white  text-xl font-bold py-2 px-6 mt-20  h-16 hover:bg-blue-600 ml-52">
        REQUEST DEMO
      </button>
    </div>
  );
};

export default Form;
