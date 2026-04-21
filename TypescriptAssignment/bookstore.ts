class Book {
    isbn: number;
    bookName: string;
    price: number;
    quantity: number;

    constructor(isbn: number, name: string, price: number, qty: number) {
        this.isbn = isbn;
        this.bookName = name;
        this.price = price;
        this.quantity = qty;
    }

    calculateBill(): number {
        return this.price * this.quantity;
    }
}

let b = new Book(1, "TS Book", 500, 2);
console.log(b.calculateBill());