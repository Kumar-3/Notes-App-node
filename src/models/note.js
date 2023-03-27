/*
Steps : 
1.Define Schema -> Note : id,userid,title,content,created
2.Create model -> <model name> <schema> Note
*/

const mongoose = require("mongoose");
const noteSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Note", noteSchema);
