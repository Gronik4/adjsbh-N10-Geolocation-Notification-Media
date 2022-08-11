import Popup from './popuver';
import stopwatch from './stopwatch';
import { startRecorder, stopRecorder } from './recorder';

export default function getCoords(place) {
  function controlMedia() {
    if (place === 'coordAudio' || place === 'coordVideo') {
      stopwatch();
      if (place === 'coordAudio') { startRecorder('Audio'); }
      if (place === 'coordVideo') { startRecorder('Video'); }
    }
  }
  function success(position) {
    const lati = position.coords.latitude;
    const longi = position.coords.longitude;
    document.querySelector(`.${place}`).append(`Широта= ${lati}  Долгота= ${longi}`);
    controlMedia();
  }

  function error() {
    const pop = new Popup('text').showP();
    document.querySelector('.container').append(pop);
    document.getElementById('note').style.width = '0';
    document.getElementById('ta').setAttribute('disabled', 'disabled');
    document.getElementById('record').style.width = '0';

    pop.querySelector('.butP').addEventListener('click', () => {
      const hendCoordinates = pop.querySelector('.txtAr').value;
      let lati;
      let longi;
      if (hendCoordinates) {
        const [latitude, longitude] = hendCoordinates.split(', ');
        lati = latitude;
        longi = longitude;
      } else { lati = '52.5213256511'; longi = '41.26515421316'; }
      document.querySelector(`.${place}`).append(`Широта: ${lati}, Долгота: ${longi}`);
      if (place === 'coordText') {
        document.getElementById('note').style.width = '150px';
      } else {
        document.getElementById('record').style.width = '150px';
      }
      document.getElementById('ta').removeAttribute('disabled');
      pop.remove();
      controlMedia();
    });
  }

  navigator.geolocation.getCurrentPosition(success, error);
}
