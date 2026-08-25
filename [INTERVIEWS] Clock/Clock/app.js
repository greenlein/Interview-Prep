const handleSecond = document.querySelector(".handle__second");
const handleMinute = document.querySelector(".handle__minute");
const handleHour = document.querySelector(".handle__hour");

const Ms = 1;
const secondMs = 1000;
const minuteMs = secondMs * 60;
const hourMs = minuteMs * 60;

requestAnimationFrame(main);

function main() {
  let currentTime = Date.now() % (hourMs * 24); //The remainder of dividing by a full day is the amount of ms that have passed so far today
  let milliseconds = (currentTime % minuteMs) / Ms; //Milliseconds that have passed in a 1 minute
  let seconds = Math.floor((currentTime % minuteMs) / secondMs); //Seconds that have passed in 1 minute
  let minutes = Math.floor((currentTime % hourMs) / minuteMs); //minutes that have passed in 1 hour
  let hours = Math.floor(currentTime / hourMs); // hours that have passed in one day

  millisecondsPosition(milliseconds);
  minutesPosition(minutes);
  hoursPosition(hours);

  requestAnimationFrame(main);
}

function secondsPosition(milliseconds, seconds) {
  handleSecond.style.transform = `rotate(${(360 / 60) * seconds}deg)`;
}

function millisecondsPosition(milliseconds, seconds) {
  handleSecond.style.transform = `rotate(${(360 / (60 * 1000)) * milliseconds}deg)`;
}

function minutesPosition(minutes) {
  handleMinute.style.transform = `rotate(${(360 / 60) * minutes}deg)`;
}

function hoursPosition(hours) {
  handleHour.style.transform = `rotate(${(360 / 12) * hours}deg)`;
}
