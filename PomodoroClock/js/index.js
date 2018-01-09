$(document).ready(function() {
  
  var timerTime;
  var breakTime;
  var allTimes;
  
  var timerLength = 25;
  var timerText= 'Time';
  
  var breakLength = 5;
  var breakText= 'Break';
  
  ///Set Timer buttons
  $('#timerUp').click(function() {
    if (timerLength < 120) {
      timerLength++
      $('#timerTime').text(timerLength + ':00');
      $('#timerText').text(timerText);
    }
  })
  $('#timerDown').click(function() {
    if (timerLength > 0) {
      timerLength--
      $('#timerTime').text(timerLength + ':00');
      $('#timerText').text(timerText);
    }
  })
  
  ///Set Break buttons
    $('#breakUp').click(function() {
    if (breakLength < 30) {
      breakLength++
      $('#breakTime').text(breakLength + ':00');
      $('#breakText').text(breakText);
    }
  })
  $('#breakDown').click(function() {
    if (breakLength > 0) {
      breakLength--
      $('#breakTime').text(breakLength + ':00');
      $('#breakText').text(breakText);
    }
  })
  
  $('#start').click(function() {
    document.getElementById("clockFaceGo").style.background = "#1976D2";
    var state = "timer";
    $('#minutes').text(timerLength);
    var secondsNum = 0;
    $('#seconds').text("0"+secondsNum);
    $('#timeTextFace').text("Work!"); /*This will say "Timer"*/
    timerTime = setInterval(((timerLength * 60)/100)*1000);
    
    var countdownSeconds = function() {
      if (secondsNum <= 0 && timerLength <= 0) {
        if(state == "timer" && secondsNum <= 0) {
          document.getElementById("clockFaceGo").style.background = "#00C853";
          state = "break";
          clearInterval(timerTime);
          breakTime = setInterval(((breakLength * 60)/100)*1000);
          $('#timeTextFace').text("Break!");
          $('#minutes').text(breakLength);
          secondsNum = 0;
          $('#seconds').text("0"+secondsNum);
        }
         else if (secondsNum <= 0 && breakLength <= 0) {
           clearInterval(breakTime);     
        }
        else if (secondsNum <= 0) {
          secondsNum = 59;
          if (breakLength > 0) {
            breakLength--;
            $('#minutes').text(breakLength);
            $('#seconds').text(secondsNum);
          }
          else {
            $('#seconds').text(secondsNum);
          }
        } /*Error here*/
        
        else {
          secondsNum--
          if (secondsNum < 10) {
            $('#seconds').text("0"+secondsNum);
          }
          else {
            $('#seconds').text(secondsNum);
          }
        }
      }
        
        
    else if (secondsNum <= 0) {
      secondsNum = 59;
      if (timerLength > 0) {
          timerLength--;
        $('#minutes').text(timerLength);
        $('#seconds').text(secondsNum);
        }
      else {
        $('#seconds').text(secondsNum);
      }
    }
      else {
        secondsNum--
        if(secondsNum < 10) {
          $('#seconds').text("0"+secondsNum);
        }
        else {
          $('#seconds').text(secondsNum);
        }
      }
    };
    allTimes = setInterval(countdownSeconds, 1000);
    
   });
    
    $('#stop').click(function() {
      clearInterval(allTimes);
      clearInterval(timerTime);
      clearInterval(breakTime);
      timerTime = $('#timeTextFace').text();
      breakLength = $('#breakTime').text();
    });
    
  });