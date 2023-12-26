$(document).ready(function() {
  var slider = $('.slider');
  var slideWidth = $('.slider-container').width();
  var currentSlide = 0;

  function prevSlide() {
    var totalSlides = slider.children().length;
    var visibleSlides = Math.floor($('.slider-container').width() / $('.slider img').width());
    var maxSlides = Math.ceil(totalSlides / visibleSlides);

    if (currentSlide > 0) {
      currentSlide--;
      slider.css('transform', 'translateX(' + (-slideWidth * currentSlide) + 'px)');
    } else {
      currentSlide = maxSlides - 1;
      slider.css('transform', 'translateX(' + (-slideWidth * currentSlide) + 'px)');
    }
  }

  function nextSlide() {
    var totalSlides = slider.children().length;
    var visibleSlides = Math.floor($('.slider-container').width() / $('.slider img').width());
    var maxSlides = Math.ceil(totalSlides / visibleSlides);

    if (currentSlide < maxSlides - 1) {
      currentSlide++;
      slider.css('transform', 'translateX(' + (-slideWidth * currentSlide) + 'px)');
    } else {
      currentSlide = 0;
      slider.css('transform', 'translateX(' + (-slideWidth * currentSlide) + 'px)');
    }
  }

  window.prevSlide = prevSlide;
  window.nextSlide = nextSlide;
});
