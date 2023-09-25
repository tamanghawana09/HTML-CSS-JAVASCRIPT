var min = 1;
var max = 100;
var guessnum = getRandom(min, max);
guessnum = parseInt(guessnum);
function game() {
    for (i = 0; i < 5; i++) {
        var num = document.getElementById("number").value;
        num = parseInt(num);
        
        if (num === guessnum) {
            document.getElementById("guess").innerHTML = "Correct Answer!";
            break; 
        } else if (num === 0 ) {
            document.getElementById("guess").innerHTML = "Invalid input. Please enter a number.";
        } else if (num > guessnum) {
            document.getElementById("guess").innerHTML = "You have guessed a higher number.";
        } else {
            document.getElementById("guess").innerHTML = "You have guessed a lower number.";
        }
        document.getElementById("guess").innerHTML = "";
        
        if (i < 5 - 1) {
            document.getElementById("number").value = ""; 
        }
        if (i == 5 && num != guessnum) {
            document.getElementById("result").innerHTML = "You've used all your attempts. The correct answer was " + guessnum;
           alert("Your 5 attempts is finished");
        }

    }
    document.getElementById("result").innerHTML = guessnum;
    
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
