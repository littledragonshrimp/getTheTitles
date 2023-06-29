let booklist = [];

class book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages + "pgs";
        this.read = read; // boolean
    }
}

booklist.push(new book("The Hobbit", "J.R.R. Tolkien", 295, true));
booklist.push(new book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, true));
booklist.push(new book("The Two Towers", "J.R.R. Tolkien", 352, true));
booklist.push(new book("The Return of the King", "J.R.R. Tolkien", 416, true));
booklist.push(new book("The Silmarillion", "J.R.R. Tolkien", 365, true));
booklist.push(new book("The Children of Hurin", "J.R.R. Tolkien", 313, true));
booklist.push(new book("The Fall of Gondolin", "J.R.R. Tolkien", 304, true));



const getTheTitles = function(bookList) {
    return booklist.map((book) => book.title);
};


