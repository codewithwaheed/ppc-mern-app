const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TournamentScheme = new Schema(
  {
    tournamentName: { type: String, required: true },
    organizerName: { type: String, required: true },
    tournamentType: {
      type: String,
      required: true,
      enum: ["squad", "duo", "solo"],
    },
    tournamentStatus: {
      type: String,
      required: true,
      enum: ["registration", "inProgress", "completed"],
      default: "registration",
    },
    userId: { type: String, required: true },
    regFee: { type: String, required: true },
    firstPrize: { type: String },
    secondPrize: { type: String },
    thirdPrize: { type: String },
    killPrize: { type: String },
    topFraggerPrize: { type: String },
    registerTeams: [{ type: String }],
    tournamentDetail: { type: String },
    maxTeam: { type: String },
    feature: { type: Boolean },
    rules: [{ type: String }],
    registrationEnd: { type: Date },
    startingDate: { type: Date },
  },
  { timestamps: true }
);

const Module = mongoose.model("tournament", TournamentScheme);

module.exports = Module;
