const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.MONGO_DB_URL;

function connect() {
  mongoose
    .connect(db + "TUT1", {
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
      console.log("server is connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connect;
