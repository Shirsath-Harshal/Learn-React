const express = require("express");
const Member = require("../models/Member");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const members = await Member.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { membershipId: { $regex: search, $options: "i" } },
      ],
    }).sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const member = await Member.create(req.body);
    res.status(201).json(member);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!member) return res.status(404).json({ message: "Member not found" });
    res.json(member);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);

    if (!member) return res.status(404).json({ message: "Member not found" });
    res.json({ message: "Member deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
