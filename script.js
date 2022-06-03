'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const date = new Date();
const today = date.getDay() - 1;

for (let i = 0; i < 7; i++) {
    if (i > 4) {
        week[i] = `<i>${week[i]}</i>`;
    }

    if (i === today) {
        week[i] = `<b>${week[i]}</b>`;
    }
}

document.write(week.join("<br/>"));