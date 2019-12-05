const L = require('leaflet');
const geolib = require('geolib');
const fetch = require('node-fetch');
const store = require('store2');

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success (pos) {
  const crd = pos.coords;
  const long = crd.longitude;
  const lat = crd.latitude;
  fetch('/results/pollingData').then(console.log(store('data')));
  //     let lowestDistance = Number.MAX_SAFE_INTEGER;
  //     let lowestPlace = 0;
  //     for (let i = 0; i < data.length; i++) {
  //       const distance = geolib.getDistance({ latitude: data[i].lat, longitude: data[i].long }, { latitude: lat, longitude: long });
  //       if (distance < lowestDistance) {
  //         lowestPlace = i;
  //         lowestDistance = distance;
  //       }
  //     }
  //     return { place: lowestPlace, distance: lowestDistance };
  //   });
  const marker2 = L.marker([lat, long]).addTo(map);
}

function error (err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const pos = navigator.geolocation.getCurrentPosition(success, error, options);

// Leaflet
const map = L.map('map').setView([0, 0], 1);

L.tileLayer(
  'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=BCBTN1mLGrjkFnZk42Dl',
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  }
).addTo(map);

const marker = L.marker([51.5, -0.09]).addTo(map);
