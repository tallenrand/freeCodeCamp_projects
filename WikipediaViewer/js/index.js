var randomUrl = "https://en.wikipedia.org/wiki/Special:Random";
var wikiApi = "https://en.wikipedia.org/wiki/api.php";
var searchInput = "wikisearch";

$(document).ready(function() {
  ///Make the textBox clickable; shows random Wikipedia article
  $('#textBox').click(function() {
    window.open(randomUrl);
  })
  })

var arrResults = [];
var html = '';

function Result(title, snippet) {
  this.title = title;
  this.snippet = snippet;
}
///Access wikipedia API
function search() {
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#searchBox').val(),
    dataType: 'jsonp',
    type: 'POST',
    success: function(data) {
    $('.wordSpace').empty();
    
    arrResults.length = 0;
    var resArr = data.query.search;
      
    ///Set up results for viewing in #wordSpace
    for (var result in resArr) {
      arrResults.push(new Result(resArr[result].title, resArr[result].snippet));
        html = '<div id="articles" class="well"><a href="https://en.wikipedia.org/wiki/' + resArr[result].title + '"target="_blank"><h3>' + resArr[result].title + '</h3><p>' + resArr[result].snippet + '</p></a></div>';

        // Search results in this div
        $('.wordSpace').append(html);
      }
    }
  });

  // Searchbar: display results
  if ($('#searchBox').val().length > 0) {
    $('.articles').css('display', 'none');

  } else if ($('#searchBox').val().length < 1) {
    // display in #wordSpace
    $('.articles').css('display', 'block');
  }

  // Keystrokes in search bar
  $('#searchBox').unbind('keyup');
  $('#searchBox').keyup(function() {
    search();
  });
}

$('#searchBox').keyup(function() {
  search();
});