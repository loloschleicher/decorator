"use strict";
exports.__esModule = true;
var espresso_1 = require("../espresso");
var sugar_1 = require("../sugar");
var milk_1 = require("../milk");
var coffeeEspresso = new espresso_1.Espresso();
coffeeEspresso = new sugar_1.Sugar(coffeeEspresso);
coffeeEspresso = new milk_1.Milk(coffeeEspresso);
var coffeeEspresso1 = new espresso_1.Espresso();
console.log(coffeeEspresso.getDescription());
console.log(coffeeEspresso1.getDescription());
