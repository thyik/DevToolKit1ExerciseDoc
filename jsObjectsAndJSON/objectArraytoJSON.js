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
console.log(bankbal[0]);        // print object #1
console.log(bankbalJSONstring);  // print JSON string
console.log(backtoObj);         // print object #1

var a = [{DBS:10000}, {HSBC:20000}];
const aJSON = JSON.stringify(a[0]);
console.log(a[0]);
console.log(aJSON);

