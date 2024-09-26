//  Write a JavaScript program to count the number of vowels in a given string.

// Define a function named vowel_Count with parameter str
function vowel_Count(str) {
    // Use regular expression to replace all characters not in 'aeiou' with an empty string
    // and get the length of the resulting string, which is the count of vowels
    return str.replace(/[^aeiou]/g, "").length;
  }
  
  // Log the result of calling vowel_Count with the given strings to the console
  console.log(vowel_Count("Python"));
  console.log(vowel_Count("w3resource.com")); 


