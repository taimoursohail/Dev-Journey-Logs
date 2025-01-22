alert("Hi this this is Robo Instructional game... Let's Hit Enter Key / Press OK... ")
var price=prompt("What is the current price of the Milk Bottle?");
var numbersOfBottle=prompt("How many Bottle do you need?");


function getMilk(price, numbersOfBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + numbersOfBottle + " Bottles which cost you approx. " + "$" +(price * numbersOfBottle) );
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}


getMilk(price, numbersOfBottle);
