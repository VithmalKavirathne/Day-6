

function Guess(){
    let num1 = Math.floor(Math.random() * 10) + 1; 
    let num2 = parseInt(document.getElementById("text").value); 
    let an = document.getElementById("h4");
  
  
    if (num1 === num2) {
  
      an.innerText = "Gammak bro you Guessed it correct!!!";
      console.log("congratzzz bro");
  
    } else if (num1 < num2) {
      
      an.innerText = "Try a lower number machan.";
      console.log("Try a lower number.");
  
    } else {
     
      an.innerText = "Try a higher number anehh.";
      console.log("Try a higher number.");
  
    }
    console.log(num1)
  }