$(document).ready(function(){
  let controller = new ScrollMagic.Controller();

  let ourScene = new ScrollMagic.Scene({
    triggerElement: '#about',
    // duration: '120%',
    triggerHook: 0.9
  })
  .setClassToggle('#circle', 'wider')
  .addIndicators()
  .addTo(controller);
})