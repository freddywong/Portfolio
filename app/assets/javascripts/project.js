$(document).ready(function(){
  $('.project-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.project-text'
  });
  $('.project-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.project-slider',
    dots: true,
    autoplay: true,
    centerMode: true,
    focusOnSelect: true
  });

  $(".slide-picture-1").hover(function(){
      $(".slide-text-1").slideDown("fast");
  },function(){
      $(".slide-text-1").slideUp("fast");    
  });
});