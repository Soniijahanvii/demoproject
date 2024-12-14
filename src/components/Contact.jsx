import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    // <div className="p-8 bg-[#171d32] text-white min-h-screen flex items-center justify-center">
    <div className="p-6 bg-[#a7b3df] rounded-md  shadow-lg w-full  mx-auto text-center">
      <h1 className="text-3xl font-extrabold mb-6 border-b-2 border-white pb-2">
        Contact Me <FontAwesomeIcon icon={faSmile} size="x" className="ml-2" />{" "}
        !
      </h1>
      <p className="text-xl font-semibold mb-6">
        Feel free to reach out for collaborations, opportunities, or just to say
        hello!
      </p>
      <div className="place-items-center space-y-4">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            className="text-white mr-4"
          />
          <span className="material-icons text-white mr-4 text-xl">email</span>

          <p className="text-lg">
            <a
              href="mailto:jahanvisoni72@gmail.com"
              className="underline hover:text-gray-200"
            >
              jahanvisoni72@gmail.com
            </a>
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faPhone}
            size="lg"
            className="text-white mr-4"
          />
          <span className="material-icons text-white mr-4 text-xl">phone</span>
          <p className="text-lg">
            <a
              href="tel:+919522252147"
              className="underline hover:text-gray-200"
            >
              +91-9522252147
            </a>
          </p>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
            className="text-white mr-4"
          />
          <span className="material-icons text-white mr-4 text-xl">link</span>
          <p className="text-lg">
            <a
              href="https://www.linkedin.com/in/jahanvi-soni-4135a9216"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200"
            >
              LinkedIn: Jahanvi Soni
            </a>
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Contact;
