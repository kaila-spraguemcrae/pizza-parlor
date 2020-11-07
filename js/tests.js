// Describe: Pizza();

// Test: This will create an instance of Pizza
// Code: let newPizza = new PizzaOrder("Zack","large");
// Expect: newPizza.name.toEqual("Zack")


// Describe: Pizza.addToppings()

// Test: This will push topping values to array
// Expect: newPizza.pushToppings().toEqual(newPizza.toppings = [1 , 2, 1]);

// Test: This will add topping values together
// Code: newPizza.toppings = [1 , 2, 1];
// Expect: newPizza.addToppings().toEqual(4)

// Describe: Pizza.addSize(num);

// Test: This will add value to this.size
// Code: let size = 16;
// Expect: newOrder.addSize(16).toEqual(16);


// Describe: Pizza.totalPrice();

// Test: This will add this.toppings and this.size values.
// Code: let this.toppings = 4
// Code: let this.size = 16
// Expect: newPizza.totalPrice(4, 16).toEqual(20)


// Describe: UserOrder.addPizza()

// Test: This will add and instance of Pizza to an instance of  UserOrder
// Code: let newOrder = new UserOrder();
// Code: newOrder.addPizza(newPizza);
// Expect: newOrder.order().toEqual([newPizza])