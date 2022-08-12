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

/*= ====Global variables===== */
const booksList = new BooksList();
const addBookBtn = document.querySelector('#add_book_btn');

/*
function deleteBook(e):-
removes the book element from the list
as well as from local storage
*/
function deleteBook(e) {
  // get the book element to be removed
  const book = new Book(
    e.target.parentNode.parentNode.querySelector('.book-title h2').innerText,
    e.target.parentNode.parentNode.querySelector('.book-author h3').innerText,
  );
  // Remove book from the list
  booksList.remove(book);
  // Reset Local Storage
  localStorage.setItem('Books-List', JSON.stringify(booksList.books));
  e.target.parentNode.parentNode.remove();
}

/*
function renderBook():-
creates the book element
and appends it to the list
*/
function renderBook(book) {
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
    deleteBook(e);
  });
  document.querySelector('.books-list').appendChild(bookElement);
}

// Add Button click event listener
addBookBtn.addEventListener('click', () => {
  const title = document.querySelector('#title_field').value;
  const author = document.querySelector('#author_field').value;
  if (title === '' || author === '') {
    throw new Error('Please fill in all fields');
  }
  const book = new Book(title, author);
  booksList.add(book);
  renderBook(book);
  localStorage.setItem('Books-List', JSON.stringify(booksList.books));
  document.querySelector('#title_field').value = '';
  document.querySelector('#author_field').value = '';
});

window.onload = () => {
  if (localStorage.getItem('Books-List') === null) {
    localStorage.setItem('Books-List', JSON.stringify(booksList.books));
  } else {
    JSON.parse(localStorage.getItem('Books-List')).forEach((book) => {
      booksList.add(book);
      renderBook(book);
    });
  }
};