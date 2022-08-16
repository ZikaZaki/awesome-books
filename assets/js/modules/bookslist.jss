import Book from './book.js';

class BooksList {
  constructor() {
    this.books = [];
    this.count = 0;
  }

  add(book) {
    this.books.push(book);
    this.count += 1;
  }

  getAll() {
    return this.books;
  }

  remove(book) {
    this.books = this.books.filter((b) => b.title !== book.title && b.author !== book.author);
    this.count -= 1;
  }
}

export default BooksList;