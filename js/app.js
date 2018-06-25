var map, infoWindow, marker;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 18.5
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

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
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

$('.carousel').carousel('cycle');

$("#find").hover(function(){
      $(this).css({"background-color":"black"});
  });
