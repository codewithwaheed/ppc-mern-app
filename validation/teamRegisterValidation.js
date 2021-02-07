const Validator = require("validator");
const Team = require("../models/teamModel");
// const lengthCheck = function (inputName, min, max, errorMessage) {
//   if (!Validator.isLength(inputName, { min, max })) return errorMessage;
// };

const teamValidation = async (data) => {
  const {
    userId,
    teamType,
    teamName,
    p1Name,
    p2Name,
    p3Name,
    p4Name,
    p5Name,
    p6Name,
    p1Id,
    p2Id,
    p3Id,
    p4Id,
    p5Id,
    p6Id,
  } = data;

  let errors = {};

  //  check if team already created
  let team;
  try {
    team = await Team.findOne({ userId: userId, teamType: teamType });
  } catch (error) {}
  if (team) {
    errors.teamExist = `You Already have Created Team in ${teamType} `;

    return {
      errors,
      isValid: 1,
    };
  }

  if (!Validator.isNumeric(p1Id))
    errors.p1Id = "Player Charchter ID is incorrect";
  if (!Validator.isNumeric(p2Id))
    errors.p2Id = "Player Charchter ID is incorrect";
  // Validations
  if (Validator.isEmpty(teamName)) errors.teamName = "Team Name is required";
  if (Validator.isEmpty(p1Name)) errors.p1Name = "Player 1 Name is required";
  if (Validator.isEmpty(p2Name)) errors.p2Name = "Player 2 Name is required";
  if (Validator.isEmpty(p1Id)) errors.p1Id = "Player Character id is required";
  if (Validator.isEmpty(p2Id)) errors.p2Id = "Player Character id is required";

  // P3 and P4 validations
  if (teamType === "squad") {
    if (!Validator.isNumeric(p3Id))
      errors.p3Id = "Player Charchter ID is incorrect";

    if (Validator.isEmpty(p3Name)) errors.p3Name = "Player 3 Name is required";

    if (Validator.isEmpty(p3Id))
      errors.p3Id = "Player Character id is required";
    if (Validator.isEmpty(p4Name)) errors.p4Name = "Player 4 Name is required";
    if (!Validator.isNumeric(p4Id))
      errors.p4Id = "Player Charchter ID is incorrect";
    if (Validator.isEmpty(p4Id))
      errors.p4Id = "Player Character id is required";
  }

  if (p5Id || p5Name) {
    // P5 validations
    if (!Validator.isNumeric(p5Id))
      errors.p5Id = "Player Charchter ID is incorrect";

    if (Validator.isEmpty(p5Name)) errors.p5Name = "Player 5 Name is required";
    if (Validator.isEmpty(p5Id))
      errors.p5Id = "Player Character id is required";
  }
  // P6 validations
  if (p6Id || p6Name) {
    if (!Validator.isNumeric(p6Id))
      errors.p6Id = "Player Charchter ID is incorrect";
    if (Validator.isEmpty(p6Name)) errors.p6Name = "Player 6 Name is required";
    if (Validator.isEmpty(p6Id))
      errors.p6Id = "Player Character id is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length,
  };
};
module.exports = teamValidation;
