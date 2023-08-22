import React from "react";
import Logo from "../assets/Logo.jpg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-black p-4 mb-3 mt-2 w-9/12 mx-auto">
      <div className="flex items-center">
        <a href="http://localhost:3000/">
          <Image src={Logo} alt="Logo" className="h-12 w-12" />
        </a>
      </div>
      <div className="flex items-center font-semibold">
        {/* <a
          href="#"
          className="text-slate-900 hover:text-blue-500"
        >
          Showcase
        </a>
        <a
          href="#"
          className="text-slate-900 text-base ml-6 hover:text-blue-500"
        >
          Features
        </a>
        <a
          href="#"
          className="text-slate-900 ml-6 hover:text-blue-500"
        >
          Sign In
        </a> */}
        <a
          href="/help"
          className="text-slate-900 ml-6 hover:text-blue-500"
        >
          Help
        </a>
        <a
          href="/blog"
          className="text-slate-900 ml-6 hover:text-blue-500"
        >
          Blog
        </a>
        <a
          href="#"
          className="border rounded-md px-5 py-2 ml-5 border-black font-semibold transition duration-300 hover:bg-black hover:text-white"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
