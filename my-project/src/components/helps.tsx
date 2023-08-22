import react from "react";
import Navbar from "./navbar";
import Link from "next/link";

export default async function Help() {
  //   const req = await fetch("http://127.0.0.1:1337/api/helps");
  //   const jsonreq = await req.json();
  //   console.log(jsonreq);

  //   const detail = await fetch("http://127.0.0.1:1337/api/help-details")
  //   const jsondetail = await detail.json();
  //   const detailTitle = jsondetail.data[0].attributes.DetailTitle;
  //   const datalength = jsondetail.data.length;

  const acc = await fetch("http://127.0.0.1:1337/api/accounts?populate=*");
  const jsonacc = await acc.json();

  const gs = await fetch(
    "http://127.0.0.1:1337/api/getting-starteds?populate=*"
  );
  const jsongs = await gs.json();
  console.log("sa",jsongs.data);

  return (
    <main>
      <Navbar />
      <div className="text-center">
        <h1 className="text-7xl font-extrabold">Documentation</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 text-black mt-5 justify-items-center max-w-5xl mx-auto ">
        <div>
          {jsonacc.data.map((item: any) => (
            // <Link href={`/account/${item?.id}`} key={item?.id}>
            <Link href="account">
              <div className="bg-white h-80 w-80 text-center rounded-sm overflow-hidden drop-shadow-md transition duration-200 hover:shadow-xl hover:translate-y-[-2px] mt-3">
                <div>
                  <div className="font-medium text-xl my-1 p-4 h-14">
                    <h3>{jsonacc.data[0].attributes.accTitle}</h3>
                  </div>
                  <div className="p-4 h-32 text-sm">
                    <p>{jsonacc.data[0].attributes.accDesc} </p>
                  </div>
                  <div className="border border-black px-10 py-3.5 inline-block rounded-full text-black transition duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                    <p>
                      {jsonacc.data[0].attributes.help_details.data.length}{" "}
                      Articles
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>


        <div>
          {jsongs.data.map((item: any) => (
            // <Link href={`/help/${item?.id}`} key={item?.id}>
            <Link href="gettingstarted">
              <div className="bg-white h-80 w-80 text-center rounded-sm overflow-hidden drop-shadow-md transition duration-200 hover:shadow-xl hover:translate-y-[-2px] mt-3">
                <div>
                  <div className="font-medium text-xl my-1 p-4 h-14">
                    <h3>{jsongs.data[0].attributes.gsTitle}</h3>
                  </div>
                  <div className="p-4 h-32 text-sm">
                    <p>{jsongs.data[0].attributes.gsContent} </p>
                  </div>
                  <div className="border border-black px-10 py-3.5 inline-block rounded-full text-black transition duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                    <p>
                      {jsongs.data[0].attributes.getting_started_details.data.length} Articles
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
