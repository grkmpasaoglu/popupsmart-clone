import React from "react";
import Image from "next/image";
import tick from "@/assets/tick.png";
import Youtube from "@/assets/Youtube.png";
import Logos from "@/assets/homelogos.jpg";
import HomeImg from "@/assets/hero_new_image.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-1/2 flex items-center justify-center">
          <div className="p-8 text-center">
            <h1 className="text-7xl font-extrabold mb-4">Popup builder</h1>
            <h1 className="text-7xl font-extrabold mb-4">that boosts sales.</h1>
            <p className="text-xl pr-4">
              A no-code tool to increase e-commerce sales, build email lists,
              and engage with your visitors in just 5 minutes.
            </p>
            <p className="text-xl pr-4">
              Get started now, no account is required.
            </p>
            <div className="flex flex-col mt-8 xl:flex-row ml-20">
              <div className="w-full  flex">
                <Image src={tick} width={30} alt="tick" className="" />
                <h2 className="text-sm mb-2">Free and paid plans</h2>
              </div>
              <div className="w-full  flex">
                <Image src={tick} width={30} alt="tick" className="" />
                <h2 className="text-sm mb-2">Setup in minutes</h2>
              </div>
              <div className="w-full  flex">
                <Image src={tick} width={30} alt="tick" className="" />
                <h2 className="text-sm mb-2">No credit card required</h2>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-center mt-10">
              <div className="">
                <Link
                  href={"#"}
                  className="bg-blue-500 transition duration-200 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg inline-block"
                >
                  Get Started
                </Link>
              </div>
              <Link href={"#"}>
                <div className=" flex items-center grayscale hover:grayscale-0">
                  <Image src={Youtube} height={90} width={90} alt="Youtube" />
                  <p className="font-medium text-lg">Product Video</p>
                </div>
              </Link>
            </div>
            <div className="mt-8 justify-center">
              <Image src={Logos} width={700} alt="Logos"></Image>
              <p className="mt-2 text-gray-600">
                3.000+ clients are getting higher conversion rates
              </p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="p-8">
            <Image src={HomeImg} alt="Home"></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
