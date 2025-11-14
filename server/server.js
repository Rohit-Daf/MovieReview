const express = require("express");
const userReducer = require("./routes/user");
const cors = require("cors");
const reviewRouter = require("./routes/review");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userReducer);
app.use("/review", reviewRouter);

app.listen(4000, "localhost", () => {
  console.log("server started on port 4000");
});
