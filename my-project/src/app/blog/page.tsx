import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Background from "@/assets/ps-blog-header-bg.webp";
import fetchData from "@/utils/fetchData";
import Head from "next/head";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Conversion Optimization & Digital Marketing Blog | Popupsmart",
    description: "Expand your digital marketing knowledge and solve digital problems with Popupsmart's blog.",
  };
}

export default async function BlogPage() {
  const jsonres = await fetchData("/api/blogs");

  return (
    <main>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 px-4 text-black mt-5 justify-items-center max-w-7xl mx-auto">
          {jsonres.data.map((item: any) => (
            <Link href={`/blog/${item?.attributes.slug}`} key={item?.id}>
              <div className="bg-white rounded-sm overflow-hidden drop-shadow-md transition duration-200 hover:shadow-xl hover:translate-y-[-2px] mt-3">
                <img src={item.attributes.images[0].image} alt="Image" className="w-full" />
                <div className="p-4">
                  <h3 className="font-bold text-lg my-1">{item?.attributes?.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
