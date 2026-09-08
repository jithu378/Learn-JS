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
        console.log(`Amount deposited : ${amount}`);
    }

    withdraw(amount){
        if(this.balance <= 0){
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
            console.log(`Amount withdrawed : ${amount}`);
        }
    }

    getBalance(){
        console.log(`${this.holderName}'s Balance : ${this.balance}`);
    }

    transfer(toAccount, amount){
        if(amount <= this.balance){
            this.balance -= amount;
            toAccount.balance += amount;
            console.log(`Amount : ${amount}, transfered to ${toAccount.holderName} - Account number : ${toAccount.accountNumber}`);
        } else {
            console.log("Insufficient balance to transfer");
        }
    }
}

let account1 = new BankAccount("AC01", "Jithu", 108700);
let account2 = new BankAccount("AC02", "Prabin", 59901);

account1.getBalance();
account1.deposit(10000);
account1.getBalance();
account1.withdraw(5000);
account1.getBalance();
account1.transfer(account2,1000);
account1.getBalance();
account2.getBalance();