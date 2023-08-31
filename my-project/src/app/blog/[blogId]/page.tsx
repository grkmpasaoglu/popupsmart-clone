import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import ReactMarkdown from "react-markdown";
import "@/app/blog/blog.css";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type Props = {
  params: { blogId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const res = await fetch(`http://localhost:1337/api/blogs/${params.blogId}`);
  const jsonres = await res.json();
  const title = jsonres.data.attributes.title;
  const body = jsonres.data.attributes.body;
  const description = body.slice(0, 160);
  return {
    title: title,
    description: description,
  };
}

export default async function ({ params }: { params: { blogId: string } }) {
  const res = await fetch(`http://localhost:1337/api/blogs/${params.blogId}`);
  const jsonres = await res.json();
  const title = jsonres.data.attributes.title;
  const body = jsonres.data.attributes.body;
  console.log(jsonres)

  return (
    <main>
      <Navbar />
      <Sidebar />
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col mb-10  md:flex-row md:justify-between md:items-center">
          <div className="md:ml-64">
            <Link
              href="/"
              className="text-xs text-gray-500 mr-5 hover:underline"
            >
              Popupsmart
            </Link>
            <Link
              href="/blog"
              className="text-xs text-gray-500 mr-5 hover:underline"
            >
              Blog
            </Link>
            <a className="text-xs text-gray-600 font-bold">
              {title}
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div>
          </div>
          <div className="w-full md:w-7/12 ml-4 md:ml-20 mt-4 md:mt-0">
            <ReactMarkdown className="markdown-heading text-2xl md:text-3xl">
              {title}
            </ReactMarkdown>
            <ReactMarkdown className="markdown-content mt-4">
              {body}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}
