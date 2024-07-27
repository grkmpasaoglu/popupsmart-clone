'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from "../assets/Logo.jpg";
import Close from "@/assets/closebutton.png"
import HamburgerMenu from "@/assets/hamburgermenu.png"

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white top-0 left-0 right-0 z-10 mt-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-1 md:block">
              <Link href="http://localhost:3000/">
                <Image src={Logo} alt="Logo" className="h-16 w-16" />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={Close} width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src={HamburgerMenu}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex font-semibold ">
                <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0   md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="/help" onClick={() => setNavbar(!navbar)}>
                    Help
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="/encyclopedia" onClick={() => setNavbar(!navbar)}>
                    Encyclopedia
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                    Blog
                  </Link>
                </li>
                <li className="mb-2 text-xl py-5 px-6 text-center md:hover:text-white md:border md:border-black md:rounded-md md:hover:bg-black md:transition duration-300">
                  <Link href="#" onClick={() => setNavbar(!navbar)}>
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;