// 1.Create a Book class with:
//  - Properties: title, author, pages, isRead
//  - Method: readBook() that marks the book as read
//  - Method: getInfo() that returns a string with all book details
//  - Create 2 books and display their info

class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = "Not read";
    }

    readBook(){
        this.isRead = "Read";
    }

    getInfo(){
        console.log(`${this.title} written by ${this.author} and it has ${this.pages} pages and its ${this.isRead}`);
    }
}

let obj1 = new Book("Harry Potter and the Philosopher's Stone","J.K. Rowling",223);
let obj2 = new Book("The Hobbit","J.R.R. Tolkien",310);
let obj3 = new Book("The Hunger Games","Suzanne Collins",374);

obj1.getInfo(); // false
obj1.readBook();
obj1.getInfo(); // true

obj2.getInfo();

obj3.readBook();
obj3.getInfo();