const mongoose = require("mongoose");
const express = require("express");
const studentRoute = require("./controller/studentRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

mongoose.set("strictQuery", true); //deprection warning//to supress the warning
mongoose.connect(
  "mongodb+srv://test:12345@cluster0.dafrf1d.mongodb.net/schooldb" //link from mongodb where (in link password is replaced with 12345 )the db and collection along with data is created there in that mongodb website to run this u need to connect again means that particualr link which is generated need to kept in the space bar which will be appeared on clicking the leaf symbol and + symbol at the connections at left top
);
//using Axios .post in the frontend we can even add the data
var db = mongoose.connection;
db.on("open", () => console.log("Connected to DB"));
db.on("error", () => console.log("Error occurred"));

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/studentRoute", studentRoute);
app.listen(4000, () => {
  console.log("server started at port 4000");
});
