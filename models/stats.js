const mongoose = require("mongoose");
const { Schema } = mongoose;

const statsSchema = new Schema(
  {
    referer: String,
    browser: Object
  },
  { timestamps: true }
);

module.exports = statsSchema;
