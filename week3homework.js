const function greetCustomer(...pizzaToppings) {
  let toppings;
  toppings = 0;
  for (let num of pizzaToppings) {
    toppings += num;
  }
  let toppings = pizzaToppings.length;
  return pizzaToppings;
}
console.log(
  `Hello, welcome to the pizza palace our toppings are ${pizzaToppings}.`
);
greetCustomer(`Mason`);

 function getPizzaOrder(Size, Crust, pizzaToppings) {
  console.log(`One ${Size} ${Crust} pizza with ${pizzaToppings}`);
}
getPizzaOrder(`Large`, `Stuffed crust`);

function preparePizza() {
  return getPizzaOrder;
}
(getPizzaOrder = Size), Crust, pizzaToppings;
preparePizza(getPizzaOrder);
function servePizza() {}
