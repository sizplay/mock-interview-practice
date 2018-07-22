/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let sum = 0;
  let acc = 0;

  nums.forEach(num => {
    sum += num;
  });

  for (let i = 0; i < nums.length; i++) {
    let pivot = nums[i];
    if (acc === sum - acc - pivot)
      return i;
    else
      acc += pivot;
  }
  return -1;
}
