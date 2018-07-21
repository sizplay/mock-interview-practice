/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (nums.length === 1) return false;
  for (let i = 0; i < nums.length-1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if(i !== j) {
        if (nums[i] === nums[j]) return true;
      }
    }
  }
  return false;
};

var containsDuplicate = (nums) => new Set(nums).size !== nums.length;

var containsDuplicate = function (nums) {
  let counter = {};
  for (let i = 0; i < nums.length; i++) {
    if (counter[nums[i]]) {
      return true;
    } else {
      counter[nums[i]] = true;
    }
  }
  return false;
};

const nums = [1, 2, 3, 4, 1];

console.log(containsDuplicate2(nums))
