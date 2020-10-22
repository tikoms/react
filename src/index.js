class Film {
    constructor(id, title, director, releaseYear, genres = []) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this.genres = genres;
    }

    addGenre(genre) {
        this.genres = [...this.genres, genre];
    }

    getFilmTitle() {
        return `Title: ${this.title}`;
    }
}

const film1 = new Film(
    1,
    "Once upon a time in America",
    "Quentin Tarantino",
    1999,
);

film1.addGenre("Thriller");

console.log(film1);
console.log(film1.getFilmTitle());