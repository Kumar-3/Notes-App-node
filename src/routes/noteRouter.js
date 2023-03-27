const express = require("express");
const router = express.Router();
const note = require("../models/note");
router.post("/getUserNotes", async function (req, res) {
  var notes = await note.find({ userid: req.body.userid });
  res.json(notes);
});

router.get("/list", async function (req, res) {
  var notes = await note.find();
  res.json(notes);
});

router.post("/add", async function (req, res) {
  await note.deleteOne({ id: req.body.id });
  const newNote = new note({
    id: req.body.id,
    userid: req.body.userid,
    title: req.body.title,
    content: req.body.content,
  });
  await newNote.save();
  const response = { message: "New Note created" + `id : ${req.body.id}` };
  res.json(response);
});

router.post("/delete", async function (req, res) {
  await note.deleteOne({ id: req.body.id });
  const response = { message: "Note deleted" + `id : ${req.body.id}` };
  res.json(response);
});

module.exports = router;
