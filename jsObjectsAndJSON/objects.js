//objects
var account = {
    acountNo:"ADB3256", 
    name:"James", 
    type:"savings", 
    balance: 500
};
console.log("Account Number:" + account.acountNo);
console.log("Account Balance:" + account.balance);

//object members can be object
myObj = {
    "name":"John",
    "age":30,
    "cars": {
      "car1":"Ford",
      "car2":"BMW",
      "car3":"Fiat"
    }
   }
console.log(myObj.cars.car1);
