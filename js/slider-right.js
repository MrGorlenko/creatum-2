$(document).ready(function(){

  let container = document.getElementById('swiperContainer')
  let swiper = new Swiper( container, {
    speed: 400,
    direction: 'horizontal',
    touchReleaseOnEdges: true,
    mousewheel: true,
    loop: false
  });


  swiper.on('reachEnd', function(){
      swiper.mousewheel.disable()
    })

})