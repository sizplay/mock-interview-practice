const numArr = [
  [567, 64, 2346, 121],
  [75, 234, 6786, 6784],
  [1465, 7686, 3435, 121],
  [654, 23, 2, 5]
];

const largestOfFour = (arr) => {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    var temp = 0;
    for(let j = 0; j < arr[i].length; j++) {
      if (temp <= arr[i][j]) temp = arr[i][j];
    }
    result.push(temp);
  }
  return result;
}

console.log(largestOfFour(numArr));

const largestOfFour2 = (arr) => {
  return arr.map(group => {
    return group.reduce((prev, next) => {
      return (prev < next) ? next : prev;
    })
  })
}

console.log(largestOfFour2(numArr));
