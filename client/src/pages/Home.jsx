import React from "react";
import axios from "axios";
import { CircleLoader } from "react-spinners";
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
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } else {
        setLoading(false);
        setBlogList([]);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-wrap w-[95%] mx-auto">
      {loading ? (
        <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <CircleLoader color="white" loading={loading} size={150} />
          <h1 className="text-3xl text-center p-5 text-white">Loading...</h1>
        </div>
      ) : blogList && blogList.length ? (
        blogList.map((blog) => (
          <Blog key={blog._id} blog={blog} getNewList={getBlogs} />
        ))
      ) : (
        <h1 className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl text-white font-bold">
          No Blogs Saved ...
        </h1>
      )}
    </div>
  );
};
export { Home };
