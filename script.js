var timeElement = document.querySelector("#timer");
var start = document.querySelector("#start");
var h1Element = document.querySelector("#h1Code");
var h5Element=document.querySelector("#h5Exp");
var quiz = document.querySelector("#quiz");
var intialInput = document.querySelector("#intial");
var initialForm=document.querySelector("#initialForm");
var submitInitial=document.querySelector("#submitInitial");


var message = document.querySelector("#message");



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
    
    
        if(secondsRemaining <= 0){
            clearInterval(intervalId);
            alert("Oops! Time out");
            secondsRemaining=0;
            timeOver();
        }

        timeElement.textContent = "Time: " + secondsRemaining + "s";
    },1000);
})


var questions = [
    {
        question:"What is the HTML tag under which one can write the JavaScript code?",
        choiceA:"A:<javascript>",
        choiceB:"B:<scripted>",
        choiceC:"C:<script>",
        correct:"C:<script>", 
    },{
        question:"Select the property used to create space between the element’s border and inner content?",
        choiceA:"A:spacing",
        choiceB:"B:border",
        choiceC:"C:padding",
        correct:"C:padding", 

    },{
        question:"Select the appropriate HTML tag for inserting a line break?",
        choiceA:"A:br",
        choiceB:"B:break",
        choiceC:"C:brbr",
        correct:"A:br", 
    },{
        question:"In CSS,select the property used to set the background color of an image?",
        choiceA:"A:color:background",
        choiceB:"B:background:color",
        choiceC:"C:background-color",
        correct:"C:background-color", 
    },{
        question:"Which of the following is a true statement for JavaScript callbacks?",
        choiceA:"A:A callback is a plain JavaScript function passed to some method as an argument or option.",
        choiceB:"B:Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.",
        choiceC:"C:Both are correct",
        correct:"C:Both are correct", 
    }
];



var lastQuestion = questions.length - 1;
 
var questionIndex = 0;

var q;

var allowSelection = false;

function showQuestions(){
        allowSelection=true;
        q = questions[questionIndex];
        document.getElementById("question").textContent = q.question;
        document.getElementById("a").textContent = q.choiceA;
        document.getElementById("b").textContent = q.choiceB;
        document.getElementById("c").textContent = q.choiceC;
        message.textContent="";

    };

document.getElementById("options").addEventListener("click",function(event){
    if(allowSelection===true){
        var userChoice = event.target.textContent;
 
        if(userChoice === q.correct){
            message.textContent="Correct! Good Job!";
        }else{
            message.textContent="Wrong!!";
            secondsRemaining=secondsRemaining-20;
        }
        if(questionIndex < lastQuestion){
        questionIndex++;
        setTimeout(showQuestions,1000);
        
      }
        else{
          timeOver();
        }
    }
   allowSelection=false;

});


function timeOver(){
    h1Element.style.display="block";
    h5Element.style.display="block";
    quiz.style.display="none";
     h1Element.textContent = "All Done!";
     h5Element.textContent = "Your final score is " + secondsRemaining;
    initialForm.style.display="block";
 
    

};

initialForm.style.display="none";

submitInitial.addEventListener("click",function(){
    window.location.href ='./scores.html';
});






