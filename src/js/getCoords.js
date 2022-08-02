import Popup from './popuver';

export default function getCoords(place) {
  function success(position) {
    const lati = position.coords.latitude;
    const longi = position.coords.longitude;
    document.querySelector(`.${place}`).append(`Широта= ${lati}  Долгота= ${longi}`);
  }

  function error() {
    const pop = Popup.showP('text');
    document.querySelector('.container').append(pop);
    document.getElementById('note').style.width = '0px';
    document.getElementById('ta').setAttribute('disabled', 'disabled');

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
      document.getElementById('note').style.width = '150px';
      document.getElementById('ta').removeAttribute('disabled');
      pop.remove();
    });
  }

  navigator.geolocation.getCurrentPosition(success, error);
}
