const arr = [1, 2, 2, 3, 4];

const twoSum = (arr, target) => {
  const obj = {}, results = [];
  for (let num of arr) {
    if (!obj[num]) obj[target - num] = num;
    else results.push([num, obj[num]]);
  }
  return results;
}

//console.log('twoSum(arr,4) :', twoSum(arr, 4));

const twoSum2 = (array, target) => {
  const pairs = [], store = [];
  for (let num of array) {
    if (store.indexOf(target - num) !== -1) pairs.push([num, target - num]);
    console.log('store, pairs :', store, pairs);
    store.push(num);
  }

  return pairs;
};
console.log('twoSum(arr,4) :', twoSum2(arr, 4));
