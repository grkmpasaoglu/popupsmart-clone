import ReactMarkdown from "react-markdown";
import Link from "next/link";
import "@/app/help/help.scss"
import { Metadata, ResolvingMetadata } from "next";
import { warnOptionHasBeenMovedOutOfExperimental } from "next/dist/server/config";
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
  const emailmarketingData = await fetchData(`/api/email-marketing-and-crm-integrations-details/${params.slug}`);
  const EmailCRMTitle = emailmarketingData.data.attributes.EmailCRMTitle;
  const EmailCRMContent = emailmarketingData.data.attributes.EmailCRMContent;
  const desc = EmailCRMContent.slice(0,160);
  return {
    title: `${EmailCRMTitle} | Popupsmart`,
    description: desc,
  };
}

type EmailCRMIntegrationDetail = {
  id: number;
  attributes: {
    EmailCRMTitle: string;
    EmailCRMContent: string;
  };
};

type EmailCRMIntegrationData = {
  id: number;
  attributes: {
    EmailCRMTitle: string;
    EmailCRMContent: string;
    email_marketing_and_crm_integrations_details: {
      data: EmailCRMIntegrationDetail[];
    };
  };
};

type ApiResult = {
  data: EmailCRMIntegrationData[];
};

export default async function Home({
  params,
}: {
  params: { slug: string };
}) {
  const jsonres: ApiResult = await fetchData(
    `/api/email-marketing-and-crm-integrations?populate=*`
  );
  const emailCRMIntegrationData = jsonres.data;

  const jsonemail = await fetchData(`/api/email-marketing-and-crm-integrations-details/${params.slug}`);

  const EmailCRMTitle = jsonemail.data.attributes.EmailCRMTitle;
  const EmailCRMContent = jsonemail.data.attributes.EmailCRMContent;

  return (
    <main>
      <div className="w-9/12 mx-auto text-xs flex gap-x-4 mb-12">
        <div><Link href="/" className="hover:underline">Popupsmart</Link></div>
        <div><Link href="/help" className="hover:underline">Documentation</Link></div>
        <div><Link href="" className="font-medium hover:underline">{EmailCRMTitle}</Link></div>
      </div>
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row w-4/5 lg:w-full">
          <div className="w-1/5 ml-4 md:ml-20 mt-4 md:mt-0 hidden lg:block">
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
              <h1 className="font-semibold text-xl mb-5">Campaign Builder</h1>
            </Link>
            <Link href="/help/emailmarketing">
              <h1 className="font-semibold text-xl mb-5 text-blue-600">Email Marketing and CRM Integrations</h1>
            </Link>
            {emailCRMIntegrationData[0].attributes.email_marketing_and_crm_integrations_details.data.map(
              (item: EmailCRMIntegrationDetail) => (
                <div key={item.id} className="ml-5">
                  <Link href={`/help/emailmarketing/${item.id}`} key={item.id}>
                    <ReactMarkdown className="mb-4 text-md font-medium hover:text-blue-600">
                      {item.attributes.EmailCRMTitle}
                    </ReactMarkdown>
                  </Link>
                </div>
              )
            )}
            <Link href="/help/analytics"><h1 className="font-semibold text-xl mb-5">Analytics</h1></Link>
            <Link href="/help/targeting"><h1 className="font-semibold text-xl mb-5">Segments & Targeting</h1></Link>

          </div>

          <div className="w-full md:w-4/5 max-w-5xl mx-auto ml-12">
            <div className="text-left">
              <div className="text-5xl font-extrabold mb-12">{EmailCRMTitle}</div>
              <div>
                <ReactMarkdown className="markdown-content">{EmailCRMContent}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
