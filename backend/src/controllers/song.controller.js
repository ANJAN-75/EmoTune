const songModel = require("../models/song.model");
const { uploadFile } = require("../services/storage.services");
const id3 = require("node-id3");
const storageService = require("../services/storage.services");

async function uploadSong(req, res) {
  const songBuffer = req.file.buffer;
  const { mood } = req.body;

  const tags = id3.read(songBuffer);

  // const songFile= await storageService.uploadFile({
  //     buffer:songBuffer,
  //     filename:tags.title + ".mp3",
  //     folder:"/emotune/songs"
  // })

  // const posterFile=await storageService.uploadFile({
  //     buffer:tags.image.imageBuffer,
  //     filename:tags.title + ".jpeg",
  //     folder:"/emotune/posters"
  // })
  const [songFile, posterFile] = await Promise.all([
    uploadFile({
      buffer: songBuffer,
      filename: tags.title + ".mp3",
      folder: "/emotune/songs",
    }),
    uploadFile({
      buffer: tags.image.imageBuffer,
      filename: tags.title + ".jpeg",
      folder: "/emotune/posters",
    }),
  ]);

  const song = await songModel.create({
    title: tags.title,
    url: songFile.url,
    posterUrl: posterFile.url,
    mood,
  });

  res.status(201).json({
    message: "song created successfully",
    song,
  });
}

async function getSong(req, res) {
  const { mood } = req.query;
  console.log("recived mood" + mood);

  const song = await songModel.find({
    mood: mood.toLowerCase(),
  });

  res.status(200).json({
    message: "song fatched sucessfully",
    song,
  });
}
module.exports = { uploadSong, getSong };
