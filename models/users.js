const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const usersSchema = Schema({
  email: {
    type: String,                                                                                                               
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  campaigns: [{
    type: Schema.Types.ObjectId,
    ref: 'campaign'
  }]
});

usersSchema.pre("save", async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

usersSchema.methods.isValidPassword = async function(password) {
  const compare = await bcrypt.compare(password, this.password);
  return compare;
};

const User = mongoose.model("user", usersSchema);

module.exports = User;
