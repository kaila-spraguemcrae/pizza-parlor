//bussiness logic

function UserOrder() {
  this.pizzas = [];
  this.currentId= 0;
  this.priceArr = [];
  this.totalPrice= 0;
};

UserOrder.prototype.addPizza = function(pizza){
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

UserOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

UserOrder.prototype.findPizza = function(id) {
  for (let i=0; i<this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

UserOrder.prototype.addTotal = function(){
  for (i=0; i<this.pizzas.length; i++) {
    this.priceArr.push(this.pizzas[i].price)
  }
  let result = this.priceArr.reduce(function(a, b){
    return a + b});
  this.totalPrice = Math.round(result * 100)/ 100;
}

function Pizza (firstName, lastName, size, sizePrice) {
  this.firstName = firstName;
  this.lastName = lastName
  this.size = size;
  this.sizePrice = sizePrice;
  this.toppingsPrice = []; 
  this.toppingsName = [];
  this.price = 0;
}

Pizza.prototype.addSizePrice = function(num) {
  this.sizePrice = num
}

Pizza.prototype.addToppings = function() {
  for(i=0; i < toppingsPrice.length; i++) {
    this.toppingsPrice.push(toppingsPrice[i]);
    this.toppingsName.push(toppingsName[i]);
  }
  let sum = this.toppingsPrice.reduce(function(a, b){
    return a + b});
  this.toppingsPrice = sum;
}

Pizza.prototype.totalPrice = function() {
  let result = this.sizePrice + this.toppingsPrice;
  this.price = Math.round(result * 100)/ 100;
}

//user interface logic

let newOrder = new UserOrder();
let toppingsPrice = [];
let toppingsName= []; 

function displayOrderDetails(newOrderToDisplay) {
  let userCart = $("#cart-order");
  let htmlForUserCart = "";
  newOrderToDisplay.pizzas.forEach(function(pizza){
    htmlForUserCart += "<li id=" + pizza.id + ">" + pizza.size + " Pizza #" + (pizza.id) + "</li>";
  });
  userCart.html(htmlForUserCart);
}

function showPizza(pizzaId) {
  const pizza = newOrder.findPizza(pizzaId);

  $("#show-pizza-info").show();
  $(".display-size").html(pizza.size);
  $(".display-toppings").html(pizza.toppingsName + ", ");
  $(".display-price").html(pizza.price);


  
}

function attachContactListeners() {
  $("ul#cart-order").on("click", "li", function(){
    showPizza(this.id);
  });
}

$(document).ready(function(){
  attachContactListeners();

  $("#next").click(function(){ 
    $(".create-pizza").show();
    $(".user-info").hide();
  });

  $("#addAnother").click(function(){
    $(".create-pizza").show();
    $(".cart").hide();
  });

  $("#submitOrder").click(function(){
    $(".order-details").show();
    $(".cart").hide();
  });
  
  $("form#order").submit(function(event){
    event.preventDefault();
    const inputtedFirstName = $("input#first-name").val();
    const inputtedLastName = $("input#last-name").val();
    const sizeinput = $("input[name='size']:checked").val();
    const splitArr = sizeinput.split(" ");
    const inputtedSize = splitArr[0];
    const inputtedSizePrice = parseFloat(splitArr[1]);
  
    $("input:checkbox[name=toppings]:checked").each(function(){
      const toppingChoice = $(this).val();
      const splitToppings = toppingChoice.split(" ");
      toppingsName.push(splitToppings[0]);
      toppingsPrice.push(parseFloat(splitToppings[1]));
    });
    let newPizza = new Pizza(inputtedFirstName, inputtedLastName, inputtedSize, inputtedSizePrice);

    newPizza.addToppings();
    newPizza.addSizePrice(inputtedSizePrice);
    newPizza.totalPrice()
    newOrder.addPizza(newPizza);
    newOrder.addTotal();
    displayOrderDetails(newOrder);
    
    $(".userName").text(newOrder.pizzas[0].firstName);
    $(".total").text("$"+newOrder.totalPrice);

    $("form#order")[0].reset();
    $(".cart").show();
    $(".create-pizza").hide();


  });
  
});

