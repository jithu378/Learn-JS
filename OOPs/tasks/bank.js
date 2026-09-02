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

class Bank{
    constructor(accountNumber, holderName, balance){
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }

    getBalance(){
        console.log(this.balance);
    }
}

let obj1 = new Bank(12345, "jb" ,109000);
obj1.withdraw(1000);
obj1.deposit(5000);
obj1.getBalance();