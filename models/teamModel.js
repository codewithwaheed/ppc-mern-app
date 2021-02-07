const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamModel = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    teamName: { type: String, required: true },
    teamType: { type: String, required: true, enum: ["squad", "duo"] },
    p1Name: { type: String, required: true },
    p1Id: { type: String, required: true },
    p2Name: { type: String, required: true },
    p2Id: { type: String, required: true },
    p3Name: { type: String },
    p3Id: { type: String },
    p4Name: { type: String },
    p4Id: { type: String },
    p5Name: { type: String },
    p5Id: { type: String },
    p6Name: { type: String },
    p6Id: { type: String },
  },
  {
    timestamps: true,
  }
);

const Module = mongoose.model("team", teamModel);

module.exports = Module;
