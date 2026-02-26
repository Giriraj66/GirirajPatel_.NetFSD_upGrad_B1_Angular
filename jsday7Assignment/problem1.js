let books = [
{ id: 1, title: "JavaScript Basics", price: 450, stock: 10 },
{ id: 2, title: "React Guide", price: 650, stock: 5 },
{ id: 3, title: "Node.js Mastery", price: 550, stock: 8 },
{ id: 4, title: "CSS Complete", price: 300, stock: 12 }
];

// 1. Display all book titles.
let titles = books.map(book => book.title);
console.log(titles);

// 2. Find total inventory value.
let totalValue = books.reduce((total, book) => total + (book.price * book.stock), 0);
console.log(totalValue);

// 3. Find books costing above ₹500.
let above500 = books.filter(book => book.price > 500);
console.log(above500);

// 4. Increase price of all books by 5%.
let increasedPrice = books.map(book => ({
  ...book,
  price: book.price * 1.05
}));
console.log(increasedPrice);

// 5. Sort books by price (low → high).
let sortedBooks = [...books].sort((a, b) => a.price - b.price);
console.log(sortedBooks);

// 6. Remove a book by ID.
let removeId = 2;
let updatedBooks = books.filter(book => book.id !== removeId);
console.log(updatedBooks);

// 7. Check if any book is out of stock.
let outOfStock = books.some(book => book.stock === 0);
console.log(outOfStock);