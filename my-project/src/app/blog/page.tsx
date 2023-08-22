import Blog from "@/components/blogs";
import Navbar from "@/components/navbar";

import React from "react";

export default function BlogPage() {
  return (
    <div>
      <Navbar />
      <h1 className="text-7xl font-extrabold text-center">
        Welcome to Popupsmart Blog Page !{" "}
      </h1>{" "}
      <Blog />
    </div>
  );
}
