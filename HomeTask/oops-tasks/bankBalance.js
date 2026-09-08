class BankAccount {
    #balance;

    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.log("Deposit must be greater than 0");
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal must be greater than 0");
        } else if (amount > this.#balance) {
            console.log("Insufficient balance");
        } else {
            this.#balance -= amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount("John", 1000);

account.deposit(500);
console.log(account.getBalance());

account.withdraw(300);
console.log(account.getBalance());