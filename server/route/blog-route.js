const express = require("express");
const blogRouter = express.Router();
const {
  fetchBlogList,
  addNewBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog-controller.js");

blogRouter.get("/", fetchBlogList);
blogRouter.post("/add", addNewBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.delete("/delete/:id", deleteBlog);

module.exports = blogRouter;
