const Validator = require("validator");
const lengthCheck = function (inputName, min, max, errorMessage) {
  if (!Validator.isLength(inputName, { min, max })) return errorMessage;
};

const teamValidation = async (data) => {
  const {
    tournamentName,
    organizerName,
    tournamentDetail,
    tournamentType,
    firstPrize,
    secondPrize,
    thirdPrize,
    killPrize,
    topFraggerPrize,
    regFee,
    rules,
  } = data;

  let errors = {};

  //  check numeric Value

  if (!Validator.isNumeric(firstPrize))
    errors.firstPrize = "First Prize Must be Number";
  if (!Validator.isNumeric(secondPrize))
    errors.secondPrize = "Second Prize Must be Number";
  if (!Validator.isNumeric(thirdPrize))
    errors.thirdPrize = "Third Prize Must be Number";
  if (!Validator.isNumeric(regFee))
    errors.regFee = "Registration Fee Must be Number";
  if (!Validator.isLength(tournamentDetail, { min: 30, max: 3000 })) {
    errors.tournamentDetail = "Tournament Detail Must be Up to 30 Charachter";
  }
  // Validations
  if (Validator.isEmpty(tournamentName))
    errors.tournamentName = "Tournament Name is required";
  if (Validator.isEmpty(organizerName))
    errors.organizerName = "Orgnizer Name is required";
  if (Validator.isEmpty(tournamentType))
    errors.tournamentType = "Tournament type is required";
  if (Validator.isEmpty(tournamentDetail))
    errors.tournamentDetail = "Tournament Detail is required";
  if (Validator.isEmpty(regFee)) errors.regFee = "Registration Fee is required";
  if (Validator.isEmpty(firstPrize))
    errors.firstPrize = "First Prize is required";
  if (Validator.isEmpty(secondPrize))
    errors.secondPrize = "Second Prize is required";
  if (Validator.isEmpty(thirdPrize))
    errors.thirdPrize = "Third Prize is required";

  // kill Prize validations
  if (killPrize) {
    if (!Validator.isNumeric(killPrize))
      errors.killPrize = "Kill Prize is must be number";

    if (Validator.isEmpty(killPrize))
      errors.killPrize = "Kill Prize is required";
  }
  // kill Prize validations
  if (topFraggerPrize) {
    if (!Validator.isNumeric(topFraggerPrize))
      errors.topFraggerPrize = "Top Fragger Prize must be number";

    if (Validator.isEmpty(topFraggerPrize))
      errors.topFraggerPrize = "Top Fragger Prize is required";
  }
  if (rules) {
    if (!rules.length > 0) {
      errors.rules = "Atleast one Rule is required";
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length,
  };
};
module.exports = teamValidation;
