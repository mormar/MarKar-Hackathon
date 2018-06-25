let map, infoWindow, pos, posTrue, markerPos;

function initMap() {
  window.directionsService = new google.maps.DirectionsService();
  window.directionsDisplay = new google.maps.DirectionsRenderer();
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 18.5,
    mapTypeId: 'roadmap'
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      posTrue = new google.maps.LatLng(pos.lat, pos.lng);
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);

      const marker = new google.maps.Marker({
        map: map,
        draggable: false,
        position: {lat: 54.496876, lng: 18.538165},
        icon: 'img/bin24.png'
      });
      marker.setMap(map);

      const marker2 = new google.maps.Marker({
        map: map,
        draggable: false,
        position: {lat: 54.493975, lng: 18.538514},
        icon: 'img/bin24.png'
      });
      marker2.setMap(map);

      directionsDisplay.setMap(map)
      let travelMode = google.maps.TravelMode.WALKING;
      let request = {
        origin: new google.maps.LatLng(pos.lat, pos.lng),
        destination: new google.maps.LatLng(marker.position.lat, marker.position.lng),
        travelMode: travelMode
      }
      directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                console.log(reponse);
            } else {
              console.log("error  " + status);
            }
        });
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
$('.carousel').carousel('cycle');
