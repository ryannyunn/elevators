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
  function initialize() {
    google.maps.visualRefresh = true;
    var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
      (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
    if (isMobile) {
      var viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
    }
    var mapDiv = document.getElementById('markerMap');
    mapDiv.style.width = isMobile ? '100%' : '500px';
    mapDiv.style.height = isMobile ? '100%' : '300px';
    var map = new google.maps.Map(mapDiv, {
      center: new google.maps.LatLng(40.719594271662174, -73.99682902874514),
      zoom: 11,
      scrollwheel: false,
      streetViewControl: false
    });
    map.setOptions({styles: styles});

    layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: true },
      query: {
        select: "col26",
        from: "12PsvIPMRRm3sX-Q5kjIaCOyLOkPggzXrVZY79WLM",
        where: ""
      }
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
}