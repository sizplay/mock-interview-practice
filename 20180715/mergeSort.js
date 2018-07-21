const mergeSort = (arrayToSort) => {

  //Base case: arrays with fewer than 2 elements are sorted.
  if (arrayToSort.length < 2) return arrayToSort;

  //Step 1: divide the array in half
  //we need to round down to avoid getting a "half index"
  var midIndex = Math.floor(arrayToSort.length / 2);
  var left = arrayToSort.slice(0, midIndex);
  var right = arrayToSort.slice(midIndex);

  //Step 2: sort each half
  var sortedLeft = mergeSort(left);
  var sortedRight = mergeSort(right);

  //Step 3: merge the sorted halves
  var sortedArray = [];

  while (sortedLeft.length || sortedRight.length) {
    if(sortedLeft.length && (!sortedRight.length || sortedLeft[0] < sortedRight[0])) {
      sortedArray.push(sortedLeft.shift());
    } else {
      sortedArray.push(sortedRight.shift());
    }
  }
  return sortedArray;
}
