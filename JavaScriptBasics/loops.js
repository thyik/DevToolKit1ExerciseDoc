var banks = ["DBS", "HSBC", "OCBC", "UOB"];  //Array
/*for (i=0; i<banks.length; i++) {
    console.log(banks[i]);
  }
*/
/*
  let myFunction = function(item, index) {   //iterate through the listof items
    console.log(`${item} is at index ${index}` );
}

banks.forEach(myFunction);  //forEach takes a CallBackFunction
*/


banks.forEach(function (item, index) {   // LOOP
  console.log(`${item} is at index ${index}`); 
});


//using the last parameter
banks.forEach(function (item, index, arr) {
  console.log("Using Array Index")
  console.log(arr[index]);
});
