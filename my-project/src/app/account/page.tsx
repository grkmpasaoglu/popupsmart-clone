import Navbar from "@/components/navbar";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import "@/app/blog/blog.css";

type HelpDetail = {
  id: number;
  attributes: {
    DetailTitle: string;
    DetailContent: string;
  };
};

type HelpData = {
  id: number;
  attributes: {
    accTitle: string;
    accDesc: string;
    help_details: {
      data: HelpDetail[];
    };
  };
};

type ApiResult = {
  data: HelpData[];
};

export default async function Home() {
  const res = await fetch(`http://127.0.0.1:1337/api/accounts?populate=*`);
  const jsonres: ApiResult = await res.json();
  const helpData = jsonres.data;

  return (
    <main>
      <Navbar />
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/5 ml-4 md:ml-20 mt-4 md:mt-0">
            <div className="font-bold text-2xl mb-5">
              <Link href="/help">Categories</Link>
            </div>
            <h1 className="font-semibold text-xl mb-5">Account</h1>
            {helpData.map((help: HelpData) => (
              <div key={help.id}>
                {help.attributes.help_details.data.map((item: HelpDetail) => (
                  <Link href={`/account/${item?.id}`} key={item?.id}>
                    <ReactMarkdown
                      className="mb-2 text-md font-medium"
                      key={item.id}
                    >
                      {item.attributes.DetailTitle}
                    </ReactMarkdown>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
