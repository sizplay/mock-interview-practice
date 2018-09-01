const sample1 = [1, 3, 5, 7, 9];
const sample2 = [2, 4, 6, 8, 10];

const merge = (str1, str2) => {

  let i = 0, j = 0;
  const arr = [];
  while (i <= str1.length && j <= str2.length) {
    if(str1[i] > str2[j]) {
      arr.push(str2[j]);
      j++;
    }
    else {
      arr.push(str1[i]);
      i++;
    }
  }
  return arr;
}
console.log(merge(sample1, sample2));
