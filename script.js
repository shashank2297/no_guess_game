let randomno = Math.floor((Math.random() * 20) + 1);
let attempts = 20;
let highscore = 0;

document.getElementById("guesses").addEventListener("click", () => {

    let gnumb = parseInt(document.getElementById("no").value);

    if (!gnumb || gnumb > 20 || gnumb < 1) {
        document.getElementById("scoreres").textContent = "No Value or Invalid Number"
    } else if (gnumb === randomno) {
        document.getElementById("scoreres").innerHTML = "Congratulations! You guessed the correct number ";
        document.getElementById("qmark").innerHTML = gnumb;
        document.querySelector("body").style.backgroundColor = "green"
        if (attempts > highscore) {
            highscore = attempts;
            document.getElementById("hscore").innerHTML = "Highscore:" + highscore;
        }
    } else if (gnumb < randomno) {
        if (attempts > 1) {
            attempts = attempts - 1;
            document.getElementById("scoreres").innerHTML = "Too low. Try again.";
            document.getElementById("score").innerHTML = "Score: " + attempts;
        } else {
            document.getElementById("score").innerHTML = "Score: 0";
            document.getElementById("scoreres").innerHTML = "You lost the game";
        }
    } else {
        if (attempts > 1) {
            attempts = attempts - 1;
            document.getElementById("scoreres").innerHTML = "Too high. Try again.";
            document.getElementById("score").innerHTML = "Score: " + attempts;
        } else {
            document.getElementById("score").innerHTML = "Score: 0";
            document.getElementById("scoreres").innerHTML = "You lost the game";
        }
    }
})

function reset() {
    attempts = 20;
    randomno = Math.floor((Math.random() * 20) + 1);
    document.getElementById("scoreres").innerHTML = "Start guessing !";
    document.getElementById("qmark").innerHTML = "?";
    document.querySelector("body").style.backgroundColor = "black"
    document.getElementById("score").innerHTML = "Score: 20";
    document.getElementById("no").value = " ";
}