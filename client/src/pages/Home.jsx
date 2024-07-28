import React from "react";
import axios from "axios";
import { BlogGlobalContext } from "../context";
import { Blog } from "../components/Blog";

const Home = () => {
  const { loading, setLoading, blogList, setBlogList } =
    React.useContext(BlogGlobalContext);
  React.useEffect(() => {
    getBlogs();
  }, []);
  async function getBlogs() {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/blogs/");
      const result = await response.data.blogList;
      if (result && result.length) {
        setBlogList(result);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-wrap w-[95%] mx-auto">
      {loading ? (
        <h1>Loading...</h1>
      ) : blogList && blogList.length == 0 ? (
        <h1>No Blogs Yet ...</h1>
      ) : (
        blogList.map((blog) => <Blog key={blog._id} blog={blog} />)
      )}
    </div>
  );
};
export { Home };
