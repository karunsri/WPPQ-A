// Write a JavaScript program to remove all characters from a given string that appear more than once.

// function removeDuplicateCharacters(str) {
//     // Create an object to store the frequency of each character
//     const charCount = {};
  
//     // First, count the frequency of each character in the string
//     for (let char of str) {
//       charCount[char] = (charCount[char] || 0) + 1;
//     }
  
//     // Now, construct a new string with only the characters that appear once
//     let result = '';
//     for (let char of str) {
//       if (charCount[char] === 1) {
//         result += char;
//       }
//     }
  
//     return result;
//   }
  
//   // Example usage
//   const input = "aabbcdeffgh";
//   const output = removeDuplicateCharacters(input);
//   console.log(output);  // Output: "cdegh"
  

function removeDuplicateCharacters(str) {
    return str
      .split('')
      .filter((char, index, arr) => arr.indexOf(char) === arr.lastIndexOf(char))
      .join('');
  }
  
  // Example usage
  const input = "aabbcdeffgh";
  const output = removeDuplicateCharacters(input);
  console.log(output);  // Output: "cdegh"
  