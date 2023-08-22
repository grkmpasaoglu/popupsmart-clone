import react from "react";
import Link from "next/link";

export default async function Blog() {
  const res = await fetch("http://localhost:1337/api/blogs");
  const jsonres = await res.json();
  console.log(jsonres);
  return (
    <main>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 px-4 text-black mt-5 justify-items-center max-w-7xl mx-auto">
          {jsonres.data.map((item: any) => (
            <Link href={`/blog/${item?.id}`} key={item?.id}>
              <div className="bg-white rounded-sm overflow-hidden drop-shadow-md transition duration-200 hover:shadow-xl hover:translate-y-[-2px] mt-3">
                <img
                  src={item.attributes.images[0].image}
                  alt="Image"
                  className="w-full h-48"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg my-1">
                    {item?.attributes?.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
