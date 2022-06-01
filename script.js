'use strict';

let screenPrice;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

do {
    screenPrice = prompt("Сколько будет стоить данная работа?")
} while (!isNumber(screenPrice))

screenPrice = Number(screenPrice); //обрезает пробелы слева и справа

console.log(screenPrice)