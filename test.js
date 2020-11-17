var singleNumber = function (nums) {
  let myMap = new Map();
  nums.forEach((item) => {
    if (myMap.has(item)) {
      myMap.set(item, 2);
    } else {
      myMap.set(item, 1);
    }
  });
  let result;

  [...myMap.entries()].forEach((item) => {
    if (item[1] == 1) {
      result = item[0];
    }
  });
  return result;
};
let n = [1, 2, 3, 1, 2, 3, 4];
let result = singleNumber(n);
console.log("result", result);
