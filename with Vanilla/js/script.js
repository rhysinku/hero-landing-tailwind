$(document).ready(function () {
  const testimonialCarousel = () => {
    const slider = $(".hero__carousel");
    const slide = $(".hero__testimonial__card");
    const slideNumber = slide.length;
    const slideWidth = Math.round(slide.outerWidth());
    const margin = 15;
    const screenWidth = $(window).width();
    let item = 3;
    let currentSlide = 0;


    // Screensize Item Show

    
    if (screenWidth >= 801) {
      item = 1
    }
     else if(clientwidth <= 1200){
      item = 2
     }
    else{
      item = 3
    }

    console.log(item)


    // Adjusts The Width
    slider.css("width", `${slideWidth * (slideNumber * margin)}px`);
    slide.css("margin-right", `${margin}px`)
 

   
    const updateSlider = () => {
 
      const sliderTransform = (slideWidth + margin) * currentSlide;
      if(currentSlide === 0){
        slider.css("transform", `translateX(0)`);
      }else{
        slider.css("transform", `translateX(-${sliderTransform}px)`);
      }
     
    };

    const autoSlide = () => {
      
      currentSlide = (currentSlide + 1) % slideNumber;
      updateSlider();
    };

    setInterval(autoSlide, 3000);
  };

  //   Burger Function
  const hamburgerButton = () => {
    const burger = $(".nav_burger");
    const navigation = $(".navigation");

    burger.click(() => {
      navigation.toggleClass("burger-active");
    });
  };

  //   Check Screensize
  const checkScreenSize = () => {
    const screenWidth = $(window).width();

    if (screenWidth >= 801) {
      $(".navigation").removeClass("burger-active");
    } else {
    }
  };

  // Theater View
  function theaterView(selector){
    $(selector).click(function(){
      var videoSrc = $(this).find('iframe').attr('src');
      var autoplaySrc = videoSrc.includes('?') ? videoSrc + '&autoplay=1' : videoSrc + '?autoplay=1';
      // console.log($('#theater__video').attr('src' , autoplaySrc))
      $('#theater__video').attr('src', autoplaySrc);
      $('#theater_view').fadeIn(400);
    })

  }


  $('.theater__card .close').click(()=>{
    $('#theater_view').fadeOut(400, ()=>{

      $('#theater__video').attr('src', '');

    })
  })
   
  


  $(window).resize(() => {
    testimonialCarousel();
    checkScreenSize();
  });

  hamburgerButton();
  checkScreenSize();
  testimonialCarousel();
  theaterView('.hero__video')
});
