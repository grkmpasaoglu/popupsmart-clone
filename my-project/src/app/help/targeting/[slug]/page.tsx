import Navbar from "@/components/navbar";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

type TargetingDetail = {
  id: number;
  attributes: {
    targetingTitle: string;
    targetingContent: string;
  };
};

type TargetingData = {
  id: number;
  attributes: {
    targeting_details: {
      data: TargetingDetail[];
    };
    targetingTitle: string;
    targetingContent: string;
  };
};

type ApiResult = {
  data: TargetingData[];
};

type Props = {
  params: { helpId: string };
};

export default async function Home({
  params,
}: {
  params: { helpId: string };
}) {
  const res = await fetch(
    `http://127.0.0.1:1337/api/targetings?populate=*`
  );
  const jsonres: ApiResult = await res.json();
  const targetingData = jsonres.data[0];

  const targetdata = await fetch(
    `http://127.0.0.1:1337/api/targeting-details/${params.slug}`
  );
  const jsontargetdata = await targetdata.json();
  const targetTitle = jsontargetdata.data.attributes.targetingTitle;
  const targetContent = jsontargetdata.data.attributes.targetingContent;

  return (
    <main>
      <Navbar />
      <div className="w-9/12 mx-auto text-xs flex gap-x-4 mb-12">
        <div><Link href="/" className="hover:underline">Popupsmart</Link></div>
        <div><Link href="/help" className="hover:underline">Documentation</Link></div>
        <div><Link href="" className="font-medium hover:underline">{targetTitle}</Link></div>
      </div>
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/5 ml-4 md:ml-20 mt-4 md:mt-0">
            <div className="font-bold text-2xl mb-10">
              <Link href="/help">Categories</Link>
            </div>
            <Link href="/help/account"><h1 className="font-semibold text-xl mb-5">Account</h1></Link>
            <Link href="/help/gettingstarted"><h1 className="font-semibold text-xl mb-5">Getting Started</h1></Link>
            <Link href="/help/campaignbuilder"><h1 className="font-semibold text-xl mb-5">Campaign Builder</h1></Link>
            <Link href="/help/emailmarketing"><h1 className="font-semibold text-xl mb-5">Email Marketing and CRM Integrations</h1></Link>
            <Link href="/help/analytics"><h1 className="font-semibold text-xl mb-5">Analytics</h1></Link>
            <Link href="/help/targeting"><h1 className="font-semibold text-xl mb-5 text-blue-600">Segment & Targeting</h1></Link>
            {targetingData.attributes.targeting_details.data.map(
              (item: TargetingDetail) => (
                <div key={item.id} className="ml-5">
                  <Link href={`/help/targeting/${item.id}`} key={item.id}>
                    <ReactMarkdown
                      className="mb-4 text-md font-medium hover:text-blue-600"
                      key={item.id}
                    >
                      {item.attributes.targetingTitle}
                    </ReactMarkdown>
                  </Link>
                </div>
              )
            )}
            
          </div>

          <div className="w-full md:w-4/5 max-w-5xl mx-auto ml-12">
            <div className="text-center md:text-left">
              <div className="text-5xl font-extrabold mb-12">
                <ReactMarkdown className="markdown-heading">
                  {targetTitle}
                </ReactMarkdown>
              </div>
              <div>
                <ReactMarkdown className="markdown-content">
                  {targetContent}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
