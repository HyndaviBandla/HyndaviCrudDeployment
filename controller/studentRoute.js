const express = require("express");
const studentSchema = require("../model/studentSchema");
const mongoose = require("mongoose");

const studentRoute = express.Router();

studentRoute.post("/create-student", (req, res) => {
  studentSchema.create(req.body, (err, data) => {
    if (err) return err;
    else res.json(data);
  });
});

studentRoute.get("/", (req, res) => {
  studentSchema.find((err, data) => {
    if (err) return err;
    else res.json(data);
  });
});
studentRoute
  .route("/update-student/:id")
  .get((req, res) => {
    console.log(req.params.id);
    studentSchema.findById(
      mongoose.Types.ObjectId(req.params.id),
      (err, data) => {
        if (err) res.json(err);
        else res.json(data);
      }
    );
  })
  .put((req, res) => {
    console.log(req.params.id);
    studentSchema.findByIdAndUpdate(
      mongoose.Types.ObjectId(req.params.id),
      { $set: req.body },
      (err, data) => {
        if (err) return err;
        else res.json(data);
      }
    );
  });

//and we can axes this put fxn using Axios.put("https/localhost...........") in the frontend part//by defaul we will get get req so we need to mention as post for post req
studentRoute.delete("/delete-student/:id", (req, res) => {
  studentSchema.findByIdAndRemove(
    mongoose.Types.ObjectId(req.params.id), //we want the id which is available in the req and we r converting in to the objectid
    (err, data) => {
      if (err) return err;
      else res.json(data);
    }
  );
});

module.exports = studentRoute;
