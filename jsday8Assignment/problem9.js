class Product {
    constructor({ name, price, category = "General" }) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    getDetails = () => {
        console.log(`Product: ${this.name}  Price: ${this.price} Category: ${this.category}`);
    };

    cloneWithUpdates(updates) {
        return new Product({ ...this, ...updates });
    }
}

let p1 = new Product({ name: "Laptop", price: 50000 });
p1.getDetails();

let p2 = p1.cloneWithUpdates({ price: 45000, category: "Electronics" });
p2.getDetails();