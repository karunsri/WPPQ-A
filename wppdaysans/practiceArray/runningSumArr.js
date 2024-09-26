// const nums = [1, 2, 3, 4, 5];

// const ans = new Array(nums.length).fill(0);

// // Brute Force Solution

// for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j <= i; j++) {
//         ans[i] = ans[i] + nums[j];
//     }
// }
// console.log(ans);

//optimal approach

const nums = [1, 2, 3, 4, 5];
//const ans = new Array(nums.length);


for(let i = 1; i < nums.length; i++){
    nums[i] = nums[i-1] + nums[i];
    //nums[1] = nums[0] + nums[1]
    //nums[2] = nums[1] + nums[2]
}
console.log(nums);