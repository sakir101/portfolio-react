import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((req) => req.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h1 className="text-slate-500 font-bold text-2xl text-center">
        Blog on React coming soon
      </h1>
      <div className="grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-7">
        {blogs.length &&
          blogs.map((blog) => (
            <SingleBlog key={blog.id} blog={blog}></SingleBlog>
          ))}
      </div>
    </div>
  );
};

export default Blog;
