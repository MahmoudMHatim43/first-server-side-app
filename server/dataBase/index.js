const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://browsingemail43:QWp9kpQP07iRlHH8@mahmoud.jjvctol.mongodb.net/")
  .then(() => console.log("connected to mongo database"))
  .catch((err) => console.log(err));
