//bussiness logic

function PizzaOrder (name,size) {
  this.name = name;
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
  this.price = this.size + this.toppings;
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
    
//input for name

//input for size

//input for toppings
    $("input:checkbox[name=toppings]:checked").each(function(){
      const toppingChoice = parseFloat($(this).val());
      toppings.push(toppingChoice);
    });
  });
  

});

