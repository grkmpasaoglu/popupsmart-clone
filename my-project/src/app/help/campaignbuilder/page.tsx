import Navbar from "@/components/navbar";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import "@/app/help/campaignbuilder/campaignbuilder.scss";
import { MdKeyboardArrowRight } from 'react-icons/md';

type CampaignBuilderDetail = {
  id: number;
  attributes: {
    campaignBuilderTitle: string;
    campaignBuilderContent: string;
  };
};

type CampaignBuilderData = {
  id: number;
  attributes: {
    campaignBuilderTitle: string;
    campaignBuilderContent: string;
    campaign_builder_details: {
      data: CampaignBuilderDetail[];
    };
  };
};

type ApiResult = {
  data: CampaignBuilderData[];
};

export default async function Home() {
  const res = await fetch(
    `http://127.0.0.1:1337/api/campaign-builders?populate=*`
  );
  const jsonres: ApiResult = await res.json();
  const campaignBuilderData = jsonres.data;

  return (
    <main>
      <Navbar />
      <div className="w-9/12 mx-auto text-xs flex gap-x-4 mb-12">
        <div><Link href="/" className="hover:underline">Popupsmart</Link></div>
        <div><Link href="/help" className="hover:underline">Documentation</Link></div>
        <div><Link href="/help/campaignbuilder" className="font-medium hover:underline">Campaign Builder</Link></div>
      </div>
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/5 ml-4 md:ml-20 mt-4 md:mt-0">
            <div className="font-bold text-2xl mb-10">
              <Link href="/help">Categories</Link>
            </div>
            <Link href="/help/account"><h1 className="font-semibold text-xl mb-5">Account</h1></Link>
            <Link href="/help/gettingstarted"><h1 className="font-semibold text-xl mb-5">Getting Started</h1></Link>
            <Link href="/help/campaignbuilder"><h1 className="font-semibold text-xl mb-5 text-blue-600">Campaign Builder</h1></Link>
            {campaignBuilderData.map((campaignBuilder: CampaignBuilderData) => (
              <div key={campaignBuilder.id} className="ml-5">
                {campaignBuilder.attributes.campaign_builder_details.data.map(
                  (item: CampaignBuilderDetail) => (
                    <Link href={`/help/campaignbuilder/${item?.id}`} key={item?.id}>
                      <ReactMarkdown
                        className="mb-4 text-md font-medium hover:text-blue-600"
                        key={item.id}
                      >
                        {item.attributes.campaignBuilderTitle}
                      </ReactMarkdown>
                    </Link>
                  )
                )}
              </div>
            ))}
            <Link href="/help/emailmarketing"><h1 className="font-semibold text-xl mb-5">Email Marketing and CRM Integrations</h1></Link>
            <Link href="/help/analytics"><h1 className="font-semibold text-xl mb-5">Analytics</h1></Link>
            <Link href="/help/targeting"><h1 className="font-semibold text-xl mb-5">Segments & Targeting</h1></Link>


          </div>


          <div className="w-full md:w-4/5 max-w-5xl mx-auto ml-12">
            <div className="text-5xl font-bold mb-12">Campaign Builder</div>
            {campaignBuilderData.map((campaignBuilder: CampaignBuilderData) => (
              <div key={campaignBuilder.id} className="ml-5">
                {campaignBuilder.attributes.campaign_builder_details.data.map(
                  (item: CampaignBuilderDetail) => (
                    <Link href={`/help/campaignbuilder/${item?.id}`} key={item?.id} className="flex items-center">
                      <MdKeyboardArrowRight className="mr-2 mb-4 text-blue-600 text-2xl" />
                      <ReactMarkdown
                        className="mb-4 text-2xl font-medium hover:text-blue-600"
                        key={item.id}
                      >
                        {item.attributes.campaignBuilderTitle}
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
