/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweet) {

  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const htmlTweet = `
    <article class="tweet">
    <header>
      <div class="userAvatar">
        <img src='${tweet.user.avatars}'>
        <p id="firstName">${tweet.user.name}</p>
      </div>
      <div class="userHandle" >
        <p>${tweet.user.handle}</p>
      </div>
    </header>
    <p class="tweetContent">${escape(tweet.content.text)}</p>
    <footer>
      <div class="contentFooter">
        <p>${moment(tweet.created_at).fromNow()}</p>
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </footer>
    </article>
    `;
  return htmlTweet;
};

const renderTweets = function(tweetData) {
  //create the html element for tweet
  $('#tweets-container').empty();
  for (let tweet of tweetData) {

    let $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }

};


$(document).ready(function() {

  //hide error message until triggered
  $('#error-message').hide();

  const loadTweets = function() {
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'GET'
    })
      .done((tweet) => {
        renderTweets(tweet);
      })
      .fail(() => console.log('Error!'))
      .always(() => console.log('Request completed'));
  };

  $('#tweet-form').on('submit', function(event) {
    event.preventDefault();

    $('#error-message').slideUp("slow");

    const specificTweet = $('#tweet-text').val().length;
    
    if (specificTweet > 140) {
      $('#error-message').html('<p>❌ Your tweet is too long, please keep it below 140 characters! ❌</p>');
      $('#error-message').slideDown("slow");
      return;
    }
    
    if (specificTweet === 0) {
      $('#error-message').html('<p>❌ Hey! Please input something in the field. ❌</p>');
      $('#error-message').slideDown("slow");
      return;
    }

    const formContent = $(this).serialize();
    
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'POST',
      data: formContent
    })
      .done(() => loadTweets())
      .fail(() => console.log('Error!'))
      .always(() => console.log('Request completed'));

    //After post complete - empty the tweet input area by replacing with string and reset the counter
    $('#tweet-text').val('');
    $('.counter').val(140);
  });
  
  loadTweets();


});