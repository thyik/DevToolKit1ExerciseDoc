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

const fnSearch = expenses.findIndex(function(item, index, exp){
    if (item.type === "Eating Out") {
        //exp[index].amount = 700;
        item.amount = 700;
    }
});

console.log(expenses);
