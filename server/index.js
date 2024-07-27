// import
const express = require("express");
const cors = require("cors");
const blogRoute = require("./route/blog-route");
require("./dataBase/index.js");
// -------------------------------------- //
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRoute);
// -------------------------------------- //
app.use("/api", (request, response) => {
  response.send("Hello World!");
});
app.listen(5000, () => {
  console.log("App is running on port 5000 ...");
});
