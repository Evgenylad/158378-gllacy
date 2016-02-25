/*Интерактивная карта*/
function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(59.9387969,30.3228097,20)
}
  var map = new google.maps.Map(document.getElementById("map-canvas"),
                                mapOptions);
  var image = "img/icecream-pin.png";
  var myLatLng = new google.maps.LatLng(59.9387969,30.3228097,20);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
});
}

google.maps.event.addDomListener(window, 'load', initialize);
