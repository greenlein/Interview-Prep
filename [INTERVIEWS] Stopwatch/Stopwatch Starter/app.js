const timerMsec = document.querySelector(".timer__milliseconds");
const timerSec = document.querySelector(".timer__seconds");
const timerMin = document.querySelector(".timer__minutes");

let cancelId;
let startTime;
let savedTime = 0;

function startTimer() {
  startTime = Date.now();
  cancelId = requestAnimationFrame(updateTimer);
}

function stopTimer() {
  savedTime = savedTime + Date.now() - startTime;
  cancelAnimationFrame(cancelId);
}

function resetTimer() {
  savedTime = 0;
  startTime = Date.now();

  timerMsec.innerHTML = "000";
  timerSec.innerHTML = "00";
  timerMin.innerHTML = "00";
}

function updateTimer() {
  let msecElapsed = savedTime + Date.now() - startTime;
  let secElapsed = Math.floor(msecElapsed / 1000);
  let minElapsed = Math.floor(secElapsed / 60);

  timerMsec.innerHTML = String(msecElapsed % 1000).padStart(3, "0");
  timerSec.innerHTML = String(secElapsed % 60).padStart(2, "0");
  timerMin.innerHTML = String(minElapsed).padStart(2, "0");

  cancelId = requestAnimationFrame(updateTimer);
}

//The solution below uses setInterval, which is apparently an outdated method. ES6 has animation frames, which work more relaibly.

//From Google: Why Use requestAnimationFrame?
// Compared to older methods like setInterval() or setTimeout(), requestAnimationFrame provides massive performance advantages:
//  - Perfect Sync: Automatically matches your display's refresh rate (typically 60Hz, 120Hz, or 144Hz).
//  - Battery Friendly: Automatically pauses when a user switches to a background tab or minimizes the window.
//  - Hardware Friendly: Groups all DOM updates together into a single browser repaint cycle to avoid layout thrashing

//This solution also Query Selects the Timer Div and listens for the click event, instead of adding 'onClick' to the buttons inside the HTML

// let startTime = 0;
// let elapsedTime = 0;
// let timerInterval = null;
// const start = document.querySelector(".stopwatch__start");
// const stop = document.querySelector(".stopwatch__stop");
// const reset = document.querySelector(".stopwatch__reset");

// start.addEventListener("click", function () {
//   startStopwatch();
// });

// stop.addEventListener("click", function () {
//   stopStopwatch();
// });

// reset.addEventListener("click", function () {
//   resetStopwatch();
// });

// function startStopwatch() {
//   console.log("click!");
//   if (!timerInterval) {
//     startTime = Date.now() - elapsedTime;
//     timerInterval = setInterval(updateDisplay, 10);
//   }
// }

// function stopStopwatch() {
//   clearInterval(timerInterval);
//   timerInterval = null;
// }

// function resetStopwatch() {
//   clearInterval(timerInterval);
//   timerInterval = null;
//   elapsedTime = 0;
//   startTime = 0;
//   timerHTML(0, 0, 0);
// }

// function updateDisplay() {
//   elapsedTime = Date.now() - startTime;

//   let msec = elapsedTime % 1000;
//   let sec = Math.floor(elapsedTime / 1000) % 60;
//   let min = Math.floor(Math.floor(elapsedTime / 1000) / 60);

//   timerHTML(msec, sec, min);
// }

// function timerHTML(msec, sec, min) {
//   document.getElementById("timer").innerHTML = `
//     <span class="timer__minutes">${min}</span>
//       :
//     <span class="timer__seconds">${sec}</span>
//       :
//     <span class="timer__milliseconds">${msec}</span>
//     `;
// }
