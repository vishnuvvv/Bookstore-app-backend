const Book = require("../model/Book");

//Read from the server
const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ books });
};

//getbyid get each by id
const getBookById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(404).json({ message: "No book found" });
  } else {
    return res.status(200).json({ book });
  }
};

const updateBookById = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available,image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image
    });
    book = await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ message: "unable to update" });
  } else {
    return res.status(200).json({ book });
  }
};

//send objects into the server
const addBook = async (req, res, body) => {
  let book;
  try {
    book = new Book({
      name: req.body.name,
      author: req.body.author,
      description: req.body.description,
      price: req.body.price,
      available: req.body.available,
      image:req.body.image
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({
      message: "Unable to add book !!!",
    });
  }
  return res.status(201).json({ book });
};

//Delete items from the data base
const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(404).json({ message: "unable  to delete by using id" });
  }
  return res.status(202).json({ message: "Product successfully deleted" });
};

exports.addBook = addBook;
exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.updateBookById = updateBookById;
exports.deleteBook = deleteBook;
