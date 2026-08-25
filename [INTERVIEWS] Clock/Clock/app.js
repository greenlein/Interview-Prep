const handleSecond = document.querySelector(".handle__second");
const handleMinute = document.querySelector(".handle__minute");
const handleHour = document.querySelector(".handle__hour");

const secondMs = 1000;
const minuteMs = secondMs * 60;
const hourMs = minuteMs * 60;

requestAnimationFrame(main);

function main() {
  let currentTime = Date.now() % (1000 * 60 * 60 * 24);
  let seconds = Math.floor((currentTime % minuteMs) / secondMs);
  let minutes = Math.floor((currentTime % hourMs) / minuteMs);
  let hours = Math.floor(currentTime / hourMs);

  secondsPosition(seconds);
  minutesPosition(minutes);
  hoursPosition(hours);

  requestAnimationFrame(main);
}

function secondsPosition(seconds) {
  handleSecond.style.transform = `rotate(${(360 / 60) * seconds}deg)`;
}

function minutesPosition(minutes) {
  handleMinute.style.transform = `rotate(${(360 / 60) * minutes}deg)`;
}

function hoursPosition(hours) {
  handleHour.style.transform = `rotate(${(360 / 12) * hours}deg)`;
}
