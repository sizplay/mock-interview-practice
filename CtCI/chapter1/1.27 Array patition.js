
const sample = [-470, 66, -4835, -5623];

var arrayPairSum = function (nums) {
  nums.sort((x,y) => x - y);
  var result = 0;
  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
  }
  return result;
};
console.log(arrayPairSum(sample))
//-6093
