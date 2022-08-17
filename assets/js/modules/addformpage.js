import Page from './page.js';
import Book from './book.js';

class AddFormPage extends Page {
  constructor(section, bookscollectionpage) {
    super(section);
    this.section = section;
    this.bookscollectionpage = bookscollectionpage;
    this.section.classList.add('container');
    this.section.classList.add('books-form');
    this.section.innerHTML = `
        <div class="title">
            <h2>Add a new book</h2>
            <div class="underline"></div>
        </div>
        <form action="#">
            <ul class="form-list">
                <li class="form-item">
                    <label for="title_field" hidden>Title</label>
                    <input id="title_field" type="text" placeholder="Title" maxlength="100" required />
                </li>
                <li class="form-item">
                    <label for="author_field" hidden>Author</label>
                    <input id="author_field" type="text" placeholder="Author" maxlength="200" required />
                </li>
                <li class="form-item">
                    <button id="add_book_btn" class="normal-btn" type="submit">
                Add
            </button>
                </li>
            </ul>
        </form>`;
    this.section.querySelector('#add_book_btn').addEventListener('click', () => {
      const title = this.section.querySelector('#title_field').value;
      const author = this.section.querySelector('#author_field').value;
      if (title === '' || author === '') {
        throw new Error('Please fill in all fields');
      } else {
        const book = new Book(`"${title}"`, `by ${author}`);
        this.bookscollectionpage.add(book);

        this.section.querySelector('#title_field').value = '';
        this.section.querySelector('#author_field').value = '';
      }
    });
  }

  addBook() {
    const title = this.section.querySelector('#title_field').value;
    const author = this.section.querySelector('#author_field').value;
    if (title === '' || author === '') {
      throw new Error('Please fill in all fields');
    } else {
      const book = new Book(`"${title}"`, `by ${author}`);
      this.bookscollectionpage.add(book);
      title.value = '';
      author.value = '';
    }
  }
}

export default AddFormPage;