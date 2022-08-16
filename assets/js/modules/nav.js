// import addFormEvents from "./contactpage.js";
// import BooksCollectionPage from './bookscollectionpage.js';
import AddFormPage from "./addformpage.js";

export default class Navigation {
    constructor(bookscoolectionpage) {
      this.booksListPage = bookscoolectionpage;
      console.log(this.booksListPage.getHtmlElement());
      this.addFormPage = new AddFormPage(document.createElement('section'), this.booksListPage);
      console.log(this.addFormPage.getHtmlElement());
      this.menuBtns = document.getElementsByClassName('menu-btn');
      this.mainContentDiv = document.querySelector('.main-content');
      this.animationDiv = document.querySelector('.animation');
    }

    clickMenuBtns(e) {
        if(e.target.innerText==='BOOKS LIST'){
          this.mainContentDiv.innerHTML = '';
          this.mainContentDiv.appendChild(this.booksListPage.getHtmlElement());
          this.animationDiv.classList = 'animation start-home';
        }else if(e.target.innerText==='ADD NEW'){
          this.mainContentDiv.innerHTML = '';
          this.mainContentDiv.appendChild(this.addFormPage.getHtmlElement());
          this.animationDiv.classList=('animation start-form');
        }else if(e.target.innerText==='CONTACT'){
          this.animationDiv.classList=('animation start-contact');
        }else{
          this.animationDiv.classList=('animation start-about');
        }
    }

    addClickEventListener() {
        for (let i = 0; i < this.menuBtns.length; i++) {
            this.menuBtns[i].addEventListener('click', (e) => {
                this.clickMenuBtns(e);
            });
        }
    }
}