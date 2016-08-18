var faker = require("faker");

console.log("===================");
console.log("WELCOME TO MY SHOP!");
console.log("===================");
for(var i = 0; i < 10; i++) {
    var item = faker.commerce.productName();
    var num = faker.random.number();
    console.log(item + " - $" + num);
}