// Global variables
const booksList = [];
const addBookBtn = document.querySelector('#add_book_btn');
// let removeBookBtn;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

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
  // remove the book element from the list
  let index= booksList.findIndex((object) => object.title === book.title && object.author === book.author)
  booksList.splice(index, 1);
  localStorage.setItem('Books-List', JSON.stringify(booksList));
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
        <div class="book-title">
            <h2>${book.title}</h2>
        </div>
        <div class="book-author">
            <h3>${book.author}</h3>
        </div>
        <div class="remove-btn">
            <button id="remove_book_btn" type="button">Remove</button>
        </div>
    `;
  bookElement.querySelector('#remove_book_btn').addEventListener('click', (e) => {
    deleteBook(e);
  });
  document.querySelector('.books-list').appendChild(bookElement);
}

addBookBtn.addEventListener('click', () => {
  const title = document.querySelector('#title_field').value;
  const author = document.querySelector('#author_field').value;
  if (title === '' || author === '') {
    throw new Error('Please fill in all fields');
  }
  const book = new Book(title, author);
  booksList.push(book);
  renderBook(book);
  localStorage.setItem('Books-List', JSON.stringify(booksList));
});

window.onload = () => {
  if (localStorage.getItem('Books-List') === null) {
    localStorage.setItem('Books-List', JSON.stringify([]));
  } else {
    const localBooks = JSON.parse(localStorage.getItem('Books-List'));
    localBooks.forEach((book) => {
      booksList.push(new Book(book.title, book.author));
    });

    booksList.forEach((book) => {
      renderBook(book);
    });
  }
};