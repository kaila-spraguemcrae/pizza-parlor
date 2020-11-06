//bussiness logic
function PizzaOrder (name,size) {
  this.name = name;
  this.size = size;
  this.toppings = []; //the parseFloated values will be pushed to array
  this.price = Number;
}

PizzaOrder.prototype.pushToppings = function() {
  for(i=0; i < toppings.length; i++) {
    this.toppings.push(toppings[i]);
  }
}

function add (a,b) {
  return a + b;
}

// function addToppings()
// Describe: PizzaOrder.addToppings();

// Test: This will add topping values together
// Code: newOrder.toppings = [1.50 , 2.00, 1.75];
// Expect: newOrder.addToppings().toEqual(5.25)

PizzaOrder.prototype.addToppings = function() {
  let sum = this.toppings.reduce(function(a, b){
    return a + b});
  console.log(sum);
  // this.toppings = toppingTotal;
  console.log("addToppings: " + newOrder.toppings);
}

PizzaOrder.prototype.totalPrice = function() {
  this.price = this.size + this.toppings;
}

let newOrder = new PizzaOrder ("Kaila", "large",);

let toppings = (1, 2, 1);

newOrder.pushToppings();
newOrder.addToppings();

/*toppings:
extra motzerella cheese
ricotta cheese
asiago cheese
tomato silced
tomato diced
onion
muschroom
chopped garlic
rosted garlic
black olives
*/


//user interface logic