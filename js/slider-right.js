$(document).ready(function(){
  TweenLite.defaultEase = Linear.easeNone;
  // var containers = document.querySelectorAll(".slider-container");
  let containers = $('.container-xl');
  var controller = new ScrollMagic.Controller();
  var tl = new TimelineMax();

  tl.to("#js-slideContainer", 1, {xPercent: -20}, "label1");
  tl.from(containers[1], 0.5, {opacity:0}, "label1+=0.5");
  tl.to("#js-slideContainer", 1, {xPercent: -40}, "label2");
  tl.from(containers[2], 0.5, {opacity:0}, "label2+=0.5");
  tl.to("#js-slideContainer", 1, {xPercent: -50}, "label3");

  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setPin("#js-wrapper")
    .setTween(tl)
    // .addIndicators({
    //   colorTrigger: "white",
    //   colorStart: "white",
    //   colorEnd: "white",
    // })
    .addTo(controller);

})