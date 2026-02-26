class BankAccount {

    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited: " + amount);
        console.log("Balance: " + this.balance);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
            console.log("Withdrawn: " + amount);
            console.log("Balance: " + this.balance);
        }
    }

    checkBalance() {
        console.log("Current Balance: " + this.balance);
    }
}

let acc1 = new BankAccount("Raja", 8000);

acc1.deposit(1000);     
acc1.withdraw(2000);    
acc1.withdraw(5000);    
acc1.checkBalance();