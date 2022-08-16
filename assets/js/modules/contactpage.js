function addFormEvents(){
    const addBookBtn = document.querySelector('#add_book_btn');
    addBookBtn.addEventListener('click', () => {
        let title = document.querySelector('#title_field').value;
        let author = document.querySelector('#author_field').value;
        if (title === '' || author === '') {
          throw new Error('Please fill in all fields');
        }else{
          title = `"${title}"`;
          author = `by ${author}`;
          const book = new Book(title, author);
          booksList.add(book);
          // renderBook(book);
          localStorage.setItem('Books-List', JSON.stringify(booksList.books));
          document.querySelector('#title_field').value = '';
          document.querySelector('#author_field').value = '';
        }
    });
}

export default addFormEvents;