class Page{
    constructor(htmlElement){
        this.htmlElement = htmlElement;
    }

    getHtmlElement(){
        return this.htmlElement;
    }
}

export default Page;


// const pages = {
//   booksCollection: `
//     <section class="container books-collection">
//         <div class="title">
//             <h1>Awesome Books</h1>
//             <div class="underline"></div>
//         </div>
//         <div id="books_list" class="books-list">
//             <!-- Books object will be generated using JavaScript -->
//         </div>
//     </section>`,
//   booksForm: `
//     <section class="container books-form">
//         <div class="title">
//             <h2>Add a new book</h2>
//             <div class="underline"></div>
//         </div>
//         <form action="#">
//             <ul class="form-list">
//                 <li class="form-item">
//                     <label for="title_field" hidden>Title</label>
//                     <input id="title_field" type="text" placeholder="Title" maxlength="100" required />
//                 </li>
//                 <li class="form-item">
//                     <label for="author_field" hidden>Author</label>
//                     <input id="author_field" type="text" placeholder="Author" maxlength="200" required />
//                 </li>
//                 <li class="form-item">
//                     <button id="add_book_btn" class="normal-btn" type="submit">
//                 Add
//             </button>
//                 </li>
//             </ul>
//         </form>
//     </section>`,
// };

// export default pages;
