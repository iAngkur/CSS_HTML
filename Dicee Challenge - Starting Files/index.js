// Function to generate a random dice roll
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice image and return its source
function updateDiceImage(imageIndex) {
    const randomNumber = rollDice();
    const randomDiceImage = `dice${randomNumber}.png`;
    const randomImageSource = `images/${randomDiceImage}`;
    const image = document.querySelectorAll("img")[imageIndex];
    image.setAttribute("src", randomImageSource);
    return randomNumber;
}

// Function to determine the winner
function determineWinner(player1Number, player2Number) {
    const heading = document.querySelector("h1");
    if (player1Number > player2Number) {
        heading.innerHTML = "Player 1 Wins!";
    } else if (player1Number < player2Number) {
        heading.innerHTML = "Player 2 Wins!";
    } else {
        heading.innerHTML = "Draw!!!";
    }
}

// Main logic
const player1Number = updateDiceImage(0);
const player2Number = updateDiceImage(1);
determineWinner(player1Number, player2Number);
