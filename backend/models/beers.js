const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  breweryName: String,
  beerName: String,
  type: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
  date: { type: Date, default: Date.now },
  user: String,
});

const beersModel = mongoose.model("Image", imageSchema, "beers");

module.exports = beersModel;
