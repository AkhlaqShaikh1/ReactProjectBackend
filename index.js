const express = require("express");
const router = express.Router();
const Job = require("./Database/model/jobModel");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.json({ message: error });
  }
});

router.put("/jobs/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).send("Job not found");
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete("/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      console.log("Job not found");
      return res.status(404).json({ message: "Job not found" });
    }
    await job.deleteOne();
    res.status(200).json({ message: `Job deleted with ${req.params.id}` });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/add-job", async (req, res) => {
  const job = new Job({
    title: req.body.title,
    type: req.body.type,
    description: req.body.description,
    location: req.body.location,
    salary: req.body.salary,
    company: {
      name: req.body.company.name,
      description: req.body.company.description,
      contactEmail: req.body.company.contactEmail,
      contactPhone: req.body.company.contactPhone,
    },
  });

  try {
    const savedJob = await job.save();
    res.json(savedJob);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
