class BankAccount {
    #balance;
    constructor(balance){
        this.#balance=balance;
    }

     deposite(amount) {
        this.#balance = this.#balance + amount;
    }
    withdraw(amount){
        if(this.balance>=amount){
            this.#balance = this.#balance - amount;
        }
        else {
            console.log("insufficient balance");
        }
    }
    getBalance(){
        return this.#balance;
    }
}

let acc1 = new BankAccount(1000);
console.log("===data of acc1===");
console.log("Initial balance: "+ acc1.getBalance());
acc1.deposite(500);
console.log("Balance after deposited: "+acc1.getBalance());
acc1.withdraw(1000);
console.log("balance after withdrwan: "+ acc1.getBalance());

let acc2 = new BankAccount(2000);
console.log("===data of acc1===");
console.log("Initial balance: "+ acc2.getBalance());
acc2.deposite(500);
console.log("Balance after deposited: "+acc2.getBalance());
acc2.withdraw(3000);
console.log("balance after withdrwan: "+ acc2.getBalance());

