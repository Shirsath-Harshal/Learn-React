const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const books = await Book.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } },
        { isbn: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ],
    }).sort({ createdAt: -1 });
    res.json(books);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const book = await Book.create({
      ...req.body,
      availableCopies: req.body.availableCopies ?? req.body.totalCopies,
    });
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
