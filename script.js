'use strict';

let week = ['Понедельник', 'Суббота', 'Среда', 'Четверг', 'Воскресенье', 'Пятница', 'Вторник'];
const date = new Date();
const today = date.getDay();

const weekend = function () {
    for (let i = 0; i < 7; i++) {
        if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
            week[i] = `<i>${week[i]}</i>`
        }
    }
}

const weekDay = function () {
    let i;
    switch (true) {
        case today === 1:
            i = week.indexOf('Понедельник');
            return week[i] = `<b>${week[i]}</b>`
        case today === 2:
            i = week.indexOf('Вторник');
            return week[i] = `<b>${week[i]}</b>`
        case today === 3:
            i = week.indexOf('Среда');
            return week[i] = `<b>${week[i]}</b>`
        case today === 4:
            i = week.indexOf('Четверг');
            return week[i] = `<b>${week[i]}</b>`
        case today === 5:
            i = week.indexOf('Пятница');
            return week[i] = `<b>${week[i]}</b>`
        case today === 6:
            i = week.indexOf('Суббота');
            return week[i] = `<i><b>${week[i]}</b></i>`
        case today === 0:
            i = week.indexOf('Воскресенье');
            return week[i] = `<i><b>${week[i]}</b></i>`
    }
}

weekDay();
weekend();

document.write(week.join("<br/>"));
