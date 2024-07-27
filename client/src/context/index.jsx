import React from "react";

const BlogGlobalContext = React.createContext(undefined);

const GlobalState = ({ children }) => {
  return (
    <BlogGlobalContext.Provider value={undefined}>
      {children}
    </BlogGlobalContext.Provider>
  );
};
export { GlobalState, BlogGlobalContext };
