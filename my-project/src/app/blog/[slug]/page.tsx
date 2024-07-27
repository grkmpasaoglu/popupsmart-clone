import "@/app/blog/blog.scss";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import fetchData from "@/utils/fetchData";
import type { Metadata, ResolvingMetadata } from "next";
import Head from "next/head";


type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const jsonres = await fetchData(`/api/blogs/${params.slug}`);
  const title = jsonres.data.attributes.title;
  const body = jsonres.data.attributes.body;
  const description = body.slice(0, 160);
  return {
    title: title,
    description: description,
  };
}

export async function BlogPage({ params }: { params: { slug: string } }) {
  const jsonres = await fetchData(`/api/blogs/${params.slug}`);
  const title = jsonres.data.attributes.title;
  const body = jsonres.data.attributes.body;

  return (
    <main>
      <div className="w-9/12 mx-auto text-xs flex gap-x-4 mb-12">
        <div><Link href="/" className="hover:underline">Popupsmart</Link></div>
        <div><Link href="/blog" className="hover:underline">Blog</Link></div>
        <div><Link href="" className="font-medium hover:underline">{title}</Link></div>
      </div>
      <div className="container mx-auto max-w-screen-xl w-4/5">
        <div className="flex flex-col mb-10  md:flex-row md:justify-between md:items-center">
        </div>
        <div className="flex flex-col md:flex-row">
          <div>
          </div>
          <div className="w-full md:w-7/12 ml-4 md:ml-20 mt-4 md:mt-0">
            <ReactMarkdown className="markdown-heading text-2xl md:text-3xl">
              {title}
            </ReactMarkdown>
            <ReactMarkdown className="markdown-content mt-4 font-light">
              {body}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogPage;
