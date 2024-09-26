const arr = [1, 2, 3]

let j = arr.length;

for(let i=0; i<j; i++){
   arr[j + i] = arr[i];
}

console.log(arr[i]);