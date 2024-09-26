//  Write a JavaScript program to extract the first half of an even string. 


// Define a function named first_half with parameter str
function first_half(str) {
    // Check if the length of the string is even
    if (str.length % 2 == 0) {
        // Use the slice method to get the first half of the string
        return str.slice(0, str.length / 2);
    }
    // If the length is odd, return the original string
    return str;
}

// Call the function with sample arguments and log the results to the console
console.log(first_half("Python"));       // Outputs "Py"
console.log(first_half("JavaScript"));   // Outputs "Java"
console.log(first_half("PHP"));           // Outputs "PHP" s