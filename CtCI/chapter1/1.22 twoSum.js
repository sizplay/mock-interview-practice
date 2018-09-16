const arr = [1, 2, 2, 3, 4];

const twoSum3 = (arr, target) => {
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


const numbers = [2, 7, 11, 15], target = 9;

var twoSum = function (numbers, target) {
  const obj = {}, result = [];
  for (let i = 0; i < numbers.length; i++) {
    if(target - numbers[i] !== numbers[i])
    !obj[numbers[i]] ? obj[target - numbers[i]] = numbers[i] : result.push(i, target - numbers[i]);
  }
  return result;
};
console.log('twosum3', twoSum(numbers,target));


var twoSum4 = (numbers, target) => {
  var p1 = 0;
  var p2 = numbers.length - 1;

  while (p1 < p2) {
    var sum = numbers[p1] + numbers[p2];
    if (sum === target) break;
    else {
      if (sum < target) p1++;
      else p2--;
    }
  }
  return [p1 + 1, p2 + 1];
}
console.log('twosum4', twoSum4(numbers, target));
