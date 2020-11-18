// var singleNumber = function (nums) {
//   let myMap = new Map();
//   nums.forEach((item) => {
//     if (myMap.has(item)) {
//       myMap.set(item, 2);
//     } else {
//       myMap.set(item, 1);
//     }
//   });
//   let result;

//   [...myMap.entries()].forEach((item) => {
//     if (item[1] == 1) {
//       result = item[0];
//     }
//   });
//   return result;
// };
// let n = [1, 2, 3, 1, 2, 3, 4];
// let result = singleNumber(n);
// console.log("result", result);


var intersect = function (nums1, nums2) {
  let tempMap = new Map()
  let result = []
  nums1.forEach(item => {
    let value = tempMap.get(item)
    if (value) {
      tempMap.set(item, ++value)
    } else {
      tempMap.set(item, 1)
    }
  })
  console.log(tempMap)

  nums2.forEach(item => {
    let value = tempMap.get(item)
    if (value > 0) {
      result.push(item)
      tempMap.set(item, --value)
    }
  })
  return result
};
let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2]
let result = intersect(nums1, nums2)
console.log('result', result)