class BankAccount {
    name: string;
    accNo: number;
    accType: string;
    balance: number;

    constructor(name: string, accNo: number, accType: string, balance: number) {
        this.name = name;
        this.accNo = accNo;
        this.accType = accType;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log("Deposited:", amount);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Balance:", this.balance);
    }
}

let acc = new BankAccount("Giriraj", 12345, "Savings", 1000);
acc.deposit(500);
acc.withdraw(300);
acc.display();