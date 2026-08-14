let bankAccount = {
    accountHolder : "Jithu Biju",
    balance : 756900,

    deposit : function(amount){
        this.balance += amount;
        console.log(`${amount} credited to your bank account`);
    },

    withdraw : function(amount){
        this.balance -= amount;
        console.log(`${amount} debited from your bank account`);
    },

    checkBalance : function(){
        console.log(`Current account balance : ${this.balance}`);
    }
}

let dep = 125000; // amount deposited
let draw = 25000; // amount withdrawed
bankAccount.deposit(dep);
bankAccount.checkBalance();

console.log("");

bankAccount.withdraw(draw);
bankAccount.checkBalance();
