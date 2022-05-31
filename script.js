'use strict';

let str = "Задание 4";

const lesson4 = function (argument) {
    if (typeof argument !== "string") {
        return "Введена не строка";
    }
    argument.trim();
    return argument.length > 50 ? argument.slice(0, 30) + '...' : argument;
}

console.log(lesson4(str));