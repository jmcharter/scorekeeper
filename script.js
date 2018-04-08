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
var scoreinput = document.getElementById('scoreinput');

//Capture buttons from HTML and store in variables
var p1button = document.getElementById('p1button');
var p2button = document.getElementById('p2button');
var scoreplus = document.getElementById('scoreplus');
var scoreminus = document.getElementById('scoreminus');
var reset = document.getElementById('reset');


//Function to determine if a player has won and colour their score green accordingly
var winner = function(score, player){
    if (score === maxscore) {
        player.classList.add("winner")
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


//Increment maxscore on click
scoreplus.addEventListener("click", function(){
    maxscore++;
    document.getElementById('playingto').innerHTML = maxscore;
    scoreDisplay.p1.classList.remove("winner");
    scoreDisplay.p2.classList.remove("winner");

});

//Decrement maxscore on click
scoreminus.addEventListener("click", function(){
    if (maxscore > P1 && maxscore > P2) {
        maxscore--;
        document.getElementById('playingto').innerHTML = maxscore;
        scoreDisplay.p1.classList.remove("winner");
        scoreDisplay.p2.classList.remove("winner");
    }
});


//Reset everything back to initial values
reset.addEventListener("click", function(){
    maxscore = 5;
    document.getElementById('playingto').innerHTML = maxscore;
    P1 = 0;
    P2 = 0;
    scoreDisplay.p1.innerHTML = P1;
    scoreDisplay.p2.innerHTML = P2;
    scoreDisplay.p1.classList.remove("winner");
    scoreDisplay.p2.classList.remove("winner");
    scoreinput.value = "";

});