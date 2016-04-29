function deviceType(elevators) {
  var dumbwaiter = 0;
  var escalator = 0;
  var freight = 0;
  var handicapLift = 0;
  var publicElevator = 0;
  var manlift = 0;
  var passengerElevator = 0;
  var sidewalk = 0;
  var privateElevator = 0;
  for (i = 1; i < elevators.length; i++) {
    switch(elevators[i][10]) {
      case "Dumbwaiter (D)":
        dumbwaiter += 1;
        break;
      case "Escalator (E)":
        escalator += 1;
        break;
      case "Freight (F)":
        freight += 1;
        break;
      case "Handicap Lift (H)":
        handicapLift += 1;
        break;
      case "Public Elevator (L)":
        publicElevator += 1;
        break;
      case "Manlift (M)":
        manlift += 1;
        break;
      case "Passenger Elevator (P)":
        passengerElevator += 1;
        break;
      case "Sidewalk (S)":
        sidewalk += 1;
        break;
      case "Private Elevator (T)":
        privateElevator += 1;
        break;
      default:
        break;
    }
  }
    $('#deviceType').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Types of Elevators in NYC'
        },
        subtitle: {
            text: 'I would love a dumbwaiter'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Device Types',
            colorByPoint: true,
            data: [{
                name: 'Dumbwaiter (D)',
                y: dumbwaiter
            }, {
                name: 'Escalator (E)',
                y: escalator
            }, {
                name: 'Freight (F)',
                y: freight
            }, {
                name: 'Handicap Lift (H)',
                y: handicapLift
            }, {
                name: 'Public Elevator (L)',
                y: publicElevator
            }, {
                name: 'Manlift (M)',
                y: manlift
            }, {
                name: 'Passenger Elevator (P)',
                y: passengerElevator
            }, {
                name: 'Sidewalk (S)',
                y: sidewalk
            }, {
                name: 'Private Elevator (T)',
                y: privateElevator
            }]
        }]
    });
}