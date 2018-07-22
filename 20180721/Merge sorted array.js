const mergeArrays = (myArray, alicesArray) => {
  var arr = [];
  while (myArray.length && alicesArray.length) {
    if(myArray[0] < alicesArray[0]) {
      arr.push(myArray.shift());
    } else {
      arr.push(alicesArray.shift());
    }
  }
  return arr;
}

var myArray = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]


