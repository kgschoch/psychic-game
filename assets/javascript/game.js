// I had so much trouble with this assignnment. I am getting extra outside help from a tutor to learn, understand, and write a working program like this with javascript. // 
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesTried = 0;
var guessesLeft = 9;  
var currentGuesses = [];             
var userGuess = document.getElementById("userGuess");   
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guesses = document.getElementById("guesses");  

      document.onkeyup = function(event) {
        var userGuess = event.key;
        var randomAlphabet =  alphabet[Math.floor(Math.random() * alphabet.length)];
        currentGuesses.push(userGuess);
        document.write("your current Guesses " + currentGuesses);         
        if (guessesTried <=  8){       

            if (userGuess === randomAlphabet){
            wins++;                      
             }

            else if (userGuess != randomAlphabet) {
            guessesTried++;
            guessesLeft--;                                     
            }        
            document.write("Guesses Tried " + guessesTried);
            document.write("guesses left " + guessesLeft);
        }    

        if (guessesTried === 9){
            losses++;
            currentGuesses = [];
            guessesTried = 0;
            guessesLeft = 9;
            }    
    };