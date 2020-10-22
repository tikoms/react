/*
function Book(id, title, author, themes = []) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.themes = themes;
}

const book1 = new Book(1, "Passport of Malam Ilia", "Chinua Achebe");
const book2 = new Book(2, "Things fall apart", "Chinua Achebe");

Book.prototype.addTheme = function(theme) {
    this.themes = [...this.themes, theme];
};

book1.addTheme("La Isla Bonita");
book2.addTheme("Senzana Donner");


console.log(book1);
console.log(book2);


console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf({}).constructor);

console.log(Object.getPrototypeOf(book1));
console.log(book1.__proto__);
console.log(Object.getPrototypeOf(book1).constructor);

console.log(Object.getPrototypeOf(book2));
console.log(book2.__proto__);
console.log(book2.__proto__ === Book.prototype);
console.log(book2.__proto__.__proto__ === Object.prototype);
console.log(Object.getPrototypeOf(book2).constructor);

console.log(new Object());
*/

/*
function Book(id, title, author, themes = []) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.themes = themes;
}
*/

class Book {
    constructor(id, title, author, themes = []) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.themes = themes;
    }

    getBookName() {
        return `Book: ${this.title}`;
    }

    addTheme() {}
}

console.log(Book.prototype.addTheme);

const book1 = new Book(1, "The Bourne Identity", "Steven Spielberg");
console.log(book1);
console.log(book1.author);
console.log(book1.title);
console.log(book1.id);
console.log(book1.getBookName());

// console.log(typeof class Book {});