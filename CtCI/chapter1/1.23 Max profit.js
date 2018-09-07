var arr1 = [10, 7, 5, 8, 11, 9, 1];
//we should find Max number of selling price - buying price

//at first, find current idx of min
//compare if max - min is less than i - current idx of min
//then max = i min = current idx of min.
const getMaxProfit = (arr) => {
  let minIdx = 0, maxIdx = 1;
  let currentMin = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr.length < 2) throw new Error('it should be more than 3');
    if (arr[i] < arr[currentMin]) currentMin = i; //current min;

    if (arr[maxIdx] - arr[minIdx] < arr[i] - arr[currentMin]) {
      maxIdx = i;
      minIdx = currentMin;
    }
  }
  return arr[maxIdx] - arr[minIdx];
}

console.log(getMaxProfit(arr1));
