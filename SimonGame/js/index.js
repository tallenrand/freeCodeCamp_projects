
var valid = false;
var strict = false;
var error = false;
var simonArray = [];
var playerArray = [];
const levelNums = 20;
var id, color, level = 0;

var buttonSounds = [
"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", 
"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",  
  ];

$(document).ready(function() {
  $("#countBoxNumbers").text("");
  $("#startButton").click(function() {
    strict = false;
    error = false;
    level = 0;
    level++;
    $("#countBoxNumbers").text(level);
    simonArray = []
    playerArray = [];
    simonSequence();
  })
  
  $(".touchpad").click(function() {
    if (valid === true) {
    id = $(this).attr("id");
    color = $(this).attr("class").split(" ")[1];
    userSequence();
    }
  });
  
  

  $("#strictButton").click(function() {
    level = 0;
    level++;
    simonArray = [];
    playerArray = [];
    if (strict === false && valid === true) {
    $('#strictNotActive').addClass('strictActive');
      strict = true;
         } else {
            strict = false;
    $('#strictNotActive').removeClass('strictActive');
    }
        simonSequence();
  })
   
  
  $('#switchButton').click(function() {
  if (valid === false) {
    $(this).addClass('rightOn');
    $('#countBoxNumbers').text("--");
    valid = true;
  } else {
    $(this).removeClass('rightOn');
    $('#countBoxNumbers').text("");
    $('#strictNotActive').removeClass('strictActive');
    valid = false;
    strict = false;
    }
  })
})

function userSequence() {
  playerArray.push(id);
    console.log(id+" "+color);
    addClassSound(id, color);
  
    if(!checkPlayerArray()) {
      if(strict === true) {
        console.log("strict");
        simonArray = [];
        level = 1;
      }
      error = true;
      displayError();
      playerArray = [];
      simonSequence();
    }
    
    else if(playerArray.length == simonArray.length && playerArray.length < levelNums) {
      level++;
      playerArray = [];
      error = false;
      console.log("start simon")
      simonSequence();
    }
    
    if(playerArray.length == levelNums) {
      displayWinner();
      resetGame();
    }
}

function simonSequence() {
  console.log("level "+level);
  $("#countBoxNumbers").text(level);
  if(!error) {
    getRandomNum();
  }
  if(error && strict) {
    getRandomNum();
  }
  var i = 0;
  var myInterval = setInterval(function() {
    id = simonArray[i];
    color = $('#'+id).attr("class");
    color = color.split(" ")[1];
    console.log(id+" "+color);
    addClassSound(id, color);
    i++;
    if(i == simonArray.length) {
      clearInterval(myInterval);
    }
  }, 1000);
}

function getRandomNum() {
  var random = Math.floor(Math.random() * 4);
  simonArray.push(random);
}

function addClassSound(id, color) {
  $("#"+id).addClass(color+"-active");
  playSound(id)
  setTimeout(function() {
    $("#"+id).removeClass(color+"-active");
  }, 500);
}

function checkPlayerArray() {
  for(var i = 0; i < playerArray.length; i++) {
    if(playerArray[i] != simonArray[i]) {
      return false;
    }
  }
  return true;
}

function displayError() {
  console.log("error");
  var counter = 0;
  var myError = setInterval(function() {
    $('#countBoxNumbers').text("ERR");
    counter++;
    if(counter == 3) {
      $("#countBoxNumbers").text(level);
      clearInterval(myError);
      playerArray = [];
      counter = 0;
    }
  }, 500);
}

function displayWinner() {
  var count = 0;
  var winInterval = setInterval(function() {
    count++;
    $("#countBoxNumbers").text("WIN");
    if(count == 5) {
      clearInterval(winInterval);
      $("#countBoxNumbers").text("--");
      count = 0;
    }
  }, 500);
}

function playSound(id) {
  var sound = new Audio(buttonSounds[id]);
  sound.play();
}

function resetGame() {
  playerArray = [];
  simonArray = [];
  level = 0;
  $("#countBoxNumber").text("--");
}