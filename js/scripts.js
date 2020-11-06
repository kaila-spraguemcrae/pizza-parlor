//bussiness logic
function PizzaOrder (name,size) {
  this.name = name;
  this.size = size;
  this.toppings = []; //the parseFloated values will be pushed to array
  this.price = 0;
}

PizzaOrder.prototype.pushToppings = function() {
  this.toppings.push(toppings);
  console.log(newOrder.toppings);
}

function add (a,b) {
  return a + b;
}

// Describe: PizzaOrder.addToppings();

// Test: This will add topping values together
// Code: newOrder.toppings = [1.50 , 2.00, 1.75];
// Expect: newOrder.addToppings().toEqual(5.25)

// PizzaOrder.prototype.addToppings = function() {
//   let toppingTotal = this.toppings.reduce(function(a, b){return a + b});
//   this.toppings.push(toppingTotal);
//   console.log(newOrder.toppings);
// }

PizzaOrder.prototype.totalPrice = function() {
  this.price = this.size + this.toppings;
}
 function add (a,b) {
   return a + b;
 }

let newOrder = new PizzaOrder ("Kaila", "large",);

let toppings = [1.50, 2.00, 1.75];

newOrder.pushToppings();
// newOrder.addToppings();

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