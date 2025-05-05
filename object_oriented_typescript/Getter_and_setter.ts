{
    // 

    class BankAccount {
        id: number;
        name: string;
        balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }

        set addDeposit(amount: number)  { // function but use like property
            this.balance = this.balance + amount;
        }

        get getBalance () { // function but use like property
            return this.balance; 
        }
    }


    const person1 = new BankAccount(101, "Mofiz", 4500);

    person1.addDeposit  = 2000;

    console.log(person1.getBalance);

    console.log(person1.getBalance)




    // 
}