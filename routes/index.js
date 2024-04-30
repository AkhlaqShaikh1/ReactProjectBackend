const express = require("express");
const router = express.Router();
const Job = require("../Database/model/jobModel");

router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    console.log(jobs);
    res.json(jobs);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
