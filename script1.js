// Timer
let timerInterval;
let timerSeconds = 0;
let timerInput = document.getElementById('timerInput');
let timerDisplay = document.getElementById('timerDisplay');

function startTimer() {
  let timeParts = timerInput.value.split(':');
  let hours = parseInt(timeParts[0]);
  let minutes = parseInt(timeParts[1]);
  let seconds = parseInt(timeParts[2]);

  timerSeconds = hours * 3600 + minutes * 60 + seconds;

  timerInterval = setInterval(updateTimer, 1000);
  timerInput.disabled = true;
}

function updateTimer() {
  if (timerSeconds <= 0) {
    stopTimer();
    return;
  }

  let hours = Math.floor(timerSeconds / 3600);
  let minutes = Math.floor((timerSeconds % 3600) / 60);
  let seconds = timerSeconds % 60;

  timerDisplay.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

  timerSeconds--;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInput.disabled = false;
}

function resetTimer() {
  stopTimer();
  timerInput.value = '';
  timerDisplay.innerHTML = '00:00:00';
}

// Stopwatch
let stopwatchInterval;
let stopwatchSeconds = 0;
let stopwatchDisplay = document.getElementById('stopwatchDisplay');

function startStopwatch() {
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function updateStopwatch() {
  stopwatchSeconds++;

  let hours = Math.floor(stopwatchSeconds / 3600);
  let minutes = Math.floor((stopwatchSeconds % 3600) / 60);
  let seconds = stopwatchSeconds % 60;

  stopwatchDisplay.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchSeconds = 0;
  stopwatchDisplay.innerHTML = '00:00:00';
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
