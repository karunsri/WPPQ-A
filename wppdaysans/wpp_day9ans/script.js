//--Write a JavaScript program to find the closest value to 100 from two numerical values
// const num1 = 95;
// const num2 = 105;

function closestTo100(num1, num2) {
    // Calculate the absolute differences from 100
    const diff1 = Math.abs(num1 - 100);
    const diff2 = Math.abs(num2 - 100);

    // Compare the differences and return the closest value
    if (diff1 < diff2) {
        return num1;
    } else if (diff2 < diff1) {
        return num2;
    } else {
        // If both differences are equal
        return num1; // or return num2
    }
}
console.log(`The number closest to 100 is: ${closestTo100(95, 105)}`);
