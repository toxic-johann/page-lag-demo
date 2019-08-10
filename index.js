import lagRadar from './radar.js';
const lagRadarContainer = document.getElementById('lagRadarContainer');
const destroy = lagRadar({
  parent: lagRadarContainer,
  size: 200,
});

(function lagMe() {
  const lag = document.getElementById('lag').value;
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