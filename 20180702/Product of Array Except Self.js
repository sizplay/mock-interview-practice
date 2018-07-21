/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr = nums[i];
    console.log(nums)
  }
};


const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums))
