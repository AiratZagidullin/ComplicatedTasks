'use strict';

let arr = ['244', '1420', '521', '645', '2115', '421', '923'];

for (let num of arr) {
    if (num.substring(0, 1) == '2' || num.substring(0, 1) == '4') {
        console.log(num)
    }
}

for (let i = 2; i < 100; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = false;
            break
        }
    }
    if (prime) {
        console.log("Делители для числа " + i + ": 1 и " + i);
    }
}