function style() {
  var h = window.innerHeight;
  var w = window.innerWidth;

  $('.slide').each(function(i, elem){
    elem.style.minHeight = (h - 100) + "px";
  });
  $('.titleSlide').each(function(i, elem){
    elem.style.minHeight = (h - 200) + "px";
  });
  $('#speedometer').children()[0].style.width = "340px";
  $('#speedometer').children()[0].style.marginLeft = (w - 340)/2 + "px";
  $('#averageSpeed').hover(
    function(){
      $('img#rocket')[0].style.right = "0px";
    }, function() {
      $('img#rocket')[0].style.right = "calc(100% - 100px)";
    }
  );
  $('img.esb').each(function(i, elem){
    elem.style.width = (w / 96) + "px";
  });
  $('img.boeing').each(function(i, elem){
    elem.style.width = (w / 9) + "px";
  });
}