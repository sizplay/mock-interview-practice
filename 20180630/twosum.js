/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  let tmp;
  for (let i = 0; i < nums.length; i++) {
    tmp = target - nums[i];
    if (map[tmp] === undefined) {
      map[nums[i]] = i;
    } else {
      return [map[tmp], i]
    }
  }
};
console.log(twoSum([3,2,4], 6));
