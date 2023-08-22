import Navbar from "@/components/navbar";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import "@/app/account/account.css";

type HelpDetail = {
  id: number;
  attributes: {
    DetailTitle: string;
    accTitle: string;
    accDesc: string;
  };
};

type HelpData = {
  id: number;
  attributes: {
    DetailTitle: string;
    DetailContent: string;
    help_details: {
      data: HelpDetail[];
    };
  };
};

type ApiResult = {
  data: HelpData[];
};

export default async function Home({
  params,
}: {
  params: { accountId: string };
}) {
  const res = await fetch(`http://127.0.0.1:1337/api/accounts?populate=*`);
  const jsonres: ApiResult = await res.json();
  const helpData = jsonres.data;
  console.log(helpData);
  const accdata = await fetch(
    `http://127.0.0.1:1337/api/help-details/${params.accountId}`
  );
  const jsonacc = await accdata.json();
  console.log(jsonacc);
  const accTitle = jsonacc.data.attributes.DetailTitle;
  const accContent = jsonacc.data.attributes.DetailContent;

  return (
    <main>
      <Navbar />
      <div className="container mt-14 mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/5 ml-4 md:ml-20 mt-4 md:mt-0 pr-4">
            <div className="font-bold text-xl mb-5">
              <Link className="text-2xl font-bold" href="/help">Categories</Link>
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
          <div className="w-full md:w-4/5 max-w-5xl mx-auto">
            <div className="text-center md:text-left">
              
              <div className="text-5xl font-extrabold mb-12"><ReactMarkdown className="markdown-heading">{accTitle}</ReactMarkdown></div>
              <div><ReactMarkdown className="markdown-content">{accContent}</ReactMarkdown></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
