module.exports = {
  authCheck: function (req, res, next) {
    if (!req.user) {
      return res.status(400).json({
        authenticated: false,
        message: "user has not been authenticated",
      });
    } else {
      next();
    }
  },
  adminCheck: function (req, res, next) {
    if (!req.user) {
      return res.status(400).json({
        authenticated: false,
        message: "user has not been authenticated",
      });
    } else if (!req.user.admin) {
      return res.status(400).json({
        authenticatedAdmin: false,
        message: "user has not been authenticated as admin",
      });
    } else {
      next();
    }
  },
};
