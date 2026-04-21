"use strict";
class BankAccount {
    name;
    accNo;
    accType;
    balance;
    constructor(name, accNo, accType, balance) {
        this.name = name;
        this.accNo = accNo;
        this.accType = accType;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    display() {
        console.log("Name:", this.name);
        console.log("Balance:", this.balance);
    }
}
let acc = new BankAccount("Giriraj", 12345, "Savings", 1000);
acc.deposit(500);
acc.withdraw(300);
acc.display();
