//Searchig in an array of objects
var expenses = [{
    type :"Education", 
    amount : 2000,
}, { 
    type:"Eating Out", 
    amount : 600, 
}, {
    type: "Entertainment",
    amount : 500,
}];


console.log(expenses[1]);
console.log(expenses[2].amount);

const fnSearch = expenses.findIndex(function(item, index){
    console.log(item);
    console.log(index);
    //return item.type === "Eating Out";
});
//fnSearch = 3;
//console.log(fnSearch);
