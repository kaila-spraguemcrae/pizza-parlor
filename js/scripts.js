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

PizzaOrder.prototype.addToppings = function() {
  let sum = this.toppings.reduce(function(a, b){
    return a + b});
  this.toppings = sum;
}

// PizzaOrder.prototype.totalPrice = function() {
//   this.price = this.size + this.toppings;
// }

let newOrder = new PizzaOrder ("Kaila", "large",);

let toppings = [1, 2, 1];

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