const passport = require("passport");
const GoogleAuthStratgey = require("passport-google-oauth20");
const User = require("../models/userModel");

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((e) => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(
  new GoogleAuthStratgey(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },

    async (accessToken, refreshToken, profile, done) => {
      const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        image: profile.photos[0].value,
        email: profile.emails[0].value,
        admin: false,
        superAdmin: false,
      };

      try {
        let user = User.findOne({ googleId: profile.id }).then(
          async (currentUser) => {
            if (currentUser) {
              console.log("currentUser");

              done(null, currentUser);
            } else {
              console.log("else");
              let user = await User.create(newUser);
              done(null, user);
            }
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  )
);
