$(document).ready(function() {

  //stretch
  $('#tweet-form').hide();
  const button = $('.innerContent').children('span');
  $(button).on("click", function() {
    if ($('#tweet-form').is(":visible")) {
      $('#tweet-form').slideUp();
    } else {
      $('#tweet-form').slideDown();
    }
  });

  //stretch part two

  $('#scroll-arrow').hide();
  // $('#scroll-arrow').on("scroll", function() {
  //   $('#scroll-arrow').show(); 
  // });

});