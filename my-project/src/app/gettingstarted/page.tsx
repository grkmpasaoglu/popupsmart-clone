import Navbar from "@/components/navbar";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import "@/app/blog/blog.css";

type GettingStartedDetail = {
  id: number;
  attributes: {
    gsTitle: string;
    gsContent: string;
  };
};

type GettingStartedData = {
  id: number;
  attributes: {
    gsTitle: string;
    gsContent: string;
    getting_started_details: {
      data: GettingStartedDetail[];
    };
  };
};

type ApiResult = {
  data: GettingStartedData[];
};

export default async function Home() {
  const res = await fetch(
    `http://127.0.0.1:1337/api/getting-starteds?populate=*`
  );
  const jsonres: ApiResult = await res.json();
  const gettingStartedData = jsonres.data;

  return (
    <main>
      <Navbar />
      <div className="container mx-auto pr-24 max-w-screen-2xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/5 ml-4 md:ml-20 mt-4">
            <div className="font-bold text-xl mb-5">
              <Link className="text-2xl font-bold" href="help">Categories</Link>
            </div>
            <h1 className="font-semibold text-xl mb-5">Getting Started</h1>
            {gettingStartedData.map((gettingStarted: GettingStartedData) => (
              <div key={gettingStarted.id}>
                {gettingStarted.attributes.getting_started_details.data.map(
                  (item: GettingStartedDetail) => (
                    <Link href={`/gettingstarted/${item?.id}`} key={item?.id}>
                      <ReactMarkdown
                        className="mb-2 text-md font-medium"
                        key={item.id}
                      >
                        {item.attributes.gsTitle}
                      </ReactMarkdown>
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
