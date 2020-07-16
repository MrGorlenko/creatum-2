$(document).ready(function(){

  const DESCTOP = window.matchMedia('(max-width:992px)');

  let sliderElements = '.slide button, .slide ul, .slider-paragraph, .slide_img',
  sliderImgElems = '.slide__content_img a, .slide__content_img hr, .slide__content_img .points';

  let axeActive = function(){
    $('.toggle-top').addClass('nav-top-active')
    $('.toggle-bottom').addClass('nav-bottom-active')
  },
  axeNone = function(){
    $('.toggle-top').removeClass('nav-top-active')
    $('.toggle-bottom').removeClass('nav-bottom-active')
  },
  axeActiveMobile = () => {
    $('#toggle-mobile img:first-child').addClass('nav-top-active')
    $('#toggle-mobile img:last-child').addClass('nav-bottom-active')  
  },
  axeNoneMobile = () => {
    $('#toggle-mobile img:first-child').removeClass('nav-top-active')
    $('#toggle-mobile img:last-child').removeClass('nav-bottom-active')  
  };

  if (!DESCTOP.matches){

    let counter = 1;
    $('.toggle').click(function(){
      counter++;
      switch (counter%2){
        case 0:
          axeActive()
          break;
        default:
          axeNone()
          portfolioPassive()
          break;
      }
    })
  
    $('.slider-button').click(function(){
      counter = 1;
      axeActive();
      portfolioActive()
    })

    z_index_none = () => {
      $(sliderElements).css('z-index', '-1')
    },
    z_index_1 = () => {
      $(sliderElements).css('z-index', 'initial')
    },
  
    portfolioActive = () =>{
      $('.slide p:first-child').css('transform', 'translateY(0vh)')
      $('.slide h3').css('transform', 'translateY(-5vh)')
      $(sliderElements).addClass('invisible-slide')
      $(sliderImgElems).css('transform', 'translateY(-420px)')
      setTimeout(z_index_none, 500)
      $('.slide .row:first-child').removeClass('h-100')
      $('.slide .row:first-child').addClass('h-slide-label')
      $('.slide').addClass('slide-height')

    },
    portfolioPassive = () =>{
      $('.slide p:first-child').css('transform', 'translateY(0)')
      $('.slide h3').css('transform', 'translateY(0)')
      $(sliderElements).removeClass('invisible-slide')
      $(sliderImgElems).css('transform', 'translateY(0)')
      setTimeout(z_index_1)
      $('.slide .row:first-child').addClass('h-100')
      $('.slide .row:first-child').removeClass('h-slide-label')
      $('.slide').removeClass('slide-height')
    }

  } else {

    let counterMobile = 1;
    $('#toggle-mobile').click(function(){
      counterMobile++;
      switch (counterMobile%2){
        case 0:
          axeActiveMobile()
          break;
        default:
          axeNoneMobile()
          portfolioPassiveMobile()
          break;
      }
    })

    $('.slider-button').click(function(){
      counterMobile = 1;
      axeActiveMobile();
      portfolioActiveMobile();
    }),
    z_index_none = () => {
      $(sliderElements).css('z-index', '-1')
    },
    z_index_1 = () => {
      $(sliderElements).css('z-index', 'initial')
    }

    let portfolioActiveMobile = () => {
      $('.slide p:first-child').css('transform', 'translateY(0vh)')
      $('.slide h3').css('transform', 'translateY(-3vh)')
      $(sliderElements).addClass('invisible-slide')
      setTimeout(z_index_none, 500)

      $('.slide .row:first-child').removeClass('h-100')
      $('.slide .row:first-child').addClass('h-slide-label')
      $('.slide').addClass('slide-height')
    },
    portfolioPassiveMobile = () => {
      $('.slide p:first-child').css('transform', 'translateY(0)')
      $('.slide h3').css('transform', 'translateY(0)')
      $(sliderElements).removeClass('invisible-slide') 
      setTimeout(z_index_1)     

      $('.slide .row:first-child').addClass('h-100')
      $('.slide .row:first-child').removeClass('h-slide-label')
      $('.slide').removeClass('slide-height')
    }

  }


})