$(document).ready(function () {
  const testimonialCarousel = () => {
    const slider = $(".hero__carousel");
    const slide = $(".hero__testimonial__card");
    const slideNumber = slide.length;
    const slideWidth = Math.round(slide.outerWidth());
    const margin = 5;
    const item = 3;

    // Getting the First Slide
    // const $firstClone = slide.first().clone();
    // const $lastClone = slide.last().clone();

    // Adjusts The Width
    slider.css("width", `${slideWidth * (slideNumber * margin)}px`);
    slide.css("margin-left", `${margin}px`)
    // Append and prepend the clones
    // slider.append($firstClone);
    // slider.prepend($lastClone);

    let currentSlide = 0;

    const updateSlider = () => {
      const sliderTransform = slideWidth * currentSlide;
      slider.css("transform", `translateX(-${sliderTransform}px)`);
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
    checkScreenSize();
  });

  hamburgerButton();
  checkScreenSize();
  testimonialCarousel();
  theaterView('.hero__video')
});
