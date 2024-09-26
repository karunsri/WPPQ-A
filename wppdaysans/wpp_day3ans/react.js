//--Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// // Generate a random integer between 1 and 10 (inclusive)
// var num = Math.ceil(Math.random() * 10);

// // Log the generated random number to the console
// console.log(num);

// // Prompt the user to guess a number between 1 and 10 (inclusive)
// var gnum = prompt('Guess the number between 1 and 10 inclusive');

// // Check if the guessed number matches the generated random number
// if (gnum == num)
//     // Log a message if the guessed number matches the random number
//     console.log('Matched');
// else
//     // Log a message if the guessed number does not match, and also provide the correct number
//     console.log('Not matched, the number was ' + num); 
// Generate a random integer between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the number
const userGuess = parseInt(prompt('Guess a number between 1 and 10'), 10);

// Check if the user's guess matches the random number
if (userGuess === randomNumber) {
  alert('Good Work');
} else {
  alert('Not matched');
}

// Log the random number for debugging purposes (optional)
console.log(`Random number was: ${randomNumber}`);

