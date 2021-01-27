/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const createTweetElement = function(tweet) {

  if (tweet.length > 140) {
    alert("Tweet is too long, please reduce number of characters to 140 and under... Thank you.");
    
  }
  const htmlTweet = `
    <article class="tweet">
    <header>
      <div class="leftSide">
        <img src='${tweet.user.avatars}'>
        <p id="firstName">${tweet.user.name}</p>
      </div>
      <div class="rightSide" >
        <p>${tweet.user.handle}</p>
      </div>
    </header>
    <p class="tweetContent">${tweet.content.text}</p>
    <footer>
      <div class="contentFooter">
        <p>${tweet.created_at}</p>
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
  for (let tweet of tweetData) {
    let $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }

};


$(document).ready(function() {

  $('#tweet-form').on('submit', function(event) {

    event.preventDefault();

    const formContent = $(this).serialize();
    console.log(formContent)
    
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'POST',
      data: formContent
    })
    .done((result) => console.log(result))
    .fail(() => console.log('Error!'))
    .always(() => console.log('Request completed'))

  });


  const loadTweets = function(tweetData) {
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'GET'
    })
    .done((tweet) => { 
      renderTweets(tweet);
    })
    .fail(() => console.log('Error!'))
    .always(() => console.log('Request completed'))
  };

  loadTweets()



});