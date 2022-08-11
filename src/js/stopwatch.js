export default function stopwatch() {
  const deletMedia = document.getElementById('btcr');
  const saveMedia = document.getElementById('bttk');
  const outT = document.getElementById('outT');
  outT.innerHTML = '00:00';
  let min = 0;
  let tameSt = 0;
  let start = setInterval(() => {
    tameSt += 1;
    if (tameSt === 60) {
      min += 1;
      tameSt = 0;
    }
    const minutes = min < 10 ? `0${min}` : `${min}`;
    const secundes = tameSt < 10 ? `0${tameSt}` : `${tameSt}`;
    outT.innerHTML = `${minutes}: ${secundes}`;
  }, 1000);
  deletMedia.addEventListener('click', () => {
    clearInterval(start);
    min = 0;
    start = null;
    tameSt = 0;
  });
  saveMedia.addEventListener('click', () => {
    clearInterval(start);
    min = 0;
    start = null;
    tameSt = 0;
  });
}
