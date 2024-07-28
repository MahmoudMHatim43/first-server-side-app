import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
const Blog = ({ blog, getNewList }) => {
  const navigate = useNavigate();

  async function deleteBlog(id) {
    const response = await axios.delete(
      `http://localhost:5000/api/blogs/delete/${id}`
    );
    const result = await response.data;
    if (result) {
      getNewList();
    }
  }
  async function editBlog(blog) {
    navigate("/add", { state: { blog } });
  }
  return (
    <div className="flex flex-col w-[300px] m-2 min-h-[200px] rounded-xl overflow-hidden shadow-xl">
      <h1 className="bg-white p-2 font-bold text-2xl text-center flex justify-between">
        {blog.title}
        <div className="flex gap-2">
          <FaEdit
            className="cursor-pointer text-sm"
            onClick={() => editBlog(blog)}
          />
          <FaTrash
            className="cursor-pointer text-sm"
            onClick={() => deleteBlog(blog._id)}
          />
        </div>
      </h1>
      <p className="bg-yellow-200 h-[100%] p-2 text-lg">{blog.description}</p>
    </div>
  );
};

export { Blog };
