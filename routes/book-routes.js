const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controller/books-controller")

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id",booksController.getBookById);
router.put("/:id",booksController.updateBookById);
router.delete("/:id",booksController.deleteBook);


module.exports = router;
