$(document).ready(function ($) {

  $(window).on('scroll', function () {

    //ADD .TIGHT
    if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
      $('body').addClass('tight');
      $('.arrow').hide();
    } else {
      $('body').removeClass('tight');
      $('.arrow').show();
    }
  });

  //BACK TO NORMAL VIEW
  $("html").on("click", "body.tight .wrapper", function () {
    $('html, body').animate({
      scrollTop: $('.wrapper').outerHeight() - $(window).height()
    }, 500);
  });

});