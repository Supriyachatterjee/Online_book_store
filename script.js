// Author constructor function
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}


function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;


    this.getBookInfo = function() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author.name}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Price: ${this.price}`);
    };
}


let author1 = new Author("John doe", 1965, "British");
let author2 = new Author("R.S Aggarwal", 1903, "India");


let book1 = new Book("Abcd", author1, "Fantasy",20);
let book2 = new Book("General Aptitude", author2, "Dystopian", 15);


book1.getBookInfo();
console.log("-----------------------");
book2.getBookInfo();
