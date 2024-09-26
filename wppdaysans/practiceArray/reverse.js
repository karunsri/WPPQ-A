const a = [1, 2, 3, 4, 5];
//  for(i=4; i>=0; i--){
//  console.log(a[i]);
//  }

// let a2= [];
// for(i=a.length-1; i>=0; i--){
//     a2.push(a[i])
//      console.log(a2);
//      }
 
let i = 2;
let j = 4;
  
while(i<j){
    // petform swapping
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    i++;
    j--;
}
console.log(a);


 
 

 