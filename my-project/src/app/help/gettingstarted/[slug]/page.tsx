import ReactMarkdown from "react-markdown";
import Link from "next/link";
import "@/app/help/help.scss"
import { Metadata, ResolvingMetadata } from "next";
import fetchData from "@/utils/fetchData";



export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const jsongs = await fetchData(
    `/api/getting-started-details/${params.slug}`
  );
  const gstitle = jsongs.data.attributes.gsTitle;
  const gscontent = jsongs.data.attributes.gsContent;
  const description = gscontent.slice(0, 160);
  return {
    title: `${gstitle} | Popupsmart`,
    description: description,
  };
}

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

type Props = {
  params: { helpId: string, slug:any };
};

export default async function Home({
  params,
}: {
  params: { slug: string };
}) {
  const jsonres: ApiResult = await fetchData(`/api/getting-starteds?populate=*`);
  const gettingStartedData = jsonres.data;

  const jsongs = await fetchData(
    `/api/getting-started-details/${params.slug}`
  );
  const gstitle = jsongs.data.attributes.gsTitle;
  const gscontent = jsongs.data.attributes.gsContent;

  return (
    <main>
      <div className="w-9/12 mx-auto text-xs flex gap-x-4 mb-12">
        <div><Link href="/" className="hover:underline">Popupsmart</Link></div>
        <div><Link href="/help" className="hover:underline">Documentation</Link></div>
        <div><Link href="" className="font-medium hover:underline">{gstitle}</Link></div>
      </div>
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row w-4/5 lg:w-full">
          <div className="w-1/5 ml-4 md:ml-20 mt-4 md:mt-0 hidden lg:block">
            <div className="font-bold text-2xl mb-10">
              <Link href="/help">Categories</Link>
            </div>
            <Link href="/help/account"><h1 className="font-semibold text-xl mb-5">Account</h1></Link>
            <Link href="/help/gettingstarted"><h1 className="font-semibold text-xl mb-5 text-blue-600">Getting Started</h1></Link>
            {gettingStartedData.map((gettingStarted: GettingStartedData) => (
              <div key={gettingStarted.id} className="ml-5">
                {gettingStarted.attributes.getting_started_details.data.map(
                  (item: GettingStartedDetail) => (
                    <Link href={`/help/gettingstarted/${item?.id}`} key={item?.id}>
                      <ReactMarkdown
                        className="mb-4 text-md font-medium hover:text-blue-600"
                        key={item.id}
                      >
                        {item.attributes.gsTitle}
                      </ReactMarkdown>
                    </Link>
                  )
                )}
              </div>
            ))}
            <Link href="/help/campaignbuilder"><h1 className="font-semibold text-xl mb-5">Campaign Builder</h1></Link>
            <Link href="/help/emailmarketing"><h1 className="font-semibold text-xl mb-5">Email Marketing and CRM Integrations</h1></Link>
            <Link href="/help/analytics"><h1 className="font-semibold text-xl mb-5">Analytics</h1></Link>
            <Link href="/help/targeting"><h1 className="font-semibold text-xl mb-5">Segments & Targeting</h1></Link>
          </div>


          <div className="w-full md:w-4/5 max-w-5xl mx-auto ml-12">
            <div className="text-left">
              <div className="text-5xl font-extrabold mb-12"><ReactMarkdown className="markdown-heading">{gstitle}</ReactMarkdown></div>
              <div><ReactMarkdown className="markdown-content">{gscontent}</ReactMarkdown></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
