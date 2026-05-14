const express = require("express");
const Book = require("../models/Book");
const Transaction = require("../models/Transaction");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const transactions = await Transaction.find()
      .populate("book", "title author isbn")
      .populate("member", "name membershipId")
      .sort({ createdAt: -1 });
    res.json(transactions);
  } catch (error) {
    next(error);
  }
});

router.post("/issue", async (req, res, next) => {
  try {
    const { bookId, memberId, dueDate } = req.body;
    const book = await Book.findById(bookId);

    if (!book) return res.status(404).json({ message: "Book not found" });
    if (book.availableCopies < 1) {
      return res.status(400).json({ message: "No copies available for this book" });
    }

    book.availableCopies -= 1;
    await book.save();

    const transaction = await Transaction.create({
      book: bookId,
      member: memberId,
      dueDate,
    });

    const populated = await transaction.populate([
      { path: "book", select: "title author isbn" },
      { path: "member", select: "name membershipId" },
    ]);

    res.status(201).json(populated);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id/return", async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) return res.status(404).json({ message: "Transaction not found" });
    if (transaction.status === "Returned") {
      return res.status(400).json({ message: "Book already returned" });
    }

    transaction.status = "Returned";
    transaction.returnDate = new Date();
    await transaction.save();

    await Book.findByIdAndUpdate(transaction.book, { $inc: { availableCopies: 1 } });

    const populated = await transaction.populate([
      { path: "book", select: "title author isbn" },
      { path: "member", select: "name membershipId" },
    ]);

    res.json(populated);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
