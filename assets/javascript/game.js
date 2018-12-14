// Defines initial variables responding to game fields and their values//
var wins = 0;
var losses = 0;       
var guessesLeft = 11;
var guessed = []
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// Starts the game upon pressing of any key//
document.onkeypress = function() {

//Defines additional variables for computer and user guesses//
var userGuess = event.key;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//Defines the conditions and respoding codes to be executed//
if (alphabet.indexOf(userGuess) > -1) {

    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 11;
        guessed = [];
    }

    if (userGuess != computerGuess) {
        guessed.push(userGuess);
        guessesLeft --;
    }

    if (guessesLeft < 1) {
        guessesLeft = 11;
        losses ++;
        guessed = [];   
    }
}

//Updates the values of each game field accoridng to game results and guesses// 
document.getElementById("wins").innerHTML = ("Wins: " + wins);
document.getElementById("losses").innerHTML = ("Losses: " + losses);
document.getElementById("guessesLeft").innerHTML = ("Guesses left: "  + guessesLeft);
document.getElementById("guessed").innerHTML = ("Your guesses so far: " + guessed);

};