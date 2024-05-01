const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  id: {
    type: "Date",
  },
  title: {
    type: "String",
  },
  type: {
    type: "String",
  },
  description: {
    type: "String",
  },
  location: {
    type: "String",
  },
  salary: {
    type: "String",
  },
  company: {
    name: {
      type: "String",
    },
    description: {
      type: "String",
    },
    contactEmail: {
      type: "String",
    },
    contactPhone: {
      type: "String",
    },
  },
});

module.exports = mongoose.model("Job", jobSchema);
