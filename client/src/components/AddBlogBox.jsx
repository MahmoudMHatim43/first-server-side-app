import React from "react";
import { BlogGlobalContext } from "../context";

const AddBlogBox = ({ saveBlog }) => {
  const { blogData, setBlogData } = React.useContext(BlogGlobalContext);
  return (
    <div className="border flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold text-orange-400 mb-5">
        Add A New Blog
      </h1>
      <div className="flex flex-col mb-10 w-[70%] rounded-2xl overflow-hidden shadow-xl">
        <input
          type="text"
          placeholder="Enter Title"
          className="p-2 text-center outline-none text-2xl font-bold"
          value={blogData.title}
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
        />
        <textarea
          name="description"
          placeholder="Write your thoughts 🧠..."
          className="p-2 min-h-[200px] outline-none bg-yellow-200 text-lg"
          value={blogData.description}
          onChange={(e) =>
            setBlogData({ ...blogData, description: e.target.value })
          }
        />
      </div>
      <button
        className="text-lg font-bold bg-white hover:bg-orange-400 px-5 py-2 rounded-2xl shadow-outline transition-colors duration-300"
        onClick={saveBlog}
      >
        Push Blog 💭
      </button>
    </div>
  );
};

export { AddBlogBox };
