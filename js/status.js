function status(elevators) {
  var active = 0;
  var workProgress = 0;
  var dismantled = 0;
  var noJurist = 0;
  for (i = 1; i < elevators.length; i++) {
    switch(elevators[i][1]) {
      case "A":
        active += 1;
        break;
      case "W":
        workProgress += 1;
        break;
      case "D":
        dismantled += 1;
        break;
      case "J":
        noJurist += 1;
        break;
      default:
        break;
    }
  }
    $('#status').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Statuses of Elevators in NYC'
        },
        subtitle: {
            text: 'All these active elevators and I\'m always late'
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
            name: 'Statuses',
            colorByPoint: true,
            data: [{
                name: 'Active',
                y: active
            }, {
                name: 'Work In Progress',
                y: workProgress
            }, {
                name: 'Dismantled',
                y: dismantled
            }, {
                name: 'No Jurist',
                y: noJurist
            }]
        }]
    });
}