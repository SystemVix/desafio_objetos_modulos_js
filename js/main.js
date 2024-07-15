import * as orderService from "./services/order-service.js";
import Order from "./models/order.js";

// EXEMPLO 1
const data1 = document.getElementById("entrada1").innerHTML.split("\n");

const order1 = new Order(data1[0], Number(data1[1]), Number(data1[2]));

const total1 = orderService.total(order1);

console.log(`Pedido código ${order1.code}`);
console.log(`Valor total: R$ ${total1.toFixed(2)}`);

// EXEMPLO 2
const data2 = document.getElementById("entrada2").innerHTML.split("\n");

const order2 = new Order(data2[0], Number(data2[1]), Number(data2[2]));

const total2 = orderService.total(order2);

console.log(`Pedido código ${order2.code}`);
console.log(`Valor total: R$ ${total2.toFixed(2)}`);

// EXEMPLO 3
const data3 = document.getElementById("entrada3").innerHTML.split("\n");

const order3 = new Order(data3[0], Number(data3[1]), Number(data3[2]));

const total3 = orderService.total(order3);

console.log(`Pedido código ${order3.code}`);
console.log(`Valor total: R$ ${total3.toFixed(2)}`);