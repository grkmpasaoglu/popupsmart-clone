import Navbar from "@/components/navbar";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import "@/app/help/gettingstarted/gettingstarted.scss";

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

export default async function Home({
    params,
}: {
    params: { slug: string };
}) {
    const res = await fetch(`http://127.0.0.1:1337/api/campaign-builders?populate=*`);
    const jsonres: ApiResult = await res.json();
    const campaignbuilderData = jsonres.data;
    const accdata = await fetch(`http://127.0.0.1:1337/api/campaign-builder-details/${params.slug}`);

    const jsonacc = await accdata.json();
    const campaignBuilderTitle = jsonacc.data.attributes.campaignBuilderTitle
    const campaignBuilderContent = jsonacc.data.attributes.campaignBuilderContent
    return (
        <main>
            <Navbar />
            <div className="w-9/12 mx-auto text-xs flex gap-x-4 mb-12">
                <div><Link href="/" className="hover:underline">Popupsmart</Link></div>
                <div><Link href="/help" className="hover:underline">Documentation</Link></div>
                <div><Link href="" className="font-medium hover:underline">{campaignBuilderTitle}</Link></div>
            </div>
            <div className="container mx-auto max-w-screen-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="w-1/5 ml-4 md:ml-20 mt-4 md:mt-0">
                        <div className="font-bold text-2xl mb-10">
                            <Link href="/help">Categories</Link>
                        </div>
                        <Link href="/help/account">
                            <h1 className="font-semibold text-xl mb-5">Account</h1>
                        </Link>

                        <Link href="/help/gettingstarted">
                            <h1 className="font-semibold text-xl mb-5">Getting Started</h1>
                        </Link>
                        <Link href="/help/campaignbuilder">
                            <h1 className="font-semibold text-xl mb-5 text-blue-600">Campaign Builder</h1>
                        </Link>
                        {campaignbuilderData[0].attributes.campaign_builder_details.data.map(
                            (item: CampaignBuilderDetail) => (
                                <div key={item.id} className="ml-5">
                                    <Link href={`/help/campaignbuilder/${item.id}`} key={item.id}>
                                        <ReactMarkdown className="mb-4 text-md font-medium hover:text-blue-600">
                                            {item.attributes.campaignBuilderTitle}
                                        </ReactMarkdown>
                                    </Link>
                                </div>
                            )
                        )}
                        <Link href="/help/emailmarketing"><h1 className="font-semibold text-xl mb-5">Email Marketing and CRM Integrations</h1></Link>
                        <Link href="/help/analytics"><h1 className="font-semibold text-xl mb-5">Analytics</h1></Link>
                        <Link href="/help/targeting"><h1 className="font-semibold text-xl mb-5">Segments & Targeting</h1></Link>


                    </div>


                    <div className="w-full md:w-4/5 max-w-5xl mx-auto ml-12">
                        <div className="text-center md:text-left">
                            <div className="text-5xl font-extrabold mb-12">{campaignBuilderTitle}</div>
                            <div>
                                <ReactMarkdown className="markdown-content">{campaignBuilderContent}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}