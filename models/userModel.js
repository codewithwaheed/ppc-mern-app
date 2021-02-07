const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserModel = new Schema(
  {
    googleId: { type: String, required: true },
    displayName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String },
    admin: { type: Boolean, default: false },
    superAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Module = mongoose.model("User", UserModel);

module.exports = Module;
