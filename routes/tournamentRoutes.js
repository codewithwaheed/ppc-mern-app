const router = require("express").Router();
const Tournament = require("../models/tournamentModel");
const { adminCheck } = require("../middelwares/authCheck");
const tournamentValidations = require("../validation/tournamentValidation");
// GET route => response all the tournaments
router.get("/", (req, res) => {
  Tournament.find()
    .then((doc) => res.json(doc))
    .catch((err) => res.status(400).json({ Error: err }));
});
// GET route => response all the feature tournaments
router.get("/feature", (req, res) => {
  Tournament.find({ feature: true })
    .then((doc) => res.json(doc))
    .catch((err) => res.status(400).json({ Error: err }));
});
// GET route => response single tournament
router.get("/:id", (req, res) => {
  Tournament.findById({ _id: req.params.id })
    .then((doc) => res.json(doc))
    .catch((err) => res.status(400).json({ Error: err }));
});

// POST route=> response Create Tournament doc
router.post("/create", adminCheck, async (req, res) => {
  const {
    tournamentName,
    organizerName,
    tournamentDetail,
    feature,
    tournamentType,
    firstPrize,
    secondPrize,
    thirdPrize,
    killPrize,
    topFraggerPrize,
    regFee,
    startingDate,
    registrationEnd,
    rules,
  } = req.body;

  const { isValid, errors } = await tournamentValidations(req.body);

  if (isValid > 0) {
    return res.status(400).json(errors);
  }

  const newDoc = new Tournament({
    userId: req.user.googleId,
    tournamentStatus: "registration",
    tournamentName,
    organizerName,
    tournamentDetail,
    feature,
    tournamentType,
    firstPrize,
    secondPrize,
    thirdPrize,
    killPrize,
    topFraggerPrize,
    startingDate,
    registrationEnd,
    rules,
    regFee,
  });

  newDoc
    .save()
    .then(() => res.json("doc added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
// GET route=> response your Tournament doc
router.get("/yourTournament", adminCheck, (req, res) => {
  console.log(req.user.googleId, "working");
  Tournament.find({ userId: req.user.googleId })
    .then((doc) => res.json(doc))
    .catch((err) => {
      res.status(400).json(err);
    });
});

// DELETE route=> response delete Tournament doc
router.delete("/delete/:id", (req, res) => {
  Tournament.findByIdAndDelete({ _id: req.params.id })
    .then(res.json("successfully Deleted"))
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
