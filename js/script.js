const refreshTime = () => {
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let greet = 'Good morning';
    let dateNumber = date.getDate();
    let dateSuperScript = 'th';

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    amPm = getAmPm(hour);
    greet = getGreetings(hour);
    changeBackground(hour);
    hour = change12HoursClock(hour);
    dateSuperScript = changeSuperScript(dateNumber);

    hour = addZero(hour);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    document.querySelector('.time__hour').innerHTML = hour;
    document.querySelector('.time__minutes').innerHTML = minutes;
    document.querySelector('.time__seconds').innerHTML = seconds;
    document.querySelector('.time__am-pm').innerHTML = amPm;
    document.querySelector('.greet__time').innerHTML = greet;

    document.querySelector('.date__day').innerHTML = dateNumber;
    document.querySelector('.date__month').innerHTML = months[date.getMonth()];
    document.querySelector('.date__super-script').innerHTML = dateSuperScript;
    document.querySelector('.date__year').innerHTML = date.getFullYear();

    let temp = setTimeout(refreshTime, 500);
};

const getAmPm = hour => {
    if (hour < 12) return 'am';
    return 'pm';
};

const getGreetings = hour => {
    if (hour > 3 && hour < 12) return 'Good morning';
    else if (hour >= 12 && hour < 16) return 'Good afternoon';
    return 'Good evening';
};

const change12HoursClock = hour => {
    if (hour > 12) return hour - 12;
    hour;
};

const changeSuperScript = date => {
    if (Math.floor((date % 100) / 10) === 1) return 'th';

    if (date % 10 === 1) return 'st';
    else if (date % 10 === 2) return 'nd';
    else if (date % 10 === 3) return 'rd';
    return 'th';
};

const changeBackground = hour =>
    (document.querySelector('.content').style.backgroundImage = `url('./../assets/images/${hour}.jpg')`);

const addZero = time => {
    if (time < 10) time = '0' + time;
    return time;
};

refreshTime();
