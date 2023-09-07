import react from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";
import fetchData from "@/utils/fetchData";

export default async function HelpPage() {

  const account = await fetchData("/api/accounts?populate=*");
  const gettingStarted = await fetchData("/api/getting-starteds?populate=*");
  const campaignBuilder = await fetchData("/api/campaign-builders?populate=*");
  const emailMarketing = await fetchData("/api/email-marketing-and-crm-integrations?populate=*");
  const targeting = await fetchData("/api/targetings?populate=*");
  const analytics = await fetchData("/api/analytics?populate=*")

  return (
    <main>
      <Navbar />
      <div className="text-center">
        <h1 className="text-7xl font-extrabold">Documentation</h1>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 text-black mt-5 justify-items-center max-w-5xl mx-auto ">

        <div>
          {account.data.map((item: any) => (
            <Link href="help/account" key={item.id}>
              <div className="bg-white h-80 w-80 text-center rounded-sm overflow-hidden drop-shadow-md transition duration-200 hover:shadow-xl hover:translate-y-[-2px] mt-3">
                <div>
                  <div className="font-semibold text-2xl my-1 p-4 h-14 mt-3 mb-10">
                    <h3>{account.data[0].attributes.accTitle}</h3>
                  </div>
                  <div className="p-4 h-32 text-sm font-medium">
                    <p>{account.data[0].attributes.accDesc} </p>
                  </div>
                  <div className="border border-black px-10 py-3.5 inline-block rounded-full text-black transition duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                    <p>
                      {account.data[0].attributes.help_details.data.length} Articles
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>


        <div>
          {gettingStarted.data.map((item: any) => (
            // <Link href={`/help/${item?.id}`} key={item?.id}>
            <Link href="help/gettingstarted" key={item.id}>
              <div className="bg-white h-80 w-80 text-center rounded-sm overflow-hidden drop-shadow-md transition duration-200 hover:shadow-2xl hover:translate-y-[-2px] mt-3">
                <div>
                  <div className="font-semibold text-2xl my-1 p-4 h-14 mt-3 mb-10">
                    <h3>{gettingStarted.data[0].attributes.gsTitle}</h3>
                  </div>
                  <div className="p-4 h-32 text-sm font-medium">
                    <p>{gettingStarted.data[0].attributes.gsContent} </p>
                  </div>
                  <div className="border border-black px-10 py-3.5 inline-block rounded-full text-black transition duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                    <p>
                      {gettingStarted.data[0].attributes.getting_started_details.data.length} Articles
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div>
          {campaignBuilder.data.map((item: any) => (
            <Link href="help/campaignbuilder" key={item.id}>
              <div className="bg-white h-80 w-80 text-center rounded-sm overflow-hidden drop-shadow-md transition duration-200 hover:shadow-xl hover:translate-y-[-2px] mt-3">
                <div>
                  <div className="font-semibold text-2xl my-1 p-4 h-14 mt-3 mb-10">
                    <h3>{campaignBuilder.data[0].attributes.campaignBuilderTitle}</h3>
                  </div>
                  <div className="p-4 h-32 text-sm font-medium">
                    <p>{campaignBuilder.data[0].attributes.campaignBuilderContent} </p>
                  </div>
                  <div className="border border-black px-10 py-3.5 inline-block rounded-full text-black transition duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                    <p>
                      {campaignBuilder.data[0].attributes.campaign_builder_details.data.length} Articles
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div>
          {emailMarketing.data.map((item: any) => (
            <Link href="help/emailmarketing" key={item.id}>
              <div className="bg-white h-80 w-80 text-center rounded-sm overflow-hidden drop-shadow-md transition duration-200 hover:shadow-xl hover:translate-y-[-2px] mt-3">
                <div>
                  <div className="font-semibold text-2xl my-1 p-4 h-14 mt-3 mb-10">
                    <h3>{emailMarketing.data[0].attributes.EmailCRMTitle}</h3>
                  </div>
                  <div className="p-4 h-32 text-sm font-medium">
                    <p>{emailMarketing.data[0].attributes.EmailCRMContent} </p>
                  </div>
                  <div className="border border-black px-10 py-3.5 inline-block rounded-full text-black transition duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                    <p>
                      {emailMarketing.data[0].attributes.email_marketing_and_crm_integrations_details.data.length} Articles
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div>
          {targeting.data.map((item: any) => (
            <Link href="help/targeting" key={item.id}>
              <div className="bg-white h-80 w-80 text-center rounded-sm overflow-hidden drop-shadow-md transition duration-200 hover:shadow-xl hover:translate-y-[-2px] mt-3">
                <div>
                  <div className="font-semibold text-2xl my-1 p-4 h-14 mt-3 mb-10">
                    <h3>{targeting.data[0].attributes.targetingTitle}</h3>
                  </div>
                  <div className="p-4 h-32 text-sm font-medium">
                    <p>{targeting.data[0].attributes.targetingContent} </p>
                  </div>
                  <div className="border border-black px-10 py-3.5 inline-block rounded-full text-black transition duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                    <p>
                      {targeting.data[0].attributes.targeting_details.data.length} Articles
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div>
          {analytics.data.map((item: any) => (
            <Link href="help/analytics" key={item.id}>
              <div className="bg-white h-80 w-80 text-center rounded-sm overflow-hidden drop-shadow-md transition duration-200 hover:shadow-xl hover:translate-y-[-2px] mt-3">
                <div>
                  <div className="font-semibold text-2xl my-1 p-4 h-14 mt-3 mb-10">
                    <h3>{analytics.data[0].attributes.analyticsTitle}</h3>
                  </div>
                  <div className="p-4 h-32 text-sm font-medium">
                    <p>{analytics.data[0].attributes.analyticsContent} </p>
                  </div>
                  <div className="border border-black px-10 py-3.5 inline-block rounded-full text-black transition duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                    <p>
                      {analytics.data[0].attributes.analytics_details.data.length} Articles
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
