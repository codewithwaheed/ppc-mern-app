const router = require("express").Router();
let Team = require("../models/teamModel");
const teamValidations = require("../validation/teamRegisterValidation");
const { authCheck } = require("../middelwares/authCheck");

// GET All register Teams
router.route("/").get((req, res) => {
  Team.find()
    .then((doc) => res.json(doc))
    .catch((err) => res.status(400).json("Error: " + err));
});

// GET squad detail route
router.get("/squad", authCheck, (req, res) => {
  Team.findOne({ userId: req.user.googleId, teamType: "squad" })
    .then((doc) => res.json(doc))
    .catch((err) => res.status(400).json("Error: " + err));
});

// GET duo detail route
router.get("/duo", authCheck, (req, res) => {
  Team.findOne({ userId: req.user.googleId, teamType: "duo" })
    .then((doc) => res.json(doc))
    .catch((err) => res.status(400).json("Error: " + err));
});

// POST register Team
router.route("/register").post(async (req, res) => {
  const {
    userId,
    teamName,
    teamType,
    p1Name,
    p1Id,
    p2Name,
    p2Id,
    p3Name,
    p3Id,
    p4Name,
    p4Id,
    p5Name,
    p5Id,
    p6Name,
    p6Id,
  } = req.body;
  if (!userId) {
    return res.status(400);
  }

  const { isValid, errors } = await teamValidations(req.body);
  if (isValid > 0) {
    return res.status(400).json(errors);
  }

  const newDoc = new Team({
    userId,
    teamName,
    teamType,
    p1Name,
    p1Id,
    p2Name,
    p2Id,
    p3Name,
    p3Id,
    p4Name,
    p4Id,
    p5Name,
    p5Id,
    p6Name,
    p6Id,
  });

  newDoc
    .save()
    .then(() => res.json("Team added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET find team by id
router.route("/:id").get((req, res) => {
  Team.findById(req.params.id)
    .then((doc) => res.json(doc))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete team
router.route("/:id").delete((req, res) => {
  Team.findByIdAndDelete(req.params.id)
    .then(() => res.json("Team deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// UPDATE team details route
router.post("/update/:id", authCheck, (req, res) => {
  const {
    userId,
    teamName,
    p1Name,
    p1Id,
    p2Name,
    p2Id,
    p3Name,
    p3Id,
    p4Name,
    p4Id,
    p5Name,
    p5Id,
    p6Name,
    p6Id,
  } = req.body;
  if (!userId) {
    return res.status(400);
  }

  const { isValid, errors } = teamValidations(req.body);
  if (isValid > 0) {
    return res.status(400).json(errors);
  }

  Team.findById(req.params.id)
    .then((doc) => {
      doc.teamName = teamName;
      doc.p1Name = p1Name;
      doc.p2Name = p2Name;
      doc.p3Name = p3Name;
      doc.p4Name = p4Name;
      doc.p1Id = p1Id;
      doc.p2Id = p2Id;
      doc.p3Id = p3Id;
      doc.p4Id = p4Id;
      doc.p5Name = p5Name;
      doc.p6Name = p6Name;
      doc.p5Id = p5Id;
      doc.p6Id = p6Id;
      doc
        .save()
        .then(() => res.json("doc updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
