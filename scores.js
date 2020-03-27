var localStorage = window.localStorage;
var scoreAndInitial = document.querySelector("#scoreAndInitial");
var gobackButton = document.querySelector("#goBackButton");
var clearScores = document.querySelector("#clearScores");


var userScore = localStorage.getItem("scores");
var userInitial = localStorage.getItem("initials");
var leaderBoard = localStorage.getItem("leaderBoard");



if(leaderBoard){
    leaderBoard = JSON.parse(leaderBoard);
}else{
    leaderBoard=[];
};


if(userScore && userInitial){
    var user = {
        initial:userInitial,
        score: userScore
    }
    
    leaderBoard.push(user);
    
};

localStorage.setItem("leaderBoard",JSON.stringify(leaderBoard));

leaderBoard.sort(function(a,b){
    return b.score - a.score;
});


if(leaderBoard.length>0){
    for(var i=0; i<leaderBoard.length;i++){
        var newLi1Element = document.createElement("li");
        newLi1Element.innerHTML =leaderBoard[i].initial + " - " + leaderBoard[i].score;
        scoreAndInitial.appendChild(newLi1Element); 
    
    };

}


clearScores.addEventListener("click", function(){
    leaderBoard=[];
    localStorage.removeItem("scores");
    localStorage.removeItem("initials");
    localStorage.removeItem("leaderBoard");
    location.reload();
});


