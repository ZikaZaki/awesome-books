import Page from './page.js';
import Book from './book.js';

class BooksCollectionPage extends Page {
  constructor(section) {
    super(section);
    this.section = section;
    this.section.classList.add('container');
    this.section.classList.add('books-collection');
    this.section.innerHTML = `
            <div class="title">
                <h1>Awesome Books</h1>
                <div class="underline"></div>
            </div>
            <div id="books_list" class="books-list">
                <!-- Books object will be generated using JavaScript -->
            </div>`;
    this.bookslist = [];
    this.count = 0;
  }

  add(book) {
    this.bookslist.push(book);
    this.count += 1;
    this.renderBook(book);
    localStorage.setItem('Books-List', JSON.stringify(this.bookslist));
  }

  deleteBook(e) {
    // get the book element to be removed
    const book = new Book(
      e.target.parentNode.parentNode.querySelector('.book-title h2').innerText,
      e.target.parentNode.parentNode.querySelector('.book-author h3').innerText,
    );
    // Remove book from the list
    const list = this.bookslist.filter((b) => (b.title !== book.title && b.author !== book.author));
    this.bookslist = list;
    this.count -= 1;
    // Reset Local Storage
    localStorage.setItem('Books-List', JSON.stringify(this.bookslist));
    e.target.parentNode.parentNode.remove();
  }

  renderBook(book) {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-item');
    bookElement.innerHTML = `
              <div class="book-info">
                <div class="book-title">
                    <h2>${book.title}</h2>
                </div>
                <div class="book-author">
                    <h3>${book.author}</h3>
                </div>
              </div>  
              <div class="remove-btn">
                  <button id="remove_book_btn" class="normal-btn" type="button">Remove</button>
              </div>
          `;
    // Set the event listener for the remove button
    bookElement.querySelector('#remove_book_btn').addEventListener('click', (e) => {
      this.deleteBook(e);
    });
    this.section.querySelector('.books-list').appendChild(bookElement);
  }
}

export default BooksCollectionPage;