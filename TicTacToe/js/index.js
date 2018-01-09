
///Game Start
$(document).ready(startLoad);

function startLoad() {
  $('#rBtnX')[0].checked = true;
  $('#rBtnO')[0].checked = false;
}

var playerLetter = 'X';
var computerLetter = 'O';

turnCount = 0;

winningCombos = [
  ['0','1','2'],
  ['0','3','6'],
  ['0','4','8'],
  ['1','4','7'],
  ['3','4','5'],
  ['6','7','8'],
  ['6','4','2'],
  ['2','5','8'],
];

$('.gameCell').click(event => {
  if ($('#' + event.currentTarget.id).html() === '&nbsp;') {
    $('#' + event.currentTarget.id).html(playerLetter);
    turn = 'user';
    turnCount++;
    (turnCount > 4) ? getWinner() : computerMove();
  } else {
    return;
   }
});

function computerMove() {
  turn = "computer";
  var cellNames = ['0','1','2','3','4','5','6','7','8'];
  var corners = ['0','2','6','8'];
  var computerWin = '';
  var computerBlock = '';
  
  if (turnCount > 2) {
    winningCombos.map(t => {
      var a = $('#' + t[0]).html();
      var b = $('#' + t[1]).html();
      var c = $('#' + t[2]).html();
      
      if (a === computerLetter && b === a && c === '&nbsp;') {
        computerWin = t[2];
      } else if (a === computerLetter && b === '&nbsp;' && c === a) {
        computerWin = t[1];
      } else if (a === '&nbsp' && b === computerLetter && c === b) {
        computerWin = t[0];
      } else if (a === playerLetter && b === a && c === '&nbsp;') {
        computerBlock = t[2];
      } else if (a === playerLetter && b === '&nbsp;' && c === a) {
        computerBlock = t[1];
      } else if (a === '&nbsp;' && b === playerLetter && c === b) {
        computerBlock = t[0];
      }
    });
  }
  ///Select random square
  if (computerBlock.length < 1 && computerWin.length < 1) {
    var remainingSquares = cellNames.filter(function(event) {
      return $('#' + event).html() === '&nbsp;';
    });
    var computerBlock = remainingSquares[Math.floor(Math.random() * (remainingSquares.length))];
  }
  
  ///Computer letter added to square
  if (computerWin.length > 0) {
    $('#' + computerWin).html(computerLetter);
  } else {
    $('#' + computerBlock).html(computerLetter);
  }
    turnCount++;
    if (turnCount > 4) getWinner();
    return;
  }
function getWinner() {
      winningCombos.map(t => {
      var a = $('#' + t[0]).html(),
          b = $('#' + t[1]).html(),
          c = $('#' + t[2]).html();
        
    if (a !== '&nbsp;' && a === b && b === c) {
      var winner = turn;
      
      $('#' + t[0]).parent('td').addClass('blinkTile');
      $('#' + t[1]).parent('td').addClass('blinkTile');
      $('#' + t[2]).parent('td').addClass('blinkTile');
      $('.blinkTile').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      
      setTimeout(() => {
        $('.youWinText').html(a + ' Wins!');
        $('.youWinText').parent('div').addClass('textBoxColor');
      }, 500);
      
      turnCount = 0;
      return;
   }
});
  
  if (turnCount === 9) {
    $('.youWinText').html('Tie!')
    $('.youWinText').parent('div').addClass('textBoxColor');
    turnCount = 0;
    return;
  }
  
  if (turn !== 'computer') computerMove();
      return;
}
  
  $('#rBtnX').click(() => {
    if ($('#rBtnO')[0].checked === true)
        $('#rBtnO')[0].checked = false;
    
    playerLetter = 'X';
    computerLetter = 'O';
  });
  
  $('#rBtnO').click(() => {
    if ($('#rBtnX')[0].checked === true)
        $('#rBtnX')[0].checked = false;
    
    playerLetter = 'O';
    computerLetter = 'X';
  });