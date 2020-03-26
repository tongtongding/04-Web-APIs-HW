var timeElement = document.querySelector("#timer");
var start = document.querySelector("#start");
var h1Element = document.querySelector("#h1Code");
var h5Element=document.querySelector("#h5Exp");
var quiz = document.querySelector("#quiz");
var choiceA = document.querySelector("#a");
var choiceB = document.querySelector("#b");
var choiceC = document.querySelector("#c");
var message = document.getElementById("message");



var secondsRemaining = 60;
var scores = 0;

start.addEventListener("click",function(){
    start.style.display ="none";
    h1Element.style.display="none";
    h5Element.style.display="none";
    showQuestions();
    quiz.style.display="block";
   

    var intervalId = setInterval(function(){
        secondsRemaining--;
        timeElement.textContent = "Time: " + secondsRemaining + "s";
    
        if(secondsRemaining === 0){
            clearInterval(intervalId);
            alert("Time out");
    
            var MainDiv = document.createElement("div");
            var h2Element = document.createElement("h2");
            h2Element.textContent = "All Done!";
            MainDiv.appendChild(h2Element);
    
        }
    },1000);
})


var questions = [
    {
        question:"What is the HTML tag under which one can write the JavaScript code?",
        choiceA:"<javascript>",
        choiceB:"<scripted>",
        choiceC:"<script>",
        correct:"<script>", 
    },{
        question:"fvsfgsfdgdfhich one can write the JavaScript code?",
        choiceA:"<javascript>",
        choiceB:"<scripted>",
        choiceC:"<script>",
        correct:"<script>", 

    },{
        question:"Wsgfsdghyunder which one can write the JavaScript code?",
        choiceA:"<javascript>",
        choiceB:"<scripted>",
        choiceC:"<script>",
        correct:"<script>", 
    }
];


// var questionsElement = document.createElement("p");
// questionsElement.textContent = questions;

// quiz="";

// quiz.push(questions);

var lastQuestion = questions.length - 1;
 
var questionIndex = 0;

var q;

function showQuestions(){
        q = questions[questionIndex];
        document.getElementById("question").textContent = q.question;
        document.getElementById("a").textContent = q.choiceA;
        document.getElementById("b").textContent = q.choiceB;
        document.getElementById("c").textContent = q.choiceC;

    };

document.getElementById("options").addEventListener("click",function(event){
 var userChoice = event.target.textContent;
 
  if(userChoice === q.correct){
      message.textContent="Correct!";
  }else{
      message.textContent="Wrong!!";
      secondsRemaining=secondsRemaining-20;
  }
  questionIndex++;
  showQuestions();
});






