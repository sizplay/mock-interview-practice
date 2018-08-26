var input =
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
//Output: [1, 2, 4, 7, 5, 3, 6, 8, 9]

var findDiagonalOrder = function (matrix) {
  let len = matrix.length;
  if (!len) return [];
  let len2 = matrix[0].length, len3 = len * len2, arr = [];
  let i = 0, j = 0, k = 0;

  while (k < len3) {
    arr.push(matrix[i][j]);
    if ((i + j) % 2 === 1) {
      if (i === len - 1) j++;
      else if (j === 0) i++;
      else i++, j--;
    } else {
      if (j === len2 - 1) i++;
      else if (i === 0) j++;
      else i--, j++;
    }
    k++;
  }
  return arr;
};

console.log(findDiagonalOrder(input));
