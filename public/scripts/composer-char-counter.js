$(document).ready(function() {

  const tweet = $('textarea');

  tweet.on('input', function(event) {

    let characterCount = (140 - $(this).val().length);

    let counter = $(this).closest('form').children('.buttonContainer').children('.counter');

    if (characterCount < 0) {
      counter.addClass('overCharLimit');
    } else {
      counter.removeClass('overCharLimit');
    }

    counter.html(characterCount);
  

  });


});