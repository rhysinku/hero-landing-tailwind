$(document).ready(function () {
  const testimonialCarousel = () => {
    const slider = $(".hero__carousel");
    const slide = $(".hero__testimonial__card");
    const slideNumber = slide.length * 2;
    const slideWidth = Math.round(slide.outerWidth());

    // Getting the First Slide
    const $firstClone = slide.first().clone();
    const $lastClone = slide.last().clone();

    slider.css("width", `${slideWidth * slideNumber}px`);

    // Append and prepend the clones
    slider.append($firstClone);
    slider.prepend($lastClone);

    console.log(slideNumber);
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
      console.log("801");
    } else {
      console.log("800");
    }
  };

  $(window).resize(() => {
    checkScreenSize();
  });

  hamburgerButton();
  checkScreenSize();
  //   testimonialCarousel();
});
