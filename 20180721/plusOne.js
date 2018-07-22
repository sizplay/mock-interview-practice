/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let idx = digits.length - 1;
  digits[idx] += 1;

  while(digits[idx] === 10) {
    digits[idx] = 0;

    if(idx === 0) {
      digits.unshift(1);
    } else {
      digits[idx - 1] += 1;
      idx -= 1;
    }
  }
  return digits
};
console.log(plusOne([9,9]));
//console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

// let idx = digits.length - 1;
// digits[idx] += 1;

// while (digits[idx] === 10) {
//   digits[idx] = 0;

//   if (idx === 0) {
//     digits.unshift(1);
//   } else {
//     digits[idx - 1] += 1;
//     idx -= 1
//   }
// }
