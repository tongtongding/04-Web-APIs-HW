var localStorage = window.localStorage;
var scoreAndInitial = document.querySelector("#scoreAndInitial");
var gobackButton = document.querySelector("#goBackButton");


var userScore = localStorage.getItem("scores");
var userInitial = localStorage.getItem("initials");
var leaderBoard = localStorage.getItem("leaderBoard");



if(leaderBoard){
    leaderBoard = JSON.parse(leaderBoard);
}else{
    leaderBoard=[];
};

var user = {
    initial:userInitial,
    score: userScore
}

leaderBoard.push(user);
localStorage.setItem("leaderBoard",JSON.stringify(leaderBoard));


for(var i=0; i<leaderBoard.length;i++){
    var newLi1Element = document.createElement("li");
    newLi1Element.innerHTML =leaderBoard[i].initial + leaderBoard[i].score;
    scoreAndInitial.appendChild(newLi1Element); 

};

gobackButton.addEventListener("click",function{
    var newAElement = document.createElement("a");
    newAElement.

})


