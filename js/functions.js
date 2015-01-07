$('.header').particleground({
  density: 4500,
  minSpeedX: 0.5,
  maxSpeedX: 1.0,
  minSpeedY: 0.5,
  maxSpeedY: 1.0,
  proximity: 100,
  parallaxMultiplier: 8
});
$('.content').appear(function(){
  $('.header-links-fixed').css("position","fixed");
});
