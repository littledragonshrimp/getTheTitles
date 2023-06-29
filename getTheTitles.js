
class Book {
    constructor(title, author, pages, isRead) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.isRead = isRead; // boolean
    }
  }
  
  class BookList {
    constructor(booklist) {
      this.booklist = booklist;
    }
  
    addBook(book) {
      if (book instanceof Book) {
        if (!this.booklist.includes(book)) {
          this.booklist.push(book);
        }
      }
    }
  
    removeBook(name) {
      this.booklist.forEach((book) => {
          if (book.title === name) {
              this.booklist.splice(this.booklist.indexOf(book), 1);
          }
          }
      );
    }
  
    hasBook(name) {
      this.booklist.forEach((book) => {
        if (book.title === name) {
          return true;
        }
      });
      return false;
    }
  
    listBooks() {
      this.booklist.forEach((book) => {
        console.log(book.title);
      });
    }
  
    listBooksByAuthor() {
      this.booklist.forEach((book) => {
        console.log(book.author);
      });
    }
  
    listBooksByPageCount() {
      const sorted = this.booklist.sort((a, b) => a.pages - b.pages);
      sorted.forEach((book) => {
        console.log(`${book.title}: (${book.pages}pgs)`);
      });
    }
  }
  
  
  // Test
  
  const booklist = new BookList([]);
  
  booklist.addBook(new Book("The Hobbit", "J.R.R. Tolkien", 295, true));
  booklist.addBook(
    new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, true)
  );
  booklist.addBook(new Book("The Two Towers", "J.R.R. Tolkien", 352, true));
  booklist.addBook(
    new Book("The Return of the King", "J.R.R. Tolkien", 416, true)
  );
  booklist.addBook(new Book("The Silmarillion", "J.R.R. Tolkien", 365, true));
  booklist.addBook(
    new Book("The Children of Hurin", "J.R.R. Tolkien", 313, true)
  );
  booklist.addBook(new Book("The Fall of Gondolin", "J.R.R. Tolkien", 304, true));
  
  const getTheTitles = function () {
    return booklist.listBooks();
  };