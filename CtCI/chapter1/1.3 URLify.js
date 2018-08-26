//Write a method to replace all spaces in a string with '%20'. you may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

const sample = 'Mr John Smith';

const urlify1 = (str) => {
  return str.split(' ').join('%20');
}

console.log(urlify1(sample,13));

const urlify2 = (str, count) => {
  let arr = str.split('');
  for(let i = count - 1; i >= 0; i--) {
    if(arr[i] === ' ') arr[i] = '%20';
  }
  return arr.join('');
}

console.log(urlify2(sample, 13));
