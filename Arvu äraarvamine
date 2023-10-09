<!DOCTYPE html>
<html>
<head>
    <title>Guess the Number Game</title>
</head>
<body>
    <h1>Welcome to the Guess the Number game!</h1>
    <p>I've selected a random number between 1 and 100. Try to guess it!</p>
    <p>Enter your guess: <input type="number" id="guess" min="1" max="100"></p>
    <button id="checkButton">Check</button>
    <p id="message"></p>

    <script src="guess-the-number.js"></script>
</body>
</html>
// Generate a random number between 1 and 100
const random_number = Math.floor(Math.random() * 100) + 1;

// Initialize the number of attempts
let attempts = 0;

// Function to handle user guesses
function checkGuess() {
    const user_guess = parseInt(document.getElementById("guess").value);
    attempts++;

    if (user_guess < 1 || user_guess > 100 || isNaN(user_guess)) {
        document.getElementById("message").textContent = "Please enter a valid number between 1 and 100.";
    } else if (user_guess < random_number) {
        document.getElementById("message").textContent = "Too low! Try a higher number.";
    } else if (user_guess > random_number) {
        document.getElementById("message").textContent = "Too high! Try a lower number.";
    } else {
        document.getElementById("message").textContent = `Congratulations! You've guessed the number ${random_number} in ${attempts} attempts!`;
        document.getElementById("guess").disabled = true;
        document.getElementById("checkButton").disabled = true;
    }
}

// Add event listener for the "Check" button
document.getElementById("checkButton").addEventListener("click", checkGuess);

