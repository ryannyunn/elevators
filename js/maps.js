var styles = [{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#e3e3e3"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#cccccc"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#FFFFFF"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}];

function heatmap(elevators) {
  var initialize = function() {
    var mapOptions = {
      zoom: 11,
      center: new google.maps.LatLng(40.7293, -73.9906),
      scrollwheel: false,
      streetViewControl: false
    };
    var map = new google.maps.Map(document.getElementById('heatMap'), mapOptions);
    var positions = [];
    for (i = 1; i < elevators.length; i++) {
      positions.push(new google.maps.LatLng(elevators[i][27], elevators[i][28]));
    }
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: positions,
      map: map
    });
    map.setOptions({styles: styles});
    heatmap.setMap(map);
    heatmap.set('radius', 150);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
}

function markermap(elevators) {
  var initialize = function() {
    var mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(40.7293, -73.9906),
      scrollwheel: false,
      streetViewControl: false
    };
    var map = new google.maps.Map(document.getElementById('markerMap'), mapOptions);
    var positions = [];
    for (i = 1; i < elevators.length; i++) {
      positions.push(new google.maps.LatLng(elevators[i][27], elevators[i][28]));
    }
    var markers = [];
    for (position in positions) {
      markers[position] = new google.maps.Marker({
        position: positions[position],
        map: map
      });
    }
    map.setOptions({styles: styles});
  }
  google.maps.event.addDomListener(window, 'load', initialize);
}