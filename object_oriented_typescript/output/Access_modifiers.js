"use strict";
{
    // 
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        addDeposit(amount) {
            this.balance = this.balance + amount;
        }
        getBalance() {
            return this.balance;
        }
    }
    const abul = new BankAccount(1001, "Abul Miya", 1200);
    class StudentAccount extends BankAccount {
        constructor(id, name, balance) {
            super(id, name, balance);
        }
        test() {
            this.balance = 0;
        }
    }
    // 
}
