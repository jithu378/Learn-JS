// 2.Create a BankAccount class with:
//  - Properties: accountNumber, holderName, balance
//  - Method: deposit(amount) - adds to balance
//  - Method: withdraw(amount) - subtracts from balance (can't go negative)
//  - Method: getBalance() - returns current balance
//  - Method: transfer(toAccount, amount) - transfers money to another account

//  Write code to demonstrate:
//  1. Creating two accounts
//  2. Depositing money in first account
//  3. Transferring money to second account
//  4. Displaying both balances

class BankAccount{
    constructor(accountNumber, holderName, balance){
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        if(this.balance <= 0){
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
        }
    }

    getBalance(){
        console.log(this.balance);
    }

    transfer(toAccount, amount){
        if(amount <= this.balance){
            this.balance -= amount;
            toAccount.balance += amount;
        } else {
            console.log("Insufficient balance to transfer");
        }
    }
}

let account1 = new BankAccount("A101", "Jithu", 1000);
let account2 = new BankAccount("A102", "Prabin", 500);

account1.deposit(200);

console.log("Jithu:", account1.getBalance());

account1.transfer(account2, 300);

console.log("Jithu:", account1.getBalance());
console.log("Jane:", account2.getBalance());