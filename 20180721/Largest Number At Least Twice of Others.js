/**
 * @param {number[]} nums
 * @return {number}
 */
console.clear();
var dominantIndex = function (nums) {
  var max = Math.max(...nums);
  var temp = 0;
  for (var i = 0; i < nums.length; i++) {
    if (max < nums[i] * 2 && max != nums[i]) {
      return -1;
    } else {
      if (max === nums[i]) {
        temp = i;
      }
    }
  }
  return temp;
};

var nums = [3, 6, 1, 0]
console.log(dominantIndex(nums));


//Output: 1
