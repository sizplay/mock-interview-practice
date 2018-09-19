const sample1 = 'abcdef'.split('');
const sample2 = [1, 2, 3, 4, 5, 6, 7, 8];

const chunkyArrayInGroups = (arr, size) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(arr.shift());
  }
  return [result, arr];
}

console.log('chunkyArrayInGroups(sample1,4) :', chunkyArrayInGroups(sample1,4));
