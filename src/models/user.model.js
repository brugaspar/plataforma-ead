const mongoose = require("mongoose");
const uuid = require("uuid");

const { Schema } = mongoose;

const UserSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v4()
  },
  name: String,
  birthday: Date,
  docType: String,
  docNumber: String,
  email: String,
  status: Number,
  password: String,
  address: {
    street: String,
    number: Number,
    neighborhood: String,
    complement: String,
    country: String,
    state: String,
    city: String,
    zipcode: String
  }
}, {
  timestamps: {}
});

module.exports = new mongoose.model("User", UserSchema);