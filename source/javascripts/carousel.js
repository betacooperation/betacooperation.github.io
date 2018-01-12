$(function() {
  var timer = null;

  function setTimer() {
    if(timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(nextSlide, 15000);
  }

  function nextSlide() {
    var slides = $(".carousel .carousel__item");
    var slideIndex;

    for(var i = 0; i < slides.length; i ++) {
      if($(slides[i]).hasClass("carousel__item--active")) {
        slideIndex = i;
        break;
      }
    }

    var nextSlideIndex = slideIndex + 1;
    if(nextSlideIndex >= slides.length) nextSlideIndex = 0;

    var currentSlide = $(slides[slideIndex]);
    var nextSlide = $(slides[nextSlideIndex]);

    var left = nextSlide.position().left;

    $(".carousel .carousel__container").css("transform", "translateX(-" + left + "px)");

    currentSlide.removeClass("carousel__item--active");
    nextSlide.addClass("carousel__item--active");

    // neeeext
    setTimer();
  }

  // let's go!
  setTimer();
});