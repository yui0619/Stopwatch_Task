const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let startTime;
let stopTime = 0;
let IntervalID;

function displayTime() {
  IntervalID = setInterval(function() {
    elapsedTime = Date.now() - startTime + stopTime;

    const h = Math.floor(elapsedTime / 1000 / 60 / 60);
    const m = Math.floor((elapsedTime / 1000 / 60) % 60);
    const s = Math.floor((elapsedTime / 1000) % 60);
    const ms = Math.floor((elapsedTime % 1000) / 100);

    time.textContent = `${h}:${m}:${s}:${ms}`;
  }, 10);
}


start.addEventListener('click', function() {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
  startTime = Date.now();
  displayTime();
});

stop.addEventListener('click', function() {
  clearInterval(IntervalID);
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
  stopTime += (Date.now() - startTime);
});

reset.addEventListener('click', function() {
  clearInterval(IntervalID);
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
  time.textContent = '0:0:0:0';
  stopTime = 0;
});
