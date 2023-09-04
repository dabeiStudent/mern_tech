const Book = require('../models/Book');

const book1 = new Book({
    title: "Sach thu 1",
    isbn: "100000",
    author: "Duy Lan"
})
book1.save();
const book2 = new Book({
    title: "Sach thu 2",
    isbn: "121000",
    author: "Vinh Thien"
})
book2.save();
const book3 = new Book({
    title: "Sach thu 3",
    isbn: "700000",
    author: "Quang Duong"
})
book3.save();
const book4 = new Book({
    title: "Sach thu 4",
    isbn: "3700000",
    author: "Duy Nguyen"
})
book4.save();


module.export = seedbooks = { book1, book2, book3, book4 };