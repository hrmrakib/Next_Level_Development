"use strict";
{
    // 
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        set addDeposit(amount) {
            this.balance = this.balance + amount;
        }
        get getBalance() {
            return this.balance;
        }
    }
    const person1 = new BankAccount(101, "Mofiz", 4500);
    person1.addDeposit = 2000;
    console.log(person1.getBalance);
    console.log(person1.getBalance);
    // 
}
