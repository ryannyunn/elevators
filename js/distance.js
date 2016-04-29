function distanceTravelled(elevators) {
  var feet = 0;
  var inches = 0;
  var total_ft;
  var total_mi;
  var htmlText;
  for (i = 1; i < elevators.length; i++) {
    if (elevators[i][15] != "") {
      if (!isNaN(elevators[i][15].split("'")[0]) && elevators[i][15].split("'")[0] != "") {
        feet += parseFloat(elevators[i][15].split("'")[0]);
      }
      if (!isNaN(elevators[i][15].split("'")[1]) && elevators[i][15].split("'")[1] != "") {
        inches += parseFloat(elevators[i][15].split("'")[1]);
      }
    }
  }
  total_ft = (feet + (inches * 12)).toFixed(2);
  total_mi = (total_ft * 0.000189394).toFixed(2);
  htmlText = "<p class='header'>Total Distance Travelled</p><p class='content'><i>(not all elevators had a recorded distance travelled)</i></p><p class='header'>" + total_ft + " feet or " + total_mi + " miles</p><br /><br /><p class='content'>To put that into context, that is:</p><p class='header'>2383 Empire State Buildings</p>";
  for (i = 0; i < 2383; i++) {
    htmlText += "<img class='esb' src='http://skyscrapercenter.com/img/building-outlines/EmpireStateBuilding.png'>"
  }
  $('#distanceTravelled').html(htmlText)
}