
// function myfun(n) {
//     if (n == 0) {
//         return;
//     }
//     console.log(n)
//     myfun(n - 1);
//     console.log(n)
// }
// myfun(5);


// function fun(n) {
//     if (n == 0) {
//         return 1;
//     } else {
//         return n*fun(n-1);
//     }
    
    
// }
// console.log(fun(5));// fectorials


function pow(n1, n2) {
    if (n2 == 0) {
        return 1;
    } else {
        return n1*pow(n1,n2-1);
    }
    
    
}
console.log(pow(2, 5));



