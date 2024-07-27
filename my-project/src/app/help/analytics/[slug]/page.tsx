import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Metadata, ResolvingMetadata } from "next";
import fetchData from "@/utils/fetchData";
import "@/app/help/help.scss"


type Props = {
    params: {
        slug: any;
    };
};

export async function generateMetadata(
    { params }: Props,
    parent?: ResolvingMetadata
): Promise<Metadata> {
    const jsonanalytics = await fetchData(`/api/analytics-details/${params.slug}`);
    const accTitle = jsonanalytics.data.attributes.analyticsTitle;
    const accContent = jsonanalytics.data.attributes.analyticsContent;
    const description = accContent.slice(0, 160);
    return {
        title: `${accTitle} | Popupsmart`,
        description: description,
    };
}

type AnalyticsDetail = {
    id: number;
    attributes: {
        analyticsTitle: string;
        analyticsContent: string;
    };
};

type AnalyticsData = {
    id: number;
    attributes: {
        analytics_details: {
            data: AnalyticsDetail[];
        };
        analyticsTitle: string;
        analyticsContent: string;
    };
};

type ApiResult = {
    data: AnalyticsData[];
};

export default async function Home({
    params,
}: {
    params: { slug: string };
}) {
    const jsonres: ApiResult = await fetchData(`/api/analytics?populate=*`);
    const analyticsData = jsonres.data[0];
    
    const jsonanalytics = await fetchData(`/api/analytics-details/${params.slug}`);
    const analyticsTitle = jsonanalytics.data.attributes.analyticsTitle
    const analyticsContent = jsonanalytics.data.attributes.analyticsContent

    return (
        <main>
            <div className="w-9/12 mx-auto text-xs flex gap-x-4 mb-12">
                <div><Link href="/" className="hover:underline">Popupsmart</Link></div>
                <div><Link href="/help" className="hover:underline">Documentation</Link></div>
                <div><Link href="/help/analytics" className="font-medium hover:underline">{analyticsTitle}</Link></div>
            </div>
            <div className="container mx-auto max-w-screen-xl">
                <div className="flex flex-col md:flex-row w-4/5 lg:w-full">
                    <div className="w-1/5 ml-4 md:ml-20 mt-4 md:mt-0 hidden lg:block">
                        <div className="font-bold text-2xl mb-10">
                            <Link href="/help">Categories</Link>
                        </div>
                        <Link href="/help/account"><h1 className="font-semibold text-xl mb-5">Account</h1></Link>
                        <Link href="/help/gettingstarted"><h1 className="font-semibold text-xl mb-5">Getting Started</h1></Link>
                        <Link href="/help/campaignbuilder"><h1 className="font-semibold text-xl mb-5">Campaign Builder</h1></Link>
                        <Link href="/help/emailmarketing"><h1 className="font-semibold text-xl mb-5">Email Marketing and CRM Integrations</h1></Link>
                        <Link href="/help/analytics"><h1 className="font-semibold text-xl mb-5 text-blue-600">Analytics</h1></Link>
                        {analyticsData.attributes.analytics_details.data.map(
                            (item: AnalyticsDetail) => (
                                <div key={item.id} className="ml-5">
                                    <Link href={`/help/analytics/${item.id}`} key={item.id} className="flex items-center">
                                        <MdKeyboardArrowRight className="mr-2 mb-4 text-blue-600 text-2xl" />
                                        <ReactMarkdown
                                            className="mb-4 text-md font-medium hover:text-blue-600"
                                            key={item.id}
                                        >
                                            {item.attributes.analyticsTitle}
                                        </ReactMarkdown>
                                    </Link>
                                </div>
                            )
                        )}
                        <Link href="/help/targeting"><h1 className="font-semibold text-xl mb-5">Segments & Targeting</h1></Link>
                    </div>

                    <div className="w-full md:w-4/5 max-w-5xl mx-auto ml-12">
                        <div className="text-left">
                            <div className="text-5xl font-extrabold mb-12">{analyticsTitle}</div>
                            <div>
                                <ReactMarkdown className="markdown-content">{analyticsContent}</ReactMarkdown>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
