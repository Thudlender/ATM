class Customer {
    name = "";
    address = "";
    phone = "";
    email = "";
    accounts = [];
    constructor(name, address, phone, email) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    verify(name, address, phone, email){
        if (this.name == name && this.address == address && this.phone 
            == phone && this.email == email) {
            return true;
        } else {
            return false;
        }
    }
    getAccount(){
        return this.accounts;
    }
    createAccount(bank, accountType){
        return bank.createAccount(accountType)
    }

    setAddress(){
        this.address = address;
    }
    getPhone() {
        return this.phone;
    }
    getEmail() {
        return this.email;
    }
}

class Account {
    accountNumber = "";
    balance = 0.0;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    getAccountnumber(){
        return this.accountNumber;
    }
    getBalance() {
        return this.balance;
    }
}

class Bank {
    name = "";
    address = "";
    code = "";
    constructor(name, address, code){
        this.name = name;
        this.address = address;
        this.code = code;
    }
    createAccount(accountType) {
        let account;
        if (accountType === "currentAccount"){
            account = new CurrentAccount("6000000", 100, 1000, 0.3)
            return account
        } else {
            account = new CurrentAccount("6000000", 100, 1000, 0.5);
            return account;
        }
    }
    createCustomer(name, address, phone, email){
        const customer = new Customer("Aey", "Nowhere", "0999999999", "Unknown@email.com")
        return customer;
    }
    createAtm(){
        const atm = new ATM("bankLocation", "bankSE")
        return atm;
    }
    //------Me-------//
    getName(){
        return this.name;
    }
    getAddress(){
        return this.address;
    }
    getCode(){
        return this.code;
    }
    setCode() {
        this.code = code;
    }
}

class CurrentAccount {
    overdraftLimit = "";
    overdraftInterest = "";
    constructor(overdraftLimit, overdraftInterest){
        this.overdraftLimit = overdraftLimit;
        this.overdraftInterest = overdraftInterest;
    }
    getOverdraftLimit() {
        return this.getOverdraftLimit; 
    }
    getOverdraftInterest() {
        return this.overdraftInterest;
    }
}

class SavingsAccount {
    interestRate = "";
    constructor(interestRate){
        this.interestRate = interestRate;
    }
    getInterestRate() {
        return this.interestRate;
    }
}

class Transaction {
    transactionId = "";
    transactionType = "";
    amount = "";
    transactionDate = "";
    status = "";
    constructor(transactionId, transactionType, amount, transactionDate, status){
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.amount = amount;
        this.transactionDate = transactionDate;
        this.status = status;
    }
    
}

class ATM {
    location = ""
    managedBy = ""
    constructor(location, managedBy){
        this.location = location;
        this.managedBy = managedBy;
    }
}