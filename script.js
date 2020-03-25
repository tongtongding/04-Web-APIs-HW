var timeElement = document.querySelector("#timer");
var start = document.querySelector("#start");
var h1Element = document.querySelector("#h1Code");
var h5Element=document.querySelector("#h5Exp");
var quiz = document.querySelector("#quiz");


var secondsRemaining = 10;
var scores = 0;

start.addEventListener("click",function(){
    start.style.display ="none";
    h1Element.style.display="none";
    h5Element.style.display="none";
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




var lastQuestion = questions.length - 1;

var questions = [
    {
        question:"What is the HTML tag under which one can write the JavaScript code?",
        choiceA:"<javascript>",
        choiceB:"<scripted>",
        choiceC:"<script>",
        correct:"C", 
    },{
        question:"What is the HTML tag under which one can write the JavaScript code?",
        choiceA:"<javascript>",
        choiceB:"<scripted>",
        choiceC:"<script>",
        correct:"C", 

    },{
        question:"What is the HTML tag under which one can write the JavaScript code?",
        choiceA:"<javascript>",
        choiceB:"<scripted>",
        choiceC:"<script>",
        correct:"C", 
    }
];




