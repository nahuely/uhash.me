const mongoose = require("mongoose");
const { Schema } = mongoose;

const campaignsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  urls: [
    {
      type: Schema.Types.ObjectId,
      ref: "url"
    }
  ]
});

const Campaign = mongoose.model("campaign", campaignsSchema);

module.exports = Campaign;
