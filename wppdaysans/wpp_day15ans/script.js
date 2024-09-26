//  Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3


// Define a function named sum_three that takes an array of three numbers as a parameter
function sum_three(nums) {
    // Return the sum of the three numbers using array indexing
    return nums[0] + nums[1] + nums[2];
}

// Call the function with different arrays and log the results to the console
console.log(sum_three([10, 32, 20]));
console.log(sum_three([5, 7, 9]));
console.log(sum_three([0, 8, -11]));