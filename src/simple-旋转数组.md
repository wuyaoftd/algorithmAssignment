[simple-旋转数组](https://leetcode-cn.com/problems/rotate-array/solution/xuan-zhuan-shu-zu-by-leetcode/)

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let length = nums.length;
  let kNum = k % length;
  for (let i = 0; i < kNum; i++) {
    nums.unshift(nums.pop());
  }
  // nums.splice(0, 0, ...nums.splice(nums.length - k));
  // nums.unshift(...nums.splice(nums.length-k))
};
```
