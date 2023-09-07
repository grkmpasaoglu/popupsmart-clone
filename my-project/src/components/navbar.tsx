import React from "react";
import Logo from "../assets/Logo.jpg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-black p-4 mt-10 w-9/12 mx-auto">
      <div className="flex items-center">
        <a href="http://localhost:3000/">
          <Image src={Logo} alt="Logo" className="h-16 w-16" />
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
          href="/"
          className="text-slate-900 ml-8 hover:text-blue-500"
        >
          Home
        </a>
        <a
          href="/help"
          className="text-slate-900 ml-8 hover:text-blue-500"
        >
          Help
        </a>
        <a
          href="/blog"
          className="text-slate-900 ml-8 hover:text-blue-500"
        >
          Blog
        </a>
        <a
          href="#"
          className="border rounded-md px-8 py-4 ml-14 border-black font-medium transition duration-300 hover:bg-black hover:text-white"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
