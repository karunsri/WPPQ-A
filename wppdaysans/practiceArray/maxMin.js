const arr = [1, 2, 3, 4, 5, 6, 7, 10];

let min = arr[0];
let max = arr[0];


for (i = 0; i < arr.length; i++) {

    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }


}
console.log(min);
console.log(max);