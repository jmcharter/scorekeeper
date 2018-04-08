var maxscore = 5;

var P1Score = 0;
var P2Score = 0;

// var p1 = document.getElementById('p1score');
// var p2 = document.getElementById('p2score');

var scoreDisplay = {
    "p1":document.getElementById('p1score'),
    "p2":document.getElementById('p2score')
};

var scoreinput = document.getElementById('maxscore');

var p1button = document.getElementById('p1button');
var p2button = document.getElementById('p2button');
var reset = document.getElementById('reset');



var winner = function(score, player){
    if (score === maxscore) {
        player.style.color = "green";
    }
};

p1button.addEventListener("click", function(){
    if (P1Score < maxscore && P2Score < maxscore) {
        P1Score ++;
        scoreDisplay.p1.innerHTML = P1Score;
        winner(P1Score, scoreDisplay.p1);
    }
});

p2button.addEventListener("click", function(){
    if (P1Score < maxscore && P2Score < maxscore) {
        P2Score ++;
        scoreDisplay.p2.innerHTML = P2Score;
        winner(P2Score, scoreDisplay.p2);
    }
});

scoreinput.addEventListener("input", function(){
    maxscore = Number(scoreinput.value);
    document.getElementById('playingto').innerHTML = maxscore;

});


reset.addEventListener("click", function(){
    maxscore = 5;
    document.getElementById('playingto').innerHTML = maxscore;
    P1Score = 0;
    P2Score = 0;
    scoreDisplay.p1.innerHTML = P1Score;
    scoreDisplay.p2.innerHTML = P2Score;
    scoreDisplay.p1.style.color = "black";
    scoreDisplay.p2.style.color = "black";
    scoreinput.value = "";

});