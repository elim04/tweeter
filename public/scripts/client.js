/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  
  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1611533014698
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1611619414698
    }
  ]
    
  const createTweetElement = function(tweet) {

    const htmlTweet = `
    <article class="tweet">
    <header>
      <div class="leftSide">
        <img src='${tweetData[0].user.avatars}'>
        <p id="firstName">${tweetData[0].user.name}</p>
      </div>
      <div class="rightSide" >
        <p>${tweetData[0].user.handle}</p>
      </div>
    </header>
    <p class="tweetContent">${tweetData[0].content.text}</p>
    <footer>
      <div class="contentFooter">
        <p>${tweetData[0].created_at}</p>
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </footer>
    </article>
    `
    return htmlTweet;
  };

  let $tweet = createTweetElement(tweetData)

  console.log($tweet);
  $('#tweets-container').append($tweet);
});