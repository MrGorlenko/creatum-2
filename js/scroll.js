$(document).ready(function(){
  let controller = new ScrollMagic.Controller();

  let navWhite = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: .7
  })
  .setClassToggle('#nav', 'nav-white')
  // .addIndicators()
  .addTo(controller);
  
  let toggleWhite = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: .7
  })
  .setClassToggle('.nav-span', 'span-white')
  // .addIndicators()
  .addTo(controller);

  let LogoWhite = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0.7,
  })
  .setClassToggle('#logo', 'logo-white')
  // .addIndicators()
  .addTo(controller);

  let ourScene1 = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0.9
  })
  .setClassToggle('#circle', 'wider')
  // .addIndicators()
  .addTo(controller);

  let ourScene2 = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0.5
  })

  .setClassToggle('#line', 'full-line')
  // .addIndicators()
  .addTo(controller);

  let aboutLeft = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0.3
  })

  .setClassToggle('#about-left p, #about-left h3, #about-left a', 'about_active')
  // .addIndicators()
  .addTo(controller);

  let aboutRight = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0.2
  })

  .setClassToggle('#about-right p, #about-right h3, #about-right a', 'about_active')
  // .addIndicators()
  .addTo(controller);
})