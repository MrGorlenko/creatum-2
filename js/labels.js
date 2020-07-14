$(document).ready(function(){


  anime.timeline({loop: false})
  .add({
  targets: '#left-label span',
  opacity: [0,1],
  easing: "easeInOutQuad",
  duration: 500,
  delay: (el, i) => 150 * (i+1)
  })

  anime.timeline({loop: false})
  .add({
  targets: '#right-label span',
  opacity: [0,1],
  easing: "easeInOutQuad",
  duration: 500,
  delay: (el, i) => 150 * (i+1) + 1000
  })



})