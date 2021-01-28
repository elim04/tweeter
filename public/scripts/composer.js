$(document).ready(function() {

  $('#tweet-form').hide();
  const button = $('.innerContent').children('span');
  $(button).on("click", function() {
    if ($('#tweet-form').is(":visible")) {
      $('#tweet-form').slideUp();
    } else {
      $('#tweet-form').slideDown();
    }
  });


});