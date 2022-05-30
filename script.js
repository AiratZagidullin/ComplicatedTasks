'use strict';

let lang = 'en';
if (lang == 'ru') {
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
} else if (lang == 'en') {
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

switch (lang) {
    case 'ru':
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
        break
    case 'en':
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break
}

let langArray = {
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
console.log(langArray[lang]);

let namePerson = "Артем";
let result = namePerson === "Артем" ? "Директор" : namePerson === "Александр" ? "Преподаватель" : "Студент";
console.log(result);