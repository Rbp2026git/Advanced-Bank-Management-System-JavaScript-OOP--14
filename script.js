/* Object Literals */
const bankConfig = {
    bankName: "Patel Bank",
    branch: "Jehanabad",
    ifsc: "PTBL0001234",
};

/* Constructor Function + Prototype */
function User(name, age){
    this.name = name;
    this.age = age;
}

/* Prototype Method */
User.prototype.getUserDetails = function(){
    return `Name : ${this.name}, Age : ${this.age}`;
}

/*Base Class (Encapsulation + Abstraction) */
class BankAccount {
    #balance;

    constructor(user, balance = 0){
        this.user = user;
        this.#balance = balance;
    }
    //Instance method
    deposite(amount){
        this.#balance += amount;
    }

    withdrawl(amount){
        if(amount > this.#balance){
            console.log("Insufficient Balance !");
        }else{
            this.#balance -= amount;
        }
    }
    getBalance(){
        return this.#balance;
    }
    //Static Method
    bankRules(){
        return "Minimum balance should be 1000";
    }
}

/*Inheritance (Saving Account) */
class SavingAccount extends BankAccount {
    
    constructor(user, balance, intrestRate){
        super(user, balance);
        this.intrestRate = intrestRate;
    }
    // Methods Overriding (Pollymorphism)
    withdrawl(amount){
        console.log("Saving Account Withdrawl...");
        super.withdrawl(amount);
    }

    addIntrest(){
        let intrest = this.getBalance() * this.intrestRate / 100;
        this.deposite(intrest);
    }
}
