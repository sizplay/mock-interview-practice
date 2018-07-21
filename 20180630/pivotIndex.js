const nums = [1, 7, 3, 6, 5, 6];

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

console.log(pivotIndex(nums));
