let booklist = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages + "pgs";
        this.read = read; // boolean
    }
}

booklist.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, true));
booklist.push(new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, true));
booklist.push(new Book("The Two Towers", "J.R.R. Tolkien", 352, true));
booklist.push(new Book("The Return of the King", "J.R.R. Tolkien", 416, true));
booklist.push(new Book("The Silmarillion", "J.R.R. Tolkien", 365, true));
booklist.push(new Book("The Children of Hurin", "J.R.R. Tolkien", 313, true));
booklist.push(new Book("The Fall of Gondolin", "J.R.R. Tolkien", 304, true));



const getTheTitles = function(booklist) {
    return booklist.map((Book) => Book.title);
};


const getTheAuthors = function(booklist){
    return booklist.map((Book) => Book.author);
};