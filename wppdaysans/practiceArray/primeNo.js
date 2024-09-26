
let count = 0;
let fun = function (n) {

    //     for (let i=2;i<=Math.floor(n/2);i++) {

    //         if ((n % i) == 0) {
    //            return false;
    //         }
    //     }

    //     return true;

    // }

    // if (fun(15)) {
    //     console.log("This is Prime Number");
    // } else {
    //     console.log("This is Not Prime");
    for (i = 2; i < n; i++) {
        let prime = true;
        for (j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            count++;
        }
    }
    return count;
}
console.log(fun(20));

// We initialize primeCount to zero.
// The main loop runs from 2 to n-1. For each i in this range:
// Assume i is a prime number (isPrime = true).
// Check divisibility of i by any number j from 2 to √i (using j * j <= i).
// If i is divisible by any j, set isPrime to false and break out of the inner loop.
// If isPrime remains true, it means i is a prime number, so increment primeCount.
// Finally, return the count of prime numbers found.
