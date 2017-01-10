// gain access to the filesystem
var fs = require('fs');

var food = fs.readFileSync('food.txt', 'utf8');

console.log('FOOD');
console.log(food);

var drinks = fs.readFileSync('drinks.txt','utf8');

console.log('DRINKS');
console.log(drinks);