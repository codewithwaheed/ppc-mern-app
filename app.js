const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const passport = require("passport");
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");

// Load Config File
dotenv.config({ path: "./config/config.env" });

// Load passport auth Stratgey
require("./config/passport");

// Initializing experess app
const app = express();

// Connect DB fun
connectDB();

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Creating express Session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//Passport Middelware
app.use(passport.initialize());

// deserialize cookie from the browser
app.use(passport.session());

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: process.env.CLIENT_URL, // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);

// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/api/team", require("./routes/teamRoutes"));
app.use("/api/tournament", require("./routes/tournamentRoutes"));

// PORT
const PORT = process.env.PORT || 5000;

// Starting Server
app.listen(
  PORT,
  console.log(
    `Server is Running as ${process.env.NODE_ENV} mode on the ${PORT} port`
  )
);
