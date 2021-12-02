let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minsEl = document.getElementById('mins');
let secondsEl = document.getElementById('seconds');









let newYears = '1 Jan 2022';

function countdown(){


let newYearsDate = new Date(newYears);
let currentDate = new Date();

let totalSeconds =(newYearsDate - currentDate) / 1000;

let days = Math.floor(totalSeconds/ 3600 / 24);

let hours = Math.floor(totalSeconds/3600) % 24;


let mins = Math.floor(totalSeconds/60) % 60;

let seconds = Math.floor(totalSeconds) % 60;

daysEl.innerHTML = days;
hoursEl.innerHTML = formatTime(hours);
minsEl.innerHTML = formatTime(mins);
secondsEl.innerHTML = formatTime(seconds);



}

function formatTime(time){

return time < 10 ? `0${time}` : time;

}

//initial call
countdown();

setInterval(countdown, 1000);