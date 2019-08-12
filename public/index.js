import lagRadar from './radar.js';
const lagRadarContainer = document.getElementById('lagRadarContainer');
const destroy = lagRadar({
  parent: lagRadarContainer,
  size: 200,
});

const worker = new Worker('./worker.js');

(function lagMe() {
  const useWorker = document.getElementById('use-web-worker').checked;
  const lag = document.getElementById('lag').value;
  if (useWorker) {
    worker.postMessage(lag);
    window.requestAnimationFrame(lagMe);
    return;
  }
  const t1 = parseInt(lag, 10) + Date.now();
  while( Date.now() < t1 );
  window.requestAnimationFrame(lagMe);
})();

const counter = document.getElementById('counter');
const times = document.getElementById('times');
let timesValue = 0;
counter.addEventListener('click', () => {
  times.innerText = timesValue++;
});