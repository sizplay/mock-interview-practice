const sample1 = [1, 2, 3, 4, 4, 5, 5];
const sample2 = [1, 1, 2, 2, 3, 3, 4, 4];

const mean = (arr) => {
 return arr.reduce((result, next) => result + next) / arr.length;
}
console.log('sample1 :', mean(sample1));

const median = (arr) => {
  if (arr % 2 === 0) return (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2)] -1) / 2;
  else return arr[Math.floor(arr.length / 2)];
}
console.log('median(sample1) :', median(sample1));
console.log('median(sample2) :', median(sample2));
