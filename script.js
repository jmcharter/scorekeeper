// Default scores
var maxscore = 5;
var P1 = 0;
var P2 = 0;


// Code commented in favour of trying the below
// var p1 = document.getElementById('p1ScoreDisplay');
// var p2 = document.getElementById('p2ScoreDisplay');


// Dictionary used to hold score variables.
var scoreDisplay = {
    "p1":document.getElementById('p1ScoreDisplay'),
    "p2":document.getElementById('p2ScoreDisplay')
};

//Takes user input from maxscore form, to overide maxscore variable
var scoreinput = document.getElementById('maxscore');

//Capture buttons from HTML and store in variables
var p1button = document.getElementById('p1button');
var p2button = document.getElementById('p2button');
var reset = document.getElementById('reset');


//Function to determine if a player has won and colour their score green accordingly
var winner = function(score, player){
    if (score === maxscore) {
        player.style.color = "green";
    }
};

//Increment player one score on click, if there is no winner yet
p1button.addEventListener("click", function(){
    if (P1 < maxscore && P2 < maxscore) {
        P1 ++;
        scoreDisplay.p1.innerHTML = P1;
        winner(P1, scoreDisplay.p1);
    }
});

//Increment player two score on click, if there is no winner yet
p2button.addEventListener("click", function(){
    if (P1 < maxscore && P2 < maxscore) {
        P2 ++;
        scoreDisplay.p2.innerHTML = P2;
        winner(P2, scoreDisplay.p2);
    }
});

//If the user amends the default score, set new maxscore accordingly
scoreinput.addEventListener("input", function(){
    maxscore = Number(scoreinput.value);
    document.getElementById('playingto').innerHTML = maxscore;

});

//Reset everything back to initial values
reset.addEventListener("click", function(){
    maxscore = 5;
    document.getElementById('playingto').innerHTML = maxscore;
    P1ScoreDisplay = 0;
    P2ScoreDisplay = 0;
    scoreDisplay.p1.innerHTML = P1ScoreDisplay;
    scoreDisplay.p2.innerHTML = P2ScoreDisplay;
    scoreDisplay.p1.style.color = "black";
    scoreDisplay.p2.style.color = "black";
    scoreinput.value = "";

});