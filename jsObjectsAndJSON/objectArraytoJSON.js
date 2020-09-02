//Searchig in an array of objects
var bankbal = [{
    bname :"DBS", 
    amount : 20000,
}, { 
    bname:"OCBC", 
    amount : 6000, 
}, {
    bname: "UOB",
    amount : 5000,
}];

const bankbalJSONstring = JSON.stringify(bankbal[0]);

const backtoObj = JSON.parse(bankbalJSONstring);
console.log(bankbal[0]);
console.log(bankbalJSONstring);
console.log(backtoObj);

var a = ["DBS:10000", "HSBC:20000"];
const aJSON = JSON.stringify(a);
console.log(a);
console.log(aJSON);

