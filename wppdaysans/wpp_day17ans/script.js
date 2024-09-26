// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// Note: 'a' will be replaced by 'b' or 'z' would be replaced by 'a'.


// Function to shift each alphabet character in the input string to the next character in the alphabet
function alphabet_char_Shift(str) {
    var all_chars = str.split(""); // Convert the input string into an array of characters
    for(var i = 0; i < all_chars.length; i++) { // Iterate over each character in the array
      var n = all_chars[i].charCodeAt() - 'a'.charCodeAt(); // Calculate the position of the character in the alphabet
      n = (n + 1) % 26; // Shift the position to the next character in the alphabet, considering circular nature
      all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt()); // Update the character with the shifted character
    }
    return all_chars.join(""); // Convert the array of characters back to a string and return
  }
  
  // Example usage
  console.log(alphabet_char_Shift("abcdxyz"));s