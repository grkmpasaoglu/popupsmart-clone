import ReactMarkdown from "react-markdown";
import Link from "next/link";
import "@/app/help/help.scss"
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Metadata, ResolvingMetadata } from "next";
import fetchData from "@/utils/fetchData";

type Props = {
  params: {
    slug: any;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const jsonres: ApiResult = await fetchData(`/api/getting-starteds?populate=*`);
  const gettingStartedData = jsonres.data;
  const title = gettingStartedData[0].attributes.gsTitle;
  const desc = gettingStartedData[0].attributes.gsContent;
  const description = desc.slice(0, 160);
  return {
    title: `${title} | Popupsmart`,
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

export default async function Home() {
  const jsonres: ApiResult = await fetchData(
    `/api/getting-starteds?populate=*`
  );
  const gettingStartedData = jsonres.data;

  return (
    <main>
      <div className="w-9/12 mx-auto text-xs flex gap-x-4 mb-12">
        <div><Link href="/" className="hover:underline">Popupsmart</Link></div>
        <div><Link href="/help" className="hover:underline">Documentation</Link></div>
        <div><Link href="/help/gettingstarted" className="font-medium hover:underline">Getting Started</Link></div>
      </div>
      <h1 className="text-center text-4xl font-bold mb-20 lg:hidden block">Help Center</h1>

      <div className="container mx-auto max-w-screen-xl md:flex md:justify-center">
        <div className="flex flex-col md:flex-row">
        <div className="w-1/5 ml-4 md:ml-20 mt-4 md:mt-0 hidden lg:block">
            <div className="font-bold text-2xl mb-10">
              <Link href="/help">Categories</Link>
            </div>
            <Link href="/help/account"><h1 className="font-semibold text-xl mb-5">Account</h1></Link>
            <h1 className="font-semibold text-xl mb-5 text-blue-600">Getting Started</h1>
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


          <div className="w-4/5 max-w-5xl mx-auto ml-12">
            <div className="text-2xl lg:text-5xl font-bold mb-12">Getting Started</div>
            {gettingStartedData.map((gettingStarted: GettingStartedData) => (
              <div key={gettingStarted.id} className="ml-5">
                {gettingStarted.attributes.getting_started_details.data.map(
                  (item: GettingStartedDetail) => (
                    <Link href={`/help/gettingstarted/${item?.id}`} key={item?.id} className="flex items-center">
                      <MdKeyboardArrowRight className="mr-2 mb-4 text-blue-600 text-2xl" />
                      <ReactMarkdown
                        className="mb-4 text-2xl font-medium hover:text-blue-600"
                        key={item.id}
                      >
                        {item.attributes.gsTitle}
                      </ReactMarkdown>
                    </Link>
                  )
                )}
              </div>
            ))}
            <div className="mt-10">
              <Link
                href={"#"}
                className="border border-black px-2 py-3 text-lg font-medium rounded-lg hover:bg-gray-800 hover:text-white transition duration-00"
              >
                Still Stuck ?
              </Link>
              <p className="text-lg font-medium mt-6">We’d love to help you.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
