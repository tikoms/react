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