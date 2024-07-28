import React from "react";
import axios from "axios";
import { BlogGlobalContext } from "../context";
import { useNavigate, useLocation } from "react-router-dom";
import { AddBlogBox } from "../components/AddBlogBox";

const AddBlog = () => {
  const { blogData, setBlogData } = React.useContext(BlogGlobalContext);
  const homePage = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    if (location.state) {
      const { blog } = location.state;
      setBlogData({ title: blog.title, description: blog.description });
    }
  }, [location]);

  async function saveBlog() {
    const response = location.state
      ? await axios.put(
          `http://localhost:5000/api/blogs/update/${location.state.blog._id}`,
          {
            title: blogData.title,
            description: blogData.description,
          }
        )
      : await axios.post("http://localhost:5000/api/blogs/add", {
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
  return <AddBlogBox saveBlog={saveBlog} edit={location.state} />;
};

export { AddBlog };
