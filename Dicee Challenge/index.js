function setDiceImgForHtmlElementWithIndex(index) { // index = 0
    var randomMath = Math.random();
    console.log(randomMath);
    var flooredValue = Math.floor(randomMath * 6);
    console.log("flooring: " + randomMath * 6);
    console.log(flooredValue);
    var randomNumber = flooredValue + 1;
    // I have random number between 1(incl.) - 6(incl.) in randomNumber1 variable
    
    var playerDiceImagePath = "images/dice" + randomNumber + ".png"; // images/dice4.png
    var htmlImgElement = document.querySelectorAll("img")[index]; // index = 0
    htmlImgElement.setAttribute("src", playerDiceImagePath);

    return randomNumber;
}

function playGame() {
    randomNumber1 = setDiceImgForHtmlElementWithIndex(0);
    randomNumber2 = setDiceImgForHtmlElementWithIndex(1);
    
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

document.getElementById("play-btn").addEventListener("click", playGame);
