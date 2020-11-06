//bussiness logic
function PizzaOrder (name,size) {
  this.name = name;
  this.size = size;
  this.toppings = []; //the parseFloated values will be pushed to array
  this.price = 0;
}

PizzaOrder.prototype.totalPrice = function() {
  this.price = this.size + this.toppings;
}



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