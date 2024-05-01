const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.MONGODB_URI;

function connect() {
  mongoose
    .connect(db + "TUT1", {
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
      console.log("Database is connected");
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
    });
}

module.exports = connect;
