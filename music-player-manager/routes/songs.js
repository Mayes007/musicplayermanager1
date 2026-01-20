const express = require("express");
const Song = require("../models/Song");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  }
});

const upload = multer({ storage: storage });

// GET all songs
router.get("/", async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

// POST a new song with file
router.post("/", upload.single("audio"), async (req, res) => {
  const { title, artist } = req.body;
  const audioUrl = req.file ? `/uploads/${req.file.filename}` : null;

  const song = new Song({ title, artist, audioUrl });
  await song.save();
  res.status(201).json(song);
});

module.exports = router;
