import React from "react";
import Image from "next/image";
import Logo1 from "../assets/1.png";
import Logo2 from "../assets/2.png";
import Logo3 from "../assets/3.png";

const Sidebar = () => {
  return (
    <div className="ml-10 fixed mt-24 top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <a className="text-xl text-black font-semibold">Free Tools</a>
      <a
        href="https://popupsmart.com/free-chat-popup/"
        className="rounded-md mb-4 p-4 flex items-center w-10/12 h-16 bg-red-100 cursor-pointer transition duration-200 hover:shadow-xl hover:translate-y-[-2px] mt-3"
      >
        <div className="mr-4 flex justify-center items-center">
          <Image src={Logo1} alt="Logo" className="w-12 h-10" />
        </div>
        <div className="">
          <h2 className="flex float-left text-sm font-bold mt-2">
            Free AI Chatbot
          </h2>
          <p
            style={{ fontSize: "8px" }}
            className="flex float-left transition duration-200 hover:text-blue-500"
          >
            GPT4 Powered Chatbot - LiveChatAI
          </p>
        </div>
      </a>
      <a
        href="https://qrcodedynamic.com/"
        className="rounded-md mb-4 p-4 flex items-center w-10/12 h-16 bg-green-100 cursor-pointer transition duration-200 hover:shadow-xl hover:translate-y-[-2px]"
      >
        <div className="mr-4 flex justify-center items-center">
          <Image src={Logo2} alt="Logo" className="w-11 h-10" />
        </div>
        <div className="">
          <h2 className="flex float-left text-sm font-bold mt-2">
            QR Code Generator
          </h2>
          <p
            style={{ fontSize: "8px" }}
            className="flex float-left transition duration-200 hover:text-blue-500"
          >
            Powered by Popupsmart
          </p>
        </div>
      </a>
      <a
        href="https://cookieconsent.popupsmart.com/gdpr-cookie-consent/"
        className="rounded-md mb-4 p-4 flex items-center w-10/12 h-16 bg-purple-100 cursor-pointer transition duration-200 hover:shadow-xl hover:translate-y-[-2px]"
      >
        <div className="mr-4 flex justify-center items-center">
          <Image src={Logo3} alt="Logo" className="w-12 h-10" />
        </div>
        <div className="">
          <h2 className="flex float-left text-sm font-bold mt-2">
            Cookie Consent Creator
          </h2>
          <p
            style={{ fontSize: "8px" }}
            className="flex float-left transition duration-200 hover:text-blue-500"
          >
            GDPR Ready Free Tool
          </p>
        </div>
      </a>
    </div>
  );
};

export default Sidebar;
