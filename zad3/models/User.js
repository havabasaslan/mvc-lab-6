class User {
    constructor(id, login, borrowedBooks = []) {
      this.id = id;
      this.login = login;
      this.borrowedBooks = borrowedBooks;
    }
  
    static getAll() {
      return [
        new User(1, 'user1'),
        new User(2, 'user2'),
        new User(3, 'user3'),
        new User(4, 'user4'),
        new User(5, 'user5')
      ];
    }
  
    static isUserExist(userId) {
      // Assume implementation to check if user exists
      return true;
    }
  
    static borrowBook(userId, book) {
      // Assume implementation to borrow book for user
      console.log(`Book borrowed for user with ID ${userId}: ${book.title}`);
    }
  
    static returnBook(userId, bookId) {
      // Assume implementation to return book for user
      console.log(`Book returned for user with ID ${userId}: ${bookId}`);
    }
  
    static findBorrowedBookById(userId, bookId) {
      // Assume implementation to find if book is borrowed by user
      return true;
    }
  }
  
  module.exports = User;
  