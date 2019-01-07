const mongoose = require("mongoose");
const statsSchema = require("./stats");
const validUrl = require("valid-url");
const { Schema } = mongoose;

const urlsSchema = new Schema(
  {
    originalURL: {
      type: String,
      required: [true, "url is required."],
      validate: {
        validator: url => validUrl.isUri(url) || false,
        message: "must be a valid url"
      }
    },
    hash: String,
    views: [statsSchema]
  },
  { timestamps: true }
);

urlsSchema.index(
  {
    hash: 1
  },
  { unique: true }
);

const URL = mongoose.model("url", urlsSchema);

module.exports = URL;
