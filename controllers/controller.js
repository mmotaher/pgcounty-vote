const fetch = require('node-fetch');

const url = 'https://data.princegeorgescountymd.gov/resource/2v6d-7p4w.json';

let geoCoordinates = {
  latitude: '0',
  longitude: '0'
}

let pollingData = {};

exports.getData = (req, res) => {
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      pollingData = data;
      res.end(`All polling places: ${pollingData}`);
    })
}

exports.postData = (req, res) => {
  const pollingPlace = pollingData['name' + req.params.name];
  console.log(pollingPlace);
  geoCoordinates.latitude = pollingPlace.lat;
  geoCoordinates.longitude = pollingPlace.long;
  res.end(`Current geoCoordinates: ${geoCoordinates}`);
}
