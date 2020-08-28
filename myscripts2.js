//alert ('hello world'); 
function myFunction() {
    
    // getElementById() to get by elements
    document.getElementById("h1ref").style.backgroundColor = "greenyellow";
    //document.querySelector(".info").style.color = "green";
    // querySelectorAll() to get class
    myArray = document.querySelectorAll(".info");
    myArray.forEach(function(items) {
         items.style.color ="green";
      });
}

function changeContent(){
        //document.body.innerHTML = "<p>Test</p>"
        document.getElementById("h1ref").innerHTML = "You are doing excellent job in Dev Tool Kit 1";
        document.getElementById("h1ref").style.backgroundColor = "yellow";
        var myLinkVar = document.getElementById("myLink");
        myLinkVar.href ="http://www.globalcert.cloud/";
        myLinkVar.innerHTML ="Global Certificates"; 

    }