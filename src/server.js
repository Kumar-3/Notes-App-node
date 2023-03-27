//Initialization
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const note = require("./models/note");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//extended
//true -> nested object(correct)
//false -> nested object(not correct)

//Initialization of mongo DB
const mongoDbPath =
  "mongodb+srv://kumar:root@notecluster.rlhpuuw.mongodb.net/notesdb";
mongoose.connect(mongoDbPath).then(function () {
  //Home route
  app.get("/", function (req, res) {
    const response = {
      message: "API WORKED",
    };
    res.json(response);
  });
  const noteRouter = require("./routes/noteRouter");
  app.use("/notes", noteRouter);
});
const port = process.env.port || 5000;
app.listen(port, function () {
  console.log("Server started at: " + port);
});
