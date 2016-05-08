function capacity(elevators) {
  var totalCapacity = 0;
  var htmlText;
  for (i = 1; i < elevators.length; i++) {
    if (elevators[i][17] != "" && !isNaN(elevators[i][17])) {
      totalCapacity += parseFloat(elevators[i][17]);
    }
  }
  htmlText = "<p class='header'>Total Capacity</p><p class='content'><i>(not all elevators had a total capacity listed)</i></p><p class='header'>" + totalCapacity + " lbs</p><br /><br /><p class='content'>That's the equivalent of</p><p class='header'>193 Boeing 747's</p>";
  for (i = 0; i < 193; i++) {
    htmlText += "<img class='boeing' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Boeing_747-400.svg/2000px-Boeing_747-400.svg.png'>"
  }
  $('#capacity').html(htmlText);
}