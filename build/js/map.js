var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      function success(pos) {
        var crd = pos.coords;
        var long = crd.longitude;
        var lat = crd.latitude;
        console.log(crd);
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        let marker2 = L.marker([lat, long]).addTo(map);
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);

      //Leaflet
      let map = L.map("map").setView([0, 0], 1);

      L.tileLayer(
        "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=BCBTN1mLGrjkFnZk42Dl",
        {
          attribution:
            '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        }
      ).addTo(map);

      let marker = L.marker([51.5, -0.09]).addTo(map);
      
      fetch("https://data.princegeorgescountymd.gov/resource/2v6d-7p4w.json")
        .then(res => res.json)
        .then({});


      /*function geocode() {
        var location = "22 Main st Boston MA";
        axios
          .get("https://maps.googleapis.com/maps/api/geocode/json", {
            params: {
              address: location,
              key: "AIzaSyBeadu2zR1apGmk8hPyjSFfNbgOExvJ5BQ"
            }
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }*/