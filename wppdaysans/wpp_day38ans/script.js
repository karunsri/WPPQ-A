// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

// function union(arr1, arr2) {
//     // Combine the two arrays using the spread operator and create a Set to remove duplicates
//     return [...new Set([...arr1, ...arr2])];
//   }
//   console.log(union([1, 2, 3], [100, 2, 1, 10]));
  

  function union(arr1, arr2) {
    // Concatenate the two arrays
    let combined = arr1.concat(arr2);
  
    // Filter out duplicates by checking if the first occurrence index matches the current index
    return combined.filter((item, index) => combined.indexOf(item) === index);
  }
  
  console.log(union([1, 2, 3], [100, 2, 1, 10]));
  