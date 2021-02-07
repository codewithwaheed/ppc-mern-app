const express = require("express");
const passport = require("passport");
const { authCheck, adminCheck } = require("../middelwares/authCheck");
const router = express.Router();

// @des "/" auth with google
// @route GET route
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// @des "/" call back from google
// @route GET route
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/auth/login/failed",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
  }
);

// Login Faild Route
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate.",
  });
});

// Logout Route
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

//Login Success
router.get("/login/success", authCheck, (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies,
    });
  }
});
router.get("/admin/success", adminCheck, (req, res) => {
  res.status(200).json({
    admin: true,
  });
});
module.exports = router;
