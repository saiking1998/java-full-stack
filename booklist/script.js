//BOOKLIST
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI
class ui {
    static displaybooks() {
        const bookstored = storage.getbook();
        const books = bookstored;

        books.forEach((book) => ui.addbooktolist(book));
    }
    static addbooktolist(book) {
        const list = document.querySelector('#book-list')
        const row = document.createElement('tr');
        row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>

`;
        list.appendChild(row);
    }
    static deletebook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }

    }

    static alerts(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);


    }


    static cleardetails() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

//STORING

class storage {
    static getbook() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addbook(book) {
        const books = storage.getbook();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));

    }
    static removebook(isbn) {
        const books = storage.getbook();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        })

        localStorage.setItem('books', JSON.stringify(books));
    }
}


//EVENT

document.addEventListener('DOMContentLoaded', ui.displaybooks);

//EVENT TO ADD EVENT
document.querySelector('#book-form').addEventListener('submit', (e) => {

    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //checking for empty blocks
    if (title === '' || author === '' || isbn === '') {

        ui.alerts('Please enter valid details', 'danger');
        //remove alert element
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)

    } else {
        //instantiate book object
        const book = new Book(title, author, isbn);
        console.log(book);

        //adding book event listener
        ui.addbooktolist(book);
        //adding book to localStorage

        storage.addbook(book);
        ui.alerts('the book has been added', 'success');
        //remove alert element
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)


        //cclearing the boxes
        ui.cleardetails();
    }


});

//EVENT TO REMOVE book
document.querySelector('#book-list').addEventListener('click', (e) => {
    ui.deletebook(e.target)

    //remove book from localStorage
    storage.removebook(e.target.parentElement.previousElementSibling.textContent);

    ui.alerts('the book has been deleted', 'success');
    //remove alert element
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000)

});