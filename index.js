var quotes = [{
    quote: '"Success is walking from failure to failure with no loss of enthusiasm."',
    name: "-Winston Churchill"
}, {
    quote: '"Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them."',
    name: "-Vaibhav Shah"
}, {    
    quote: '"Try not to become a person of success, but rather try to become a person of value."',
    name: "-Albert Einstein"
}, {    
    quote: '"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change."',
    name: "-Charles Darwin"
}, {        
    quote: '"The distance between insanity and genius is measured only by success."',
    name: "-Bruce Feirstein"
}, {    
    quote: '"There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed."',
     name: "-Ray Goforth"
}, {   
    quote: '"Courage is resistance to fear, mastery of fear -- not absence of fear."',
     name: "-Mark Twain"
}, {    
     quote: '"Only put off until tomorrow what you are willing to die having left undone."',
     name: "-Pablo Picasso"
}, {    
     quote: '"Success is the sum of small efforts, repeated day in and day out."',
    name: "-Robert Collier"
}, {    
     quote: '"Twenty years from now, you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."',
    name: "-Mark Twain"
}, {    
     quote: '"The successful warrior is the average man, with laserlike focus."',
    name: "-Bruce Lee"
}, {    
     quote: '"Successful people do what unsuccessful people are not willing to do. Don\'t wish it were easier; wish you were better."',
    name: "-Jim Rohn"
}, {    
     quote: '"You may have to fight a battle more than once to win it."',
    name: "-Margaret Thatcher"
}, {    
     quote: '"Many of life\'s failures are people who did not realize how close they were to success when they gave up."',
     name: "-Thomas A. Edison"
}, {   
     quote: '"Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential."',
    name: "-John Maxwell"
}, {    
     quote: '"Whenever you see a successful business, someone once made a courageous decision."',
    name: "-Peter F. Drucker"
  }, {    
     quote: '""The only people with whom you should try to get even are those who have helped you."',
     name: "-John E. Southard"
}, {   
     quote: '"You wouldn\'t worry so much about what others think of you if you realized how seldom they do."',
    name: "-Eleanor Roosevelt" 
  }, {   
     quote: '"If you think you can, you can. If you think you can\'t, you\'re right!"',
    name: "-Abraham Lincoln"  
}];


$(document).ready(function() {
  
  $('#newQuoteButton').click(function() {
    var quotesLength = quotes.length;
    var rand = Math.floor(Math.random() * quotesLength);
    $("#quoteText").text(quotes[rand].quote);
    $("#authorText").text(quotes[rand].name);
});
  
  $('#tweetButton').click(function() {
    window.open('https://twitter.com/intent/tweet?text=' + $('#quoteText').text() + " " + $('#authorText').text());
  });
  
});