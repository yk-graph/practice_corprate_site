var rellax = new Rellax('.rellax');

$(function() {
  $('.tab li').on('click', function() {
    var $th = $(this).index();
    $('.tab li').removeClass('active');
    $('.caseWrap').removeClass('active');
    $(this).addClass('active');
    $('.caseWrap').eq($th).addClass('active');
  });


  $('#simplyScroll').simplyScroll({
    autoMode: 'loop',
    speed: 1,
    frameRate: 24,
    horizontal: true,
    pauseOnHover: false,
    pauseOnTouch: false
  });
});