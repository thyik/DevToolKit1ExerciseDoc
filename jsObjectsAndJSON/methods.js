var account = {
    acountNo:"ADB3256", 
    name:"James", 
    type:"savings", 
    balance: 500,
    
    deposit: function(amt){
        this.balance = this.balance + amt;
    }

};

account.deposit(100);
console.log(account.balance);