import React from "react";
import axios from "axios";
import { BlogGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import { AddBlogBox } from "../components/AddBlogBox";

const AddBlog = () => {
  const { blogData, setBlogData } = React.useContext(BlogGlobalContext);
  const homePage = useNavigate();

  async function saveBlog() {
    const response = await axios.post("http://localhost:5000/api/blogs/add", {
      title: blogData.title,
      description: blogData.description,
    });
    const result = await response.data;
    console.log(result);
    if (result) {
      setBlogData({ ...blogData, title: "", description: "" });
      homePage("/");
    }
  }
  return <AddBlogBox saveBlog={saveBlog} />;
};

export { AddBlog };
