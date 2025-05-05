{
    // 

    class BankAccount {
        readonly id: number;
        public name: string;
        // private balance: number; // only accessible in this class
        protected balance: number; // accessible in this class and also from inheitance class

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }

        addDeposit(amount: number) {
            this.balance = this.balance + amount;
        }

        public getBalance() {
            return this.balance;
        }
    }

    const abul = new BankAccount(1001, "Abul Miya", 1200);


    class StudentAccount extends BankAccount {
        constructor(id: number, name: string, balance: number){
            super(id, name, balance);
        }

        test() {
            this.balance = 0
        }
    }




    // 
}