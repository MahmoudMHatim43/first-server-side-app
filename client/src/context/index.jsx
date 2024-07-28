import React from "react";

const BlogGlobalContext = React.createContext(undefined);

const GlobalState = ({ children }) => {
  const [blogData, setBlogData] = React.useState({
    title: "",
    description: "",
  });
  const [blogList, setBlogList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  return (
    <BlogGlobalContext.Provider
      value={{
        blogData,
        setBlogData,
        blogList,
        setBlogList,
        loading,
        setLoading,
      }}
    >
      {children}
    </BlogGlobalContext.Provider>
  );
};
export { GlobalState, BlogGlobalContext };
