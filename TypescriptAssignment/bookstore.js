"use strict";
class Book {
    isbn;
    bookName;
    price;
    quantity;
    constructor(isbn, name, price, qty) {
        this.isbn = isbn;
        this.bookName = name;
        this.price = price;
        this.quantity = qty;
    }
    calculateBill() {
        return this.price * this.quantity;
    }
}
let b = new Book(1, "TS Book", 500, 2);
console.log(b.calculateBill());
