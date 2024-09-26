//--Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. 

// // Define a function named test37 that takes a parameter x
// function test37(x) {
//     // Check if x is divisible by 3 or 7
//     if (x % 3 == 0 || x % 7 == 0) {
//       // If true, return true
//       return true;
//     } 
//     // If not divisible by 3 or 7, return false
//     else {
//       return false;
//     }
//   }
  
//   // Log the result of calling the test37 function with the argument 12 to the console
//   console.log(test37(12));
  
//   // Log the result of calling the test37 function with the argument 14 to the console
//   console.log(test37(14));
  
//   // Log the result of calling the test37 function with the argument 10 to the console
//   console.log(test37(10));
  
//   // Log the result of calling the test37 function with the argument 11 to the console
//   console.log(test37(11)); 
  
function test37(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));