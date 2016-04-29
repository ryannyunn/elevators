function speed(elevators) {
  var cnt = 0;
  var total = 0;
  for (i = 1; i < elevators.length; i++) {
    if (elevators[i][16] != "" && !isNaN(elevators[i][16])) {
      total += parseInt(elevators[i][16]);
      cnt += 1;
    }
  }
  var avg_fpm = (total / cnt).toFixed(2);
  var avg_fps = (avg_fpm / 60).toFixed(2);
  
  var svg = d3.select("#speedometer")
          .append("svg:svg")
          .attr("width", 400)
          .attr("height", 400);


  var gauge = iopctrl.arcslider()
          .radius(120)
          .events(false)
          .indicator(iopctrl.defaultGaugeIndicator);
  gauge.axis().orient("in")
          .normalize(true)
          .ticks(12)
          .tickSubdivide(3)
          .tickSize(10, 8, 10)
          .tickPadding(5)
          .scale(d3.scale.linear()
                  .domain([0, 160])
                  .range([-3*Math.PI/4, 3*Math.PI/4]));

  var segDisplay = iopctrl.segdisplay()
          .width(80)
          .digitCount(6)
          .negative(false)
          .decimals(0);

  svg.append("g")
          .attr("class", "segdisplay")
          .attr("transform", "translate(130, 200)")
          .call(segDisplay);

  svg.append("g")
          .attr("class", "gauge")
          .call(gauge);

  segDisplay.value(346545);
  gauge.value(avg_fps);
  $("#speed").html(avg_fpm + " feet per minute<br />" + avg_fps + " feet per second");
  $("#moon").html("<span class='content'>At that rate, you'll reach the moon in </span><br /><br />" + (230100 / (avg_fps * 0.681818)).toFixed(2) + " hours");
};