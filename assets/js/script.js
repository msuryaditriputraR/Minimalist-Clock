/* === CLOCK === */
const hour = document.getElementById('clock-hour'),
    minute = document.getElementById('clock-minute'),
    second = document.getElementById('clock-second');

const clock = () => {
    const date = new Date();

    let hourDeg = date.getHours() * 30;
    let minDeg = date.getMinutes() * 6;
    let secDeg = date.getSeconds() * 6;

    // Show needles
    hour.style.display = 'flex';
    minute.style.display = 'flex';
    second.style.display = 'flex';

    // Rotate the clock's needle
    hour.style.transform = `rotateZ(${hourDeg + minDeg / 12}deg)`;
    minute.style.transform = `rotateZ(${minDeg}deg)`;
    second.style.transform = `rotateZ(${secDeg}deg)`;
};

setInterval(clock, 1000);

/* === CLOCK & DATE TEXT === */
const textHour = document.getElementById('text-hour'),
    textMinute = document.getElementById('text-minute'),
    textAmPm = document.getElementById('text-ampm'),
    dateDay = document.getElementById('date-day'),
    dateMonth = document.getElementById('date-month'),
    dateYear = document.getElementById('date-year');

const clockText = () => {
    const date = new Date();

    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();

    //Change format hours from 24 to 12 hours
    if (hh >= 12) {
        hh -= 12;
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }

    // 0 Hours == 12 Am / or 12 pm
    if (hh == 0) hh = 12;

    // add '0' before hours
    if (hh < 10) hh = `0${hh}`;

    //SHOW HOURS
    textHour.textContent = `${hh}:`;

    // add '0' before minute
    if (mm < 10) mm = `0${mm}`;

    // SHOW MINUTE
    textMinute.textContent = `${mm}`;

    // show am or pm
    textAmPm.textContent = ampm;

    // Get Months
    let months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    dateDay.textContent = day;
    dateMonth.textContent = `${months[month]},`;
    dateYear.textContent = year;
};

setInterval(clockText, 1000);
