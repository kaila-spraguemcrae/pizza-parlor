# _Pizza Parlor_

#### _This webpage allows a user to build their own pizza, 11.06.2020_

#### By _**Kaila Sprague**_

## Description

_This weboage was created for week 4's independent project. It uses JavaScript contructors to save pizza choices as objects._

## Setup/Installation Requirements

### View Online

_To view my live website, Pizza Parlor visit [https://kaila-spraguemcrae.github.io/pizza-parlor](https://kaila-spraguemcrae.github.io/pizza-parlor)_

### Open Locally

_Go to my GitHub repository here, [https://guthub.com/kaila.spraguemcrae/pizza-parlor](https://guthub.com/kaila.spraguemcrae/pizza-parlor), and click on the green 'Code' button to clone the repository, Open with GitHub Desktop OR Download the ZIP file_

##### To clone:
1. _Push the green 'Clone' button and copy the URL._
2. _Open Terminal or GitBash and input the command:_ `git clone https://github.com/kaila-spraguemcrae/pizza-parlor`
3. _To view the code, open the copied directory with Visual Studio Code or your preferred text editor by inputing the command `code .` in your terminal._
4. _To view the website, open index.html in Chrome or your preferred browser._

## Known Bugs

## Support and contact details

_If you run into any problems or have any questions please contact me via [email](mailto:kaila.sprague@icloud.com)._

## TDD Specifications Table:

| Test | Input | Output |
| :------------- | :------------- | :------------- |
| **Pizza Order Info** |||
| This will create an instance of PizzaOrder name | Zack | Zack |
| **Pizza Toppings** |||
| This will convert user selection in to a total topping cost | cheese & tomato | 2.50 | 
| **Pizza Size**|||
| This will convert user size selection into size price | medium | 12.99 |
| **Pizza Price Total**|||
| This will add pizza size and toppings costs | 2.50, 12.99 | 15.49 |
| **Add Pizza to Order**|||
| This will add newPizza object to newOrder| click 'add to Cart' | 'newPizza' object added to 'Cart' |


## Specs:

Describe: Pizza();

Test: This will create an instance of Pizza
Code: let newPizza = new PizzaOrder("Zack","large");
Expect: newPizza.name.toEqual("Zack")


Describe: Pizza.addToppings()

Test: This will push topping values to array
Expect: newPizza.pushToppings().toEqual(newPizza.toppings = [1 , 2, 1]);

Test: This will add topping values together
Code: newPizza.toppings = [1 , 2, 1];
Expect: newPizza.addToppings().toEqual(4)

Describe: Pizza.addSize(num);

Test: This will add value to this.size
Code: let size = 16;
Expect: newOrder.addSize(16).toEqual(16);


Describe: Pizza.totalPrice();

Test: This will add this.toppings and this.size values.
Code: let this.toppings = 4
Code: let this.size = 16
Expect: newPizza.totalPrice(4, 16).toEqual(20)


Describe: UserOrder.addPizza()

Test: This will add and instance of Pizza to an instance of  UserOrder
Code: let newOrder = new UserOrder();
Code: newOrder.addPizza(newPizza);
Expect: newOrder.order().toEqual([newPizza])


## Technologies Used

_This project uses the following technologies:_

- HTML
- JavaScript
- JQuery
- CSS
- Bootstrap
- GitHub

### License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2020 Kaila Sprague McRae