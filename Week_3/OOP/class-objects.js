class Pizza {

  constructor() {
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}
class SomeClass {
  someMethod() {
    this.hello = "hi"; // Created a property called hello
  }
}
//constructor
class Pizza {
  constructor() {
    this.toppings = ["cheese"];
  }
}
let pizza1 = new Pizza();
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];

const pizza1 = {
  toppings: ["cheese"],
  addTopping: function(topping) {
    this.toppings.push(topping);
  }
}

const pizza2 = {
  toppings: ["cheese"],
  addTopping: function(topping) {
    this.toppings.push(topping);
  }
}

class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}
let pizza = new Pizza('large', 'thin');
let pizza = {
  size: 'large',
  crust: 'thin',
  toppings: ["cheese"]
}
