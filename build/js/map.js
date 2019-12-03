import { marker, map } from 'leaflet';
import geolib from 'geolib';

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success (pos) {
  const crd = pos.coords;
  const long = crd.longitude;
  const lat = crd.latitude;
  console.log(crd);
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  const marker2 = marker([lat, long]).addTo(map);
}

function error (err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const pos = navigator.geolocation.getCurrentPosition(success, error, options);
console.log(pos);

// Leaflet
const myMap = map('map').setView([0, 0], 1);

L.tileLayer(
  'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=BCBTN1mLGrjkFnZk42Dl',
  {
    attribution:
            '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  }
).addTo(map);

const myMarker = marker([51.5, -0.09]).addTo(map);

fetch('/api/pollingloc')
  .then(res => res.json)
  .then(res => res.data)
  .then(data => {
    console.log(data);
   // const pollingPlace = data[0];
   // const distance = geolib.getDistance({ latitude: },{})
  })
