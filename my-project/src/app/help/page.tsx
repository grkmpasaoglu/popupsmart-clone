import react from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";
import fetchData from "@/utils/fetchData";

export default async function HelpPage() {

  const account = await fetchData("/api/accounts?populate=*");
  const gettingStarted = await fetchData("/api/getting-starteds?populate=*");


  return (
    <main>
      <Navbar />
      <div className="text-center">
        <h1 className="text-7xl font-extrabold">Documentation</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 text-black mt-5 justify-items-center max-w-5xl mx-auto ">
        <div>
          {account.data.map((item: any) => (
            <Link href="help/account" key={item.id}>
              <div className="bg-white h-80 w-80 text-center rounded-sm overflow-hidden drop-shadow-md transition duration-200 hover:shadow-xl hover:translate-y-[-2px] mt-3">
                <div>
                  <div className="font-medium text-xl my-1 p-4 h-14">
                    <h3>{account.data[0].attributes.accTitle}</h3>
                  </div>
                  <div className="p-4 h-32 text-sm">
                    <p>{account.data[0].attributes.accDesc} </p>
                  </div>
                  <div className="border border-black px-10 py-3.5 inline-block rounded-full text-black transition duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                    <p>
                      {account.data[0].attributes.help_details.data.length}
                      Articles
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>


        <div>
          {gettingStarted.data.map((item: any) => (
            // <Link href={`/help/${item?.id}`} key={item?.id}>
            <Link href="help/gettingstarted" key={item.id}>
              <div className="bg-white h-80 w-80 text-center rounded-sm overflow-hidden drop-shadow-md transition duration-200 hover:shadow-xl hover:translate-y-[-2px] mt-3">
                <div>
                  <div className="font-medium text-xl my-1 p-4 h-14">
                    <h3>{gettingStarted.data[0].attributes.gsTitle}</h3>
                  </div>
                  <div className="p-4 h-32 text-sm">
                    <p>{gettingStarted.data[0].attributes.gsContent} </p>
                  </div>
                  <div className="border border-black px-10 py-3.5 inline-block rounded-full text-black transition duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                    <p>
                      {gettingStarted.data[0].attributes.getting_started_details.data.length} Articles
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
