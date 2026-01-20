const express = require("express");
const Song = require("../models/Song");

const router = express.Router();

// GET all songs
router.get("/", async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

// POST a new song
router.post("/", async (req, res) => {
  const song = new Song(req.body);
  await song.save();
  res.status(201).json(song);
});

module.exports = router;
