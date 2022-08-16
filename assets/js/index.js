import displayDate from './modules/date.js';
import Navigation from './modules/nav.js';
// import pages from './modules/page.js';
import BooksCollectionPage from './modules/bookscollectionpage.js';

import Book from './modules/book.js';
// import BooksList from './modules/bookslist.jss';

/*= ====Global variables===== */
const booksListPage = new BooksCollectionPage(document.createElement('section'));

const nav = new Navigation(booksListPage);
nav.addClickEventListener();
displayDate();

window.onload = () => {
  document.getElementById('home_btn').click();
  // mainContentDiv.innerHTML = pages.booksCollection;
  // populateBooksList(booksList);
};