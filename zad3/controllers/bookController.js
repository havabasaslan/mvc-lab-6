
const Book = require('../models/Book');
const User = require('../models/User');

const getBookDetails = (req, res) => {
  const userId = req.session.userId;
  const bookId = req.params.id;
  const book = Book.getBookById(bookId);
  const didUserBorrowTheBook = User.findBorrowedBookById(userId, bookId);
  res.render('book-details', { title: 'Book Details', book, didUserBorrowTheBook });
};

const postBookBorrow = (req, res) => {
  const userId = req.session.userId;
  const bookId = req.params.id;
  const book = Book.getBookById(bookId);
  if (book.available && User.isUserExist(userId)) {
    Book.borrow(bookId);
    User.borrowBook(userId, book);
    res.redirect('/books/borrow/success');
  } else {
    res.redirect('/');
  }
};

const postBookReturn = (req, res) => {
  const userId = req.session.userId;
  const bookId = req.params.id;
  const book = Book.getBookById(bookId);
  if (!book.available && User.isUserExist(userId)) {
    Book.return(bookId);
    User.returnBook(userId, bookId);
    res.redirect('/books/return/success');
  } else {
    res.redirect('/');
  }
};

const getBookBorrowSuccess = (req, res) => {
  res.render('success', { title: 'Success', message: 'Book borrowed successfully' });
};

const getBookReturnSuccess = (req, res) => {
  res.render('success', { title: 'Success', message: 'Book returned successfully' });
};

module.exports = {
  getBookDetails,
  postBookBorrow,
  postBookReturn,
  getBookBorrowSuccess,
  getBookReturnSuccess
};
