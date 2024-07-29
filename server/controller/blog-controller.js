const mongoose = require("mongoose");
const Blog = require("../model/Blog");
const { response } = require("express");

/* Methods */

// fetch list of blogs:
const fetchBlogList = async (request, response) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (error) {
    console.log(error);
  }
  return !blogList
    ? response.status(404).json({ message: "No blog found" })
    : response.status(200).json({ blogList });
};
// add new blog:
const addNewBlog = async (request, response) => {
  const { title, description } = request.body;
  const lastCreatedBlog = new Blog({ title, description, date: new Date() });

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await lastCreatedBlog.save({ session });
    await session.commitTransaction();
    session.endSession();
    return response.status(200).json({ message: "Blog created successfully" });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log(error);
    return response.status(500).json({ message: error });
  }
};

// update blog:
const updateBlog = async (request, response) => {
  const id = request.params.id;
  const { title, description } = request.body;
  let currBlogToUpdate;
  try {
    currBlogToUpdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Could not update blog" });
  }
  return !currBlogToUpdate
    ? response.status(404).json({ message: "Unable to update blog" })
    : response.status(200).json({ currBlogToUpdate });
};
// delete blog:
const deleteBlog = async (request, response) => {
  const id = request.params.id;
  try {
    const findCurrBlog = await Blog.findById(id);
    if (!findCurrBlog) {
      return response.status(404).json({ message: "Blog not found" });
    }
    await Blog.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ message: "Could not delete blog! Try again later" });
  }
  return response.status(200).json({ message: "Blog deleted successfully" });
};

module.exports = {
  fetchBlogList,
  updateBlog,
  addNewBlog,
  deleteBlog,
};
