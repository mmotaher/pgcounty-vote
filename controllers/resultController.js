const geolib = require('geolib');
const fetch = require('node-fetch');
const store = require('store2');

const url = 'https://data.princegeorgescountymd.gov/resource/2v6d-7p4w.json';

exports.getPollingData = (req, res) => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      store('data', data);
      return data;
    })
    .then(data => res.send({ data }));
}

exports.postDistance = (req, res) => {
  let lowestDistance = Number.MAX_SAFE_INTEGER;
  let lowestPlace = 0;
  const lat = req.params.latitude;
  const long = req.params.longitude;
  const data = store('data');
  for (let i = 0; i < data.length; i++) {
    const distance = geolib.getDistance({ latitude: data[i].lat, longitude: data[i].long }, { latitude: lat, longitude: long });
    if (distance < lowestDistance) {
      lowestPlace = i;
      lowestDistance = distance;
    }
  }

  store('low', { pollingLoc: data[lowestPlace], distance: lowestDistance });

  res.send({ pollingLoc: data[lowestPlace], distance: lowestDistance });
}

exports.putDistance = (req, res) => {
  res.send(JSON.parse(store('low')));
}
