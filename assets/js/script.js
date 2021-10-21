/* === CLOCK === */
const hour = document.getElementById('clock-hour');
const minute = document.getElementById('clock-minute');
const second = document.getElementById('clock-second');

const clock = () => {
    const date = new Date();

    let hourDeg = date.getHours() * 30;
    let minDeg = date.getMinutes() * 6;
    let secDeg = date.getSeconds() * 6;

    // Rotate the clock's needle
    hour.style.transform = `rotateZ(${hourDeg + minDeg / 12}deg)`;
    minute.style.transform = `rotateZ(${minDeg}deg)`;
    second.style.transform = `rotateZ(${secDeg}deg)`;
};

setInterval(clock, 1000);
