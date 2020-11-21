/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   // 不知道这个哪里不对
//   let length = nums.length;
//   nums = [...nums].filter((item) => {
//     return item !== 0;
//   });
//   let defLength = length - nums.length;
//   for (let i = 0; i < defLength; i++) {
//     nums.push(0);
//   }
//   return nums;
// };

var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

let result = moveZeroes([0, 1, 0, 3, 12]);
console.log("res", result);
