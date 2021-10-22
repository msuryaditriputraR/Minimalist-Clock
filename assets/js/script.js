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
    textSecond = document.getElementById('text-second'),
    textAmPm = document.getElementById('text-ampm'),
    dateDay = document.getElementById('date-day'),
    dateMonth = document.getElementById('date-month'),
    dateYear = document.getElementById('date-year');

const clockText = () => {
    const date = new Date();

    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        ss = date.getSeconds(),
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
    textHour.innerText = `${hh}:`;

    // add '0' before minute
    if (mm < 10) mm = `0${mm}`;

    // SHOW MINUTE
    textMinute.textContent = `${mm}:`;

    // add '0' before second
    if (ss < 10) ss = `0${ss}`;

    console.log(ss);

    // SHOW SECONDS
    textSecond.textContent = `${ss}`;

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

/* === CHANGE THEME === */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        darkTheme
    );
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](
        iconTheme
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
