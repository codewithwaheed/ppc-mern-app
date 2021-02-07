const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`mongoDB connected ${(await conn).connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
