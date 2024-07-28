import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="flex flex-col w-[30%] m-2 min-h-[200px] rounded-xl overflow-hidden shadow-xl">
      <h1 className="bg-white p-2 font-bold text-2xl text-center">
        {blog.title}
      </h1>
      <p className="bg-yellow-200 h-[100%] p-2 text-lg">{blog.description}</p>
    </div>
  );
};

export { Blog };
