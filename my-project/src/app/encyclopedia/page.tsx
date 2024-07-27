import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import fetchData from "@/utils/fetchData";
import Head from "next/head";

export async function generateMetadata(
    parent?: ResolvingMetadata
): Promise<Metadata> {
    return {
        title: `Digital Marketing Encyclopedia`,
        description: `digital marketing, digital marketing encyclopedia, 
        digital marketing terms, email marketing, social media marketing, 
        content marketing, conversion rate optimization, conversion optimization, 
        inbound marketing, digital marketing jargon`,
    };
}

export default async function EncyclopediaPage() {
    const encyclopediaResponse = await fetchData("/api/encyclopedias");

    return (
        <main>
            <div className="text-center text-6xl mt-28 font-extralight">
                <p>Digital Marketing</p>
                <p>Encyclopedia</p>
            </div>
            <div className="flex justify-center items-center mt-2 mb-10">
                <div className="w-5/6 xl:w-1/3">
                    <div className="mb-5">
                        <p>Terms related to digital marketing and the related subjects regarding those terms are explained briefly on this page.</p>
                        <p>To reach all of the <strong>digital marketing jargon</strong> at once, get our digital marketing encyclopedia e-book for free!!</p>
                        <p>Visit our <strong>email marketing guide</strong> page to get more comprehensive information for obtaining email leads. Or, you can download the email marketing guide e-book for free to access the information whenever you want!</p>
                        Go to our <strong>conversion rate optimization</strong> guide page to understand how you can turn your visitors into leads easily. Or, you may access the conversion optimization guide e-book for free to be navigated in your digital goals!
                    </div>
                    <div>
                        You can find relevant marketing terms to increase your conversions with Popupsmart here. You can increase your conversions with our recipe page which is the guide of popupsmart campaigns, which explains the use of our product step by step. In addition, you can quickly broadcast your campaign by adding the popup campaigns we have created for you to your account instantly. Explore the showcase page in order to clone popup campaigns with popupsmart.
                    </div>
                </div>

            </div>

            <div className="flex justify-center">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 px-4 text-black mt-5 justify-items-center max-w-7xl mx-auto">
                    {encyclopediaResponse.data.map((item: any) => (
                        <Link href={`/encyclopedia/${item?.attributes.slug}`} key={item?.id}>
                            <div className="bg-white rounded-sm overflow-hidden transition duration-200 ">
                                <img src={item.attributes.images[0].image} alt="Image" className="w-full" />
                                <div className="p-4">
                                    <h3 className="font-bold text-lg my-1">
                                        {item?.attributes?.Title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}

