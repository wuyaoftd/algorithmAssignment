var plusOne = function (digits) {
  digits.unshift(0);
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10;
    if (digits[i]) {
      if (digits[0]) {
        return digits;
      } else {
        return digits.slice(1);
      }
    }
  }
};
let x = plusOne([9]);
console.log("x", x);
