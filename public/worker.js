let lag = 0;

self.addEventListener('message', (evt) => {
  lag = evt.data;
});

(function lagMe() {
  const t1 = parseInt(lag, 10) + Date.now();
  while( Date.now() < t1 );
  setTimeout(lagMe, 0);
})();