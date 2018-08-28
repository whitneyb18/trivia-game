//Define variables
var isStartPushed = false;
var userResponses = [];
var score = 0;
var incorrect = 0;
var noAnswer = 10;
var isFinished = false;
var timerValue = 45;
var t = 0;

//Define function that will get the users responses and change them into a score
function timerCountdown() {
  if (t == 0) t = setInterval(timerCountdown, 1000);

  $("#timer").text(timerValue);
  timerValue--;

  if (timerValue < 0) {
    $("#timer").text("Time's Up!");
    clearTimeout(t);
    ticker = 0;
    finishTrivia();
  }
}

function stopCounter() {
  clearTimeout(t);
  t = 0;
  timerValue++;
}

function startGame() {
  $("#startUpMenu").css("display", "none");
  $("#mainTriviaMenu").css("display", "block");
}

function getResponses(questionValue) {
  if ($("input[name=radioName]:checked", questionValue).val() == "correct") {
    score = score + 1;
    noAnswer = noAnswer - 1;
  }
  if ($("input[name=radioName]:checked", questionValue).val() == "incorrect") {
    incorrect = incorrect + 1;
    noAnswer = noAnswer - 1;
  }
}
function finishTrivia() {
  getResponses("#questionOne");
  getResponses("#questionTwo");
  getResponses("#questionThree");
  getResponses("#questionFour");
  getResponses("#questionFive");
  getResponses("#questionSix");
  getResponses("#questionSeven");
  getResponses("#questionEight");
  getResponses("#questionNine");
  getResponses("#questionTen");

  $("#score").text(score);
  $("#incorrect").text(incorrect);
  $("#noAnswer").text(noAnswer);

  $("#mainTriviaMenu").css("display", "none");
  $("#scoreMenu").css("display", "block");
}

function resetGame() {
  $("#scoreMenu").css("display", "none");
  $("#startUpMenu").css("display", "block");
}

//When start button is pushed game begins
$("#startButton").on("click", function() {
  startGame();
  timerCountdown();
});

//When the submit buttonis pushed or time runs out game ends
$("#submitButton").on("click", function() {
  finishTrivia();
  clearTimeout(t);
});
