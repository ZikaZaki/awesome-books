import displayDate from './modules/date.js';
import Navigation from './modules/nav.js';
import BooksCollectionPage from './modules/bookscollectionpage.js';

/*= ====Global variables===== */
const booksListPage = new BooksCollectionPage(document.createElement('section'));
const nav = new Navigation(booksListPage);

nav.addClickEventListener();
displayDate();

window.onload = () => {
  if (localStorage.getItem('Books-List') === null) {
    localStorage.setItem('Books-List', JSON.stringify(booksListPage.bookslist));
  } else {
    JSON.parse(localStorage.getItem('Books-List')).forEach((book) => {
      booksListPage.add(book);
    });
  }
  document.getElementById('home_btn').click();
};
