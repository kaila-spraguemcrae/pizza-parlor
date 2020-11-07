//bussiness logic
// function Order {
//   this.pizzas = [];
// }

function PizzaOrder (firstName, lastName, size, sizePrice) {
  this.firstName = firstName;
  this.lastName = lastName
  this.size = size;
  this.sizePrice = sizePrice;
  this.toppingsPrice = []; 
  this.toppingsName = [];
  this.price = 0;
}

PizzaOrder.prototype.addSizePrice = function(num) {
  this.sizePrice = num
}

PizzaOrder.prototype.addToppings = function() {
  for(i=0; i < toppingsPrice.length; i++) {
    this.toppingsPrice.push(toppingsPrice[i]);
    this.toppingsName.push(toppingsName[i]);
  }
  let sum = this.toppingsPrice.reduce(function(a, b){
    return a + b});
  this.toppingsPrice = sum;
}

PizzaOrder.prototype.totalPrice = function() {
  let result = this.sizePrice + this.toppingsPrice;
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
let toppingsPrice = [];
let toppingsName= []; 

// function displayOrderDetails()
function splitSize() {

}

$(document).ready(function(){

  $("form#order").submit(function(event){
    event.preventDefault();
    const inputtedFirstName = $("input#first-name").val();
    const inputtedLastName = $("input#last-name").val();

    
    const sizeinput = $("input[name='size']:checked").val();
    console.log(sizeinput);
    const splitArr = sizeinput.split(" ");
    console.log(splitArr);
    const inputtedSize = splitArr[0];
    const inputtedSizePrice = parseFloat(splitArr[1]);
   console.log(splitArr[1]);
    
    $("input:checkbox[name=toppings]:checked").each(function(){
      const toppingChoice = $(this).val();
      const splitToppings = toppingChoice.split(" ");
      toppingsName.push(splitToppings[0]);
      toppingsPrice.push(parseFloat(splitToppings[1]));
    });
    let newOrder = new PizzaOrder(inputtedFirstName, inputtedLastName, inputtedSize, inputtedSizePrice);

    newOrder.addToppings();
    newOrder.addSizePrice(inputtedSizePrice);
    newOrder.totalPrice();
    
    
    
  });
  
});

