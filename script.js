var questions = [
    {
        title: "Inside which HTML element can Javascript be input?",
        choices: ["<js>", "<scripting>", "<script>", "<javascript>"],
        answer: 2
      },
      {
        title: "What JavaScript syntax changes the content of an HTML element?",
        choices: ["getElementByName", "getElementById", "getElementByStyle", "getElementByElement"],
        answer: 1
      },
      {
        title: "Where can a link to a javascript page be applied in HTML?",
        choices: ["Head", "Head and Body", "Body", "Legs"],
        answer: 1
      },
      {
        title: "What is the correct syntax for referring to an external script called xxx.js?",
        choices: ["<script src=\"xxx.js\">", "<script name=\"xxx.js\">", "<script href=\"xxx.js\">", "<script=\"xxx.js\">"],
        answer: 0
      },
      {
        title: "How do you write \"Hello World\" in an alert box?",
        choices: ["msg(\"Hello World\"", "alertBox(\"Hello World\"", "alert(\"Hello World\"", "msgBox(\"Hello World\""],
        answer: 1
      },
      {
        title: "How do you create a function in JavaScript?",
        choices: ["function myFunction()", "oh function, myFunction", "function = myFunction()", "function:myFunction"],
        answer: 2
      },
      {
        title: "How do you call a function named \"myFunction\"?",
        choices: ["function.activate()", "call myFunction()", "call function myFunction()", "myFunction()"],
        answer: 3
      },
      {
        title: "How can you add a comment in JavaScript?",
        choices: ["// ", "xx", "Comment: ", "ignoreThis"],
        answer: 0
      },
      {
        title: "Is JavaScript the same as Java?",
        choices: ["Yes", "No", "Sometimes", "Only on Tuesdays"],
        answer: 1
      },  
      {
        title: "What event occurs when the user clicks on an HTML element?",
        choices: ["onmouseover", "onmouseclick", "onclick", "onchange"],
        answer: 2
      },
    ];
    

let score = 0;
let currentQuestion = 0;

$(document).ready(function() {

$("#start-button").on("click", function(){
    $("#start-screen").hide();
    $("#quiz").show();
    showQuestion();
});

}
)


function showQuestion(){
  let q = questions[currentQuestion];
  questions.innerHTML = "<h2>" + q.title + "</h2> <br>";

  $("#question-text").append(questions.innerHTML);
  for (var a = 0; a < q.choices.length; a++) {
    $("#choices-buttons").append("<button>" + q.choices[a] + "</button> <br>");

    if (q.choices.string === answer) {
      score += 1
    } else {}
  }
}
