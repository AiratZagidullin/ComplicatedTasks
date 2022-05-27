let num = 266219;
let needNum = 1;

while (num >= 1) {
    needNum *= (num % 10);
    num = Math.trunc(num /= 10);
}

needNum = needNum ** 3;
needNum = needNum.toString();

console.log(needNum.substr(0, 2));