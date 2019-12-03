"use strict";

var _leaflet = require("leaflet");

var _geolib = _interopRequireDefault(require("geolib"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  var _long = crd.longitude;
  var lat = crd.latitude;
  console.log(crd);
  console.log('Your current position is:');
  console.log("Latitude : ".concat(crd.latitude));
  console.log("Longitude: ".concat(crd.longitude));
  console.log("More or less ".concat(crd.accuracy, " meters."));
  var marker2 = (0, _leaflet.marker)([lat, _long]).addTo(_leaflet.map);
}

function error(err) {
  console.warn("ERROR(".concat(err.code, "): ").concat(err.message));
}

var pos = navigator.geolocation.getCurrentPosition(success, error, options);
console.log(pos); // Leaflet

var myMap = (0, _leaflet.map)('map').setView([0, 0], 1);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=BCBTN1mLGrjkFnZk42Dl', {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(_leaflet.map);
var myMarker = (0, _leaflet.marker)([51.5, -0.09]).addTo(_leaflet.map);
fetch('/api/pollingloc').then(function (res) {
  return res.json;
}).then(function (res) {
  return res.data;
}).then(function (data) {
  console.log(data); // const pollingPlace = data[0];
  // const distance = geolib.getDistance({ latitude: },{})
});