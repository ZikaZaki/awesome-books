import AddFormPage from './addformpage.js';
import ContactPage from './contactpage.js';

export default class Navigation {
  constructor(bookscoolectionpage) {
    this.booksListPage = bookscoolectionpage;
    this.addFormPage = new AddFormPage(document.createElement('section'), this.booksListPage);
    this.contactPage = new ContactPage(document.createElement('section'));
    this.menuBtns = document.getElementsByClassName('menu-btn');
    this.mainContentDiv = document.querySelector('.main-content');
    this.animationDiv = document.querySelector('.animation');
  }

  clickMenuBtns(e) {
    if (e.target.innerText === 'BOOKS LIST') {
      this.mainContentDiv.innerHTML = '';
      this.mainContentDiv.appendChild(this.booksListPage.getHtmlElement());
      this.animationDiv.classList = 'animation start-home';
    } else if (e.target.innerText === 'ADD NEW') {
      this.mainContentDiv.innerHTML = '';
      this.mainContentDiv.appendChild(this.addFormPage.getHtmlElement());
      this.animationDiv.classList = ('animation start-form');
    } else if (e.target.innerText === 'CONTACT') {
      this.mainContentDiv.innerHTML = '';
      this.mainContentDiv.appendChild(this.contactPage.getHtmlElement());
      this.animationDiv.classList = ('animation start-contact');
    } else {
      this.animationDiv.classList = ('animation start-about');
    }
  }

  addClickEventListener() {
    for (let i = 0; i < this.menuBtns.length; i + 1) {
      this.menuBtns[i].addEventListener('click', (e) => {
        this.clickMenuBtns(e);
      });
    }
  }
}