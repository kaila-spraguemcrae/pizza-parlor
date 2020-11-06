//bussiness logic

function PizzaOrder (firstName, lastName, size) {
  this.firstName = firstName;
  this.lastName = lastName
  this.size = size;
  this.toppings = []; //the parseFloated values will be pushed to array
  this.price = 0;
}

PizzaOrder.prototype.addSize = function(num) {
  this.size = num
}

PizzaOrder.prototype.addToppings = function() {
  for(i=0; i < toppings.length; i++) {
    this.toppings.push(toppings[i]);
  }
  let sum = this.toppings.reduce(function(a, b){
    return a + b});
  this.toppings = sum;
}

PizzaOrder.prototype.totalPrice = function() {
  let result = this.size + this.toppings;
  this.price = Math.round(result * 100)/ 100;
}


//BELOW WILL BE LINKED TO HTML INPUTS:: 

// let newOrder = new PizzaOrder ("Kaila", "large",);

// let toppings = [1, 2, 1];

// let size = 16

// newOrder.addToppings();
// newOrder.addSize(size);
// newOrder.totalPrice();

//user interface logic
let toppings = [];

$(document).ready(function(){

  
  $("form#order").submit(function(event){
    event.preventDefault();
    const inputtedFirstName = $("input#first-name").val();
    const inputtedLastName = $("input#last-name").val();
    const inputtedSize= parseFloat($("input[name='size']:checked").val());
    
    $("input:checkbox[name=toppings]:checked").each(function(){
      const toppingChoice = parseFloat($(this).val());
      toppings.push(toppingChoice);
    });
    let newOrder = new PizzaOrder (inputtedFirstName, inputtedLastName, inputtedSize);
    newOrder.addToppings();
    newOrder.addSize(inputtedSize);
    newOrder.totalPrice();
    console.log(newOrder);
    console.log(newOrder.toppings);
    console.log(newOrder.price);
  });
  

});

