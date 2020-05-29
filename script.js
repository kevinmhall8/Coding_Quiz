
var questions = [
  {
    title: "Inside which HTML element can Javascript be input?",
    choiceA: "<js>",
    choiceB: "<scripting>",
    choiceC: "<script>",
    choiceD: "<javascript>",
    answer: "C"
  },
  {
    title: "What JavaScript syntax changes the content of an HTML element?",
    choiceA: "getElementByName",
    choiceB: "getElementById",
    choiceC: "getElementByStyle",
    choiceD: "getElementByElement",
    answer: "B"
  },
  {
    title: "Where can a link to a javascript page be applied in HTML?",
    choiceA: "Head",
    choiceB: "Head and Body",
    choiceC: "Body",
    choiceD: "Legs",
    answer: "B",
  },
  {
    title: "What is the correct syntax for referring to an external script called xxx.js?",
    choiceA: "<script src=\"xxx.js\">",
    choiceB: "<script name=\"xxx.js\">",
    choiceC: "<script href=\"xxx.js\">",
    choiceD: "<script=\"xxx.js\">",
    answer: "A"
  },
  {
    title: "How do you write \"Hello World\" in an alert box?",
    choiceA: "msg(\"Hello World\")",
    choiceB: "alertBox(\"Hello World\")",
    choiceC: "alert(\"Hello World\")",
    choiceD: "msgBox(\"Hello World\")",
    answer: "B"
  },
  {
    title: "How do you create a function in JavaScript?",
    choiceA: "function myFunction()",
    choiceB: "oh function, myFunction",
    choiceC: "function = myFunction()",
    choiceD: "function:myFunction",
    answer: "A"
  },
  {
    title: "How do you call a function named \"myFunction\"?",
    choiceA: "function.activate()",
    choiceB: "call myFunction()",
    choiceC: "call function myFunction()",
    choiceD: "myFunction()",
    answer: "D"
  },
  {
    title: "How can you add a comment in JavaScript?",
    choiceA: "// ",
    choiceB: "xx",
    choiceC: "Comment: ",
    choiceD: "ignoreThisItIsNotImportantPleaseIgnore",
    answer: "A"
  },
  {
    title: "Is JavaScript the same as Java?",
    choiceA: "Yes",
    choiceB: "No",
    choiceC: "Sometimes",
    choiceD: "Asbestos",
    answer: "B"
  },
  {
    title: "What event occurs when the user clicks on an HTML element?",
    choiceA: "onmouseover",
    choiceB: "onmouseclick",
    choiceC: "onclick",
    choiceD: "onchange",
    answer: "C"
  },
];

var score = 0;
var currentQuestion = 0;
var lastQuestion = questions.length - 1;
var timeLeft = 30;
var displayTimer = document.getElementById("timeGauge");
var displayQuestion = document.getElementById("question-text");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var grade = document.getElementById("grade");
var scoreList = document.getElementById("score-list");
var orderedList = $("<ol>")

var scores = [];
var right = $("#right")
var wrong = $("#wrong")

var name = document.getElementById("name");
var maxHighScores = 5;



$(document).ready(function () {

  $("#start-button").on("click", function () {
    $("#start-screen").hide();
    $("#quiz").show();
    showQuestion();
    countdown();
    startTimer();
  });

})
var timerId

function startTimer() {
  timerId = setInterval(countdown, 1000);
}

function showScore() {
  clearTimeout(timerId)
  $("#quiz").hide();
  $("#results-screen").show();
  finalScore()
}


function countdown() {
  if (timeLeft <= 0) {
    clearTimeout(timerId);
    timesUp();
  } else {
    displayTimer.innerHTML = "<br /> <h5>Time Remaining: " + timeLeft + "</h5>";
    timeLeft--;
  }
}


function finalScore() {
  grade.innerHTML = "<h2>" + score + " out of 10 </h2><br /><h5>"
}


function showQuestion() {
  let q = questions[currentQuestion];
  displayQuestion.innerHTML = "<h3>" + q.title + "</h3> <br>";
  choiceA.innerText = q.choiceA;
  choiceB.innerText = q.choiceB;
  choiceC.innerText = q.choiceC;
  choiceD.innerText = q.choiceD;
}


$("#save").on("click", function () {
  $("#results-screen").hide();
  scores = JSON.parse(localStorage.getItem("high-scores")) || []
  var initials = $(this).siblings("input").val();
  // var newScore = score + ":" + initials;
  var newScore = {initials:initials, score:score}
  

  //adding score to local storage and save
  scores.push(newScore);
  localStorage.setItem("high-scores", JSON.stringify(scores));
  
  scores.sort((a, b) => b.score - a.score);
  scores.splice(5)
  for (var i= 0; i < scores.length; i++) {
  var litag = document.createElement("li");

  litag.textContent = scores[i].initials+ ": " + scores[i].score;
  scoreList.appendChild(litag);
  }

  console.log(scoreList)
  $("#high-scores").show();
})

function timesUp() {
  $("#quiz").hide();
  $("#results-screen").show();
  $("#out-of-time").show();
  finalScore();
}


function checkAnswer(answer) {
  if (answer == questions[currentQuestion].answer) {
    score++;
    right[0].play()
  } else {
    timeLeft = timeLeft - 3;
    wrong[0].play()
  }
  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    showQuestion();
  } else {
    showScore();
  }
}

//new 5/8
function compare(a, b) {
  return (b.score - a.score);
}