const timerMsec = document.querySelector(".timer__milliseconds");
const timerSec = document.querySelector(".timer__seconds");
const timerMin = document.querySelector(".timer__minutes");
const startBtn = document.querySelector(".stopwatch__start");
const stopBtn = document.querySelector(".stopwatch__stop");
const resetBtn = document.querySelector(".stopwatch__reset");

let startTime = 0;
let savedTime = 0;
let cancelId;
const countdown = 25 * 60 * 1000;

function startTimer() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
  startTime = Date.now();
  cancelId = requestAnimationFrame(updateDisplay);
}

function stopTimer() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  savedTime += Date.now() - startTime;
  console.log(savedTime);
  cancelAnimationFrame(cancelId);
}

function resetTimer() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
  startTime = 0;
  savedTime = 0;
  cancelAnimationFrame(cancelId);
  timerMsec.innerHTML = "000";
  timerSec.innerHTML = "00";
  timerMin.innerHTML = "25";
}

function updateDisplay() {
  let msecLeft = countdown - (Date.now() - startTime + savedTime);
  console.log(msecLeft);

  if (msecLeft <= 0) {
    msecLeft = 0;
    cancelAnimationFrame(cancelId);
    cancelId = null;
  }

  let secLeft = Math.floor(msecLeft / 1000);
  let minLeft = Math.floor(secLeft / 60);

  timerMsec.innerHTML = String(msecLeft % 1000).padStart(3, "0");
  timerSec.innerHTML = String(secLeft % 60).padStart(2, "0");
  timerMin.innerHTML = String(minLeft).padStart(2, "0");

  if (cancelId) {
    cancelId = requestAnimationFrame(updateDisplay);
  }
}
