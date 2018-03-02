var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

document.onkeyup = function(event)  {
    var playerGuess = event.key;
    lettersGuessed.push(playerGuess);
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (playerGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
    }

    else if ((playerGuess != computerGuess) && (guessesLeft > 1)) {
        guessesLeft = guessesLeft-1;
    }

    else    {
        losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
    }

var pageText = 
    "<p>Wins: " + wins + "<p>" +
    "<p>Losses: " + losses + "<p>" +
    "<p>Guesses remaining: " + guessesLeft + "<p>" +
    "<p>Letters guessed this round: " + lettersGuessed + "<p>";

    document.querySelector("#actual-game").innerHTML = pageText;
};

