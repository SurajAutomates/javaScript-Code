class Payment {
    pay(){
        console.log("processing payment.......");
    }
}
class UPI extends Payment {
    pay(){
        console.log("payment done using UPI");
    }
}
class CrerditCard extends Payment {
    pay(){
        console.log("payment done using CreditCard");
    }
}

let p1 = new Payment();
let p2 = new UPI();
let p3 = new CrerditCard();

p1.pay();
p2.pay();
p3.pay();