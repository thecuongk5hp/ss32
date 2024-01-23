function Book(author, name) {
    this.author = author;
    this.name = name;
}
let books = [
    new Book("Author1", "Book1"),
    new Book("Author2", "Book2"),
    new Book("Author3", "Book3"),
];
let authorToSearch = prompt("Nhập tên tác giả:");
let foundBook = false;

for (let i = 0; i < books.length; i++) {
    if (books[i].author.toLowerCase() === authorToSearch.toLowerCase()) {
        console.log("Đối tượng Book tìm được:");
        console.log("Tác giả:", books[i].author);
        console.log("Tên sách:", books[i].name);
        foundBook = true;
    }
}
if (!foundBook) {
    console.log("Không tìm thấy sách.");
}
