class Wallet {

    #balance;  

    constructor(initialAmount = 0) {
        this.#balance = initialAmount;
    }
    addMoney(amount) {
        this.#balance += amount;
        console.log("Added:", amount);
    }
    spendMoney(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient balance");
        } else {
            this.#balance -= amount;
            console.log("Spent:", amount);
        }
    }

    getBalance() {
        return this.#balance;
    }
}
let w1 = new Wallet(1000);
w1.addMoney(500);
w1.spendMoney(300);
console.log("Balance:", w1.getBalance());
