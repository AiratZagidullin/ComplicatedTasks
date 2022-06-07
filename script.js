'use strict';

const aClock = function () {
    let now = new Date();
    let dayOfWeek = now.getDay();
    let day = now.getDate();
    let nowMonth = now.getMonth();
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();

    const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const getHours = function () {
        if (hour == 1 || hour == 21) {
            return hour = hour + ' час '
        } else if (hour == 2 || hour == 3 || hour == 4 || hour == 22 || hour == 23 || hour == 24) {
            return hour = hour + ' часа '
        } else
            return hour = hour + ' часов '
    }

    const getMinutes = function () {
        if ((minute % 10 == 1) && (minute != 11)) {
            return minute = minute + ' минута '
        } else if (((minute % 10 == 2) && (minute != 12)) || ((minute % 10 == 3) && (minute != 13)) || ((minute % 10 == 4) && (minute != 14))) {
            return minute = minute + ' минуты '
        } else
            return minute = minute + ' минут '
    }

    const getSeconds = function () {
        if ((seconds % 10 == 1) && (seconds != 11)) {
            return seconds = seconds + ' секунда '
        } else if (((seconds % 10 == 2) && (seconds != 12)) || ((seconds % 10 == 3) && (seconds != 13)) || ((seconds % 10 == 4) && (seconds != 14))) {
            return seconds = seconds + ' секунды '
        } else
            return seconds = seconds + ' секунд '
    }

    getHours();
    getMinutes();
    getSeconds();

    return 'Сегодня ' + week[dayOfWeek] + ', ' + day + ' ' + month[nowMonth] + ' ' + year + ' года, ' + hour + minute + seconds;
}

const bClock = function () {
    let now = new Date();

    const zero = function (value) {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    }

    const nowDate = function () {
        let day = zero(now.getDate());
        let nowMonth = zero(now.getMonth() + 1);
        let year = zero(now.getFullYear());
        let hour = zero(now.getHours());
        let minute = zero(now.getMinutes());
        let seconds = zero(now.getSeconds());
        return day + "." + nowMonth + "." + year + " - " + hour + ":" + minute + ":" + seconds;
    }

    return nowDate();
}

setInterval(function () {
    document.getElementById('current_time_block1').innerHTML = aClock();
}, 1000)

setInterval(function () {
    document.getElementById('current_time_block2').innerHTML = bClock();
}, 1000)


