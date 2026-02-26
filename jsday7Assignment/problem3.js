let cart = [
{ id: 1, product: "Laptop", price: 60000, qty: 1 },
{ id: 2, product: "Headphones", price: 2000, qty: 2 },
{ id: 3, product: "Mouse", price: 800, qty: 1 }
];

// 1. Calculate total cart value
let total = 0;
cart.forEach(function(item){
  total = total + (item.price * item.qty);
});
console.log(total);

// 2. Increase quantity of a product
let increasedQty = cart.map(function(item){
  if(item.id === 2){
    return { id: item.id, product: item.product, price: item.price, qty: item.qty + 1 };
  } else {
    return item;
  }
});
console.log(increasedQty);

// 3. Remove product from cart
let newCart = cart.filter(function(item){
  return item.id !== 3;
});
console.log(newCart);

// 4. Apply 10% discount on items above ₹10,000
let discountCart = cart.map(function(item){
  if(item.price > 10000){
    return { id: item.id, product: item.product, price: item.price - (item.price * 0.10), qty: item.qty };
  } else {
    return item;
  }
});
console.log(discountCart);

// 5. Sort cart by total item price
let sortedCart = cart.sort(function(a, b){
  return (a.price * a.qty) - (b.price * b.qty);
});
console.log(sortedCart);

// 6. Check if any product costs more than ₹50,000
let checkCost = cart.some(function(item){
  return item.price > 50000;
});
console.log(checkCost);

// 7. Check if all items are in stock 
let checkStock = cart.every(function(item){
  return item.qty > 0;
});
console.log(checkStock);


// Convert cart into invoice format
let invoice = "";
cart.forEach(function(item){
  invoice += item.product + " x" + item.qty + " = ₹" + (item.price * item.qty) + "\n";
});
console.log(invoice);

// Find most expensive product
let expensive = cart[0];
cart.forEach(function(item){
  if(item.price > expensive.price){
    expensive = item;
  }
});
console.log(expensive);

// Calculate GST (18%) on total
let gst = total * 0.18;
console.log(gst);